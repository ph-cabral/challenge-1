import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getClientes } from '../redux/ducks/getClients';
import { getCasos, filterCasos, editarFechas } from '../redux/ducks/getCasos';
import { ContainerUser, Body } from '../styles/styleComponents';
import Loader from '../components/Loader';
import SideBar from '../components/SideBar';
import DataTable from '../components/DataTable';
import FilterData from '../components/FilterData';
import Message from '../components/Message';
import { useThemeContext } from '../context/moveContext';


export default function ScreenUsuario() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { toggleTheme } = useThemeContext()


    const [state, setState] = useState({ selected: null })


    const { loading, clientes, loadingClientes, errorClientes } = useSelector(state => state.clientes)
    const { casos, startDate, endDate, loadingCasos, errorCasos } = useSelector(state => state.casos)


    useEffect(() => {

        if (localStorage.getItem('token') === null) {
            navigate('/')
        }

        if (clientes === null) {
            dispatch(getClientes(localStorage.getItem('token')))
        }


    }, [])

    const handleChildClick = id => {
        setState(id)
        dispatch(getCasos(id))
        toggleTheme()
    }


    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            {
                loading
                    ? < Loader />
                    : loadingClientes
                        ? <Loader />
                        : errorClientes
                            ? <Message variant="danger">
                                {errorClientes}
                            </Message>
                            : (
                                <ContainerUser>
                                    <SideBar
                                        state={state}
                                        loading={loading}
                                        clientes={clientes}
                                        funcion={handleChildClick}
                                    />
                                    <Body>
                                        <FilterData
                                            dispatch={dispatch}
                                            estadoUno={startDate}
                                            estadoDos={endDate}
                                            accionGet={filterCasos}
                                            accionFecha={editarFechas}
                                        />

                                        {errorCasos
                                            ? <Message variant="danger">
                                                {errorCasos}
                                            </Message>
                                            :
                                            <DataTable
                                                casos={casos}
                                                loadingCasos={loadingCasos}
                                            />
                                        }
                                    </Body>
                                </ContainerUser>
                            )
            }
        </div>
    )
}

