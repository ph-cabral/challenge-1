import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import LoginReducer from './ducks/logIn'
import CasosReducer from './ducks/getCasos'
import ClientesReducer from './ducks/getClients'


export default function generateStore() {
    return createStore(combineReducers({
        logIn: LoginReducer,
        clientes: ClientesReducer,
        casos: CasosReducer,
    }), composeWithDevTools(applyMiddleware(thunk)))
}
