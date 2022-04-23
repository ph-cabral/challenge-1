import axios from 'axios'


// CONSTANTS
const initialState = {
    loadingCasos: true,
    casos: null,
    id: null,
    next: null,
    previous: null,
    startDate: null,
    endDate: null,
    errorCasos: null
}

const CASOS_REQUEST = 'casos/request'
const CASOS_SUCCESS = 'casos/success'
const CASOS_FAIL = 'casos/fail'
const FECHA_CASOS = 'casos/fechau'



// REDUCERS
export default function CasosReducer(state = initialState, action) {
    switch (action.type) {

        case CASOS_REQUEST:
            return { ...state, loadingCasos: true }

        case CASOS_SUCCESS:
            return {
                ...state,
                loadingCasos: false,
                casos: action.payload.data.results,
                id: action.payload.id,
                next: action.payload.data.next,
                previous: action.payload.data.previous
            }

        case FECHA_CASOS:
            return {
                ...state,
                loadingCasos: false,
                startDate: action.payload[0],
                endDate: action.payload[1]
            }

        case CASOS_FAIL:
            return { ...state, loadingCasos: false, errorCasos: action.payload }

        default:
            return state
    }
}



// ACTIONS
export const getCasos = (id) => async (dispatch) => {
    dispatch({ type: CASOS_REQUEST })

    await axios({
        url: 'https://admindev.inceptia.ai/api/v1/inbound-case/',
        headers: { 'Authorization': 'JWT ' + localStorage.getItem('token') },
        params:
        {
            'client': id,
        }
    })
        .then(
            ({ data }) =>
                dispatch({
                    type: CASOS_SUCCESS, payload: {
                        data: data,
                        id: id
                    }
                }),
            err => {dispatch({
                type: CASOS_FAIL,
                payload: err.response
                    && err.response.data.detail
                    ? err.response.data.detail
                    : err.message
            })}
        )
}


export const editarFechas = (fechas) => (dispatch) => {

    dispatch({ type: FECHA_CASOS, payload: fechas })
}


// filtrado  por fechas
export const filterCasos = () => async (dispatch, getState) => {
    const uno = JSON.stringify(getState().casos.startDate)
    const dos = JSON.stringify(getState().casos.endDate)
    const id = getState().casos.id


    if (dos !== null) {
        dispatch({ type: CASOS_REQUEST })

        await axios({
            url: 'https://admindev.inceptia.ai/api/v1/inbound-case/',
            headers: { 'Authorization': 'JWT ' + localStorage.getItem('token') },
            params:
            {
                'client': id,
                'local_updated__date__gte': uno.slice(1, uno.length - 15),
                'local_updated__date__lte': dos.slice(1, dos.length - 15)
            }
        })
            .then(
                ({ data }) => dispatch({ type: CASOS_SUCCESS, payload: { data: data, id: id } }),
                err => dispatch({
                    type: CASOS_FAIL,
                    payload: err.response
                        && err.response.data.detail
                        ? err.response.data.detail
                        : err.message
                })
            )
    }
}





/// ### BLOQUEADO POR CORS, PARA BUSQUEDA CON BOTON SIGUIENTE ###///

// export const nextCasos = () => async (dispatch, getState) => {
//     dispatch({ type: CASOS_REQUEST })
//     await axios({
//         url: getState().casos.next,
//         headers: { 'Authorization': 'JWT ' + localStorage.getItem('token') }
//     })
//         .then(
//             ({ data }) => dispatch({ type: CASOS_SUCCESS, payload: data }),
//             err => dispatch({ type: CASOS_FAIL,
//                 payload: payload: err.response
//                     && err.response.data.detail
//                     ? err.response.data.detail
//                     : err.message
//             })
//         )
// }

/// ### BLOQUEADO POR CORS, PARA BUSQUEDA CON BOTON ANTERIOR ###///

// export const previousCasos = () => async (dispatch, getState) => {
//     dispatch({ type: CASOS_REQUEST })

//     await axios({
//         url: getState().casos.previous,
//         headers: { 'Authorization': 'JWT ' + localStorage.getItem('token') }
//     })
//         .then(
//             ({ data }) => dispatch({ type: CASOS_SUCCESS, payload: data }),
//             err => dispatch({
//                 type: CASOS_FAIL,
//                 payload: payload: err.response
//                     && err.response.data.detail
//                     ? err.response.data.detail
//                     : err.message
//             })
//         )
// }