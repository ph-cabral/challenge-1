import axios from 'axios'


// CONSTANTS
const initialState = {
    loading: true,
    token: '',
    errorLogIn: false
}


const LOGIN_REQUEST = 'login/request'
const LOGIN_SUCCESS = 'login/success'
const LOGIN_FAIL = 'login/fail'


// REDUCERS
export default function LoginReducer(state = initialState, action) {
    switch (action.type) {

        case LOGIN_REQUEST:
            return { loading: true, token: [] }

        case LOGIN_SUCCESS:
            return { loading: false, token: action.payload }

        case LOGIN_FAIL:
            return { loading: false, errorLogIn: action.payload }

        default:
            return state
    }
}


// ACTIONS
export const getToken = (usuario) => async (dispatch) => {

    dispatch({ type: LOGIN_REQUEST })

    await axios({
        method: 'POST',
        url: 'https://admindev.inceptia.ai/api/v1/login/',
        data: usuario
    }).then(
        ({ data }) => {
            localStorage.setItem('token', data.token)
            dispatch({ type: LOGIN_SUCCESS, payload: data.token })
        },
        err => dispatch({
            type: LOGIN_FAIL,
            payload: err.response
                && err.response.data.detail
                ? err.response.data.detail
                : err.message
        })
    );

}