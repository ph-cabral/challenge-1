import axios from 'axios'


// CONSTANTS
const initialState = {
    loadingClientes: true,
    clientes: null,
    errorClientes: null
}


const CLIENTES_REQUEST = 'clientes/request'
const CLIENTES_SUCCESS = 'clientes/success'
const CLIENTES_FAIL = 'clientes/fail'



// REDUCERS
export default function ClientesReducer(state = initialState, action) {
    switch (action.type) {

        case CLIENTES_REQUEST:
            return { ...state, loadingClientes: true }

        case CLIENTES_SUCCESS:
            return { ...state, loadingClientes: false, clientes: action.payload }

        case CLIENTES_FAIL:
            return { ...state, loadingClientes: false, errorClientes: action.payload }

        default:
            return state
    }
}



// ACTIONS
export const getClientes = () => async (dispatch) => {

    dispatch({ type: CLIENTES_REQUEST })

    await axios({
        method: 'GET',
        url: 'https://admindev.inceptia.ai/api/v1/clients/',
        headers: { 'Authorization': 'JWT ' + localStorage.getItem('token') },
    }).then(
        ({ data }) => {
            dispatch({ type: CLIENTES_SUCCESS, payload: data })
        },
        err => dispatch({
            type: CLIENTES_FAIL,
            payload: err.response
                && err.response.data.detail
                ? err.response.data.detail
                : err.message
        })
    )
}