import React, { useEffect, useState } from 'react';
import axios from 'axios'
// import Table from './components/Table';
// import Search from './components/Search';
// import Loader from './components/Loader';
// import FilterData from './components/FilterData';
// import { Container, Contai, Side, TableC, SearchClient, SearchDate } from './style/appStyles';
// import { useDispatch, useSelector } from 'react-redux'
// import { getUsuario } from './redux/LogIn';


// const LogIn = 'https://admindev.inceptia.ai/api/v1/login/'
// const Casos = 'https://admindev.inceptia.ai/api/v1/inbound-case/'


export default function App() {
    const datos = {
        email: "reactdev@iniceptia.ai",
        password: "4eSBbHqiCTPdBCTj",
    }
    const [fechauno, setFechauno] = useState(null)
    const [fechados, setFechados] = useState(null)
    const [info, setInfo] = useState(null)

    // const dispatch = useDispatch()

    // const { loading, cliente, errorCliente } = useSelector(state => state.cliente)
    // const { casos, errorCasos } = useSelector(state => state.casos)
    // const {  starrDate, endDate, errorfiltrado } = useSelector(state => state.filtrado)


    //#### solicitudes ya echas ####//
    useEffect(() => {
        //     if (localStorage.getItem('token') === null)
        //         axios({
        //             method: 'POST',
        //             url: 'https://admindev.inceptia.ai/api/v1/login/',
        //             data: datos
        //         }).then(
        //             ({ data }) => localStorage.setItem('token', data.token),
        //             err => console.log('Log In Error:', err),
        //         );


        //     if (localStorage.getItem('token') !== null )
        //         axios({
        //             url: 'https://admindev.inceptia.ai/api/v1/clients/',
        //             headers: { 'Authorization': 'JWT ' + localStorage.getItem('token') },
        //         }).then(
        //             ({ data }) => data.map((item) => localStorage.setItem('cliente', JSON.stringify(item))),
        //             err => console.log(err)
        //         )


        //     axios({
        //         url: 'https://admindev.inceptia.ai/api/v1/inbound-case/',
        //         headers: { 'Authorization': 'JWT ' + localStorage.getItem('token') },
        //         params:
        //         {
        //             'client':JSON.parse(localStorage.getItem('cliente')).id,
        //         }
        //     })
        //         .then(
        //             ({ data }) => localStorage.setItem('results', JSON.stringify(data.results)),
        //             err => console.log(err)
        //         )

        if (fechados !== null && fechauno !== null)
            axios(
                'https://admindev.inceptia.ai/api/v1/inbound-case/',
                {
                headers: { 'Authorization': 'JWT ' + localStorage.getItem('token') },
                params:
                {
                    'client': JSON.parse(localStorage.getItem('cliente')).id,
                    'local_updated__date__gte': fechauno,
                    'local_updated__date__lte': fechados,
                }
            })
                .then(
                    ({ data }) => setInfo(data.results),
                    err => console.log(err)
                )
    }, [fechados])




    console.log(fechauno, fechados)

    const date = (i) => {
        setFechados(i)
    }
    const data = (i) => {
        setFechauno(i)
    }


    // (i.replaceAll('/', '-')

    return (
        <div style={{ width: '100vw', background: 'red', height: '100vh', display: 'flex' }}>
            <div style={{ height: '100vh', background: 'blue', width: '200px' }}>
                sidebar
                {/* {
    dattt.map((item)=> (
        <li key={item[0]} onClick={console.log(item[0])}>
            {item[1]}
        </li>
    ))
} */}
                <li>
                    gmotors
                </li>
            </div>
            <div>

                <dir style={{ display: 'flex' }}>
                    buscador
                    <input
                        type="date"
                        onClick={e => data(e.target.value)} />
                    <input
                        type="date"
                        onClick={e => date(e.target.value)} />
                </dir>
                <div>

                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Gestionado</th>
                                <th scope="col">ID Caso</th>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Dni</th>
                                <th scope="col">Grupo</th>
                                <th scope="col">Orden</th>
                                <th scope="col">Llamada</th>
                                <th scope="col">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                info === null ?
                                    <tr>
                                        <td>
                                            'esperando seleccion'
                                        </td>
                                    </tr>
                                    :
                                    info.map((item, index) =>
                                        <tr key={index}>
                                            <td> {item.last_updated}</td>
                                            <td>{item.case_uuid}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.extra_metadata.dni}</td>
                                            <td>{item.extra_metadata.grupo}</td>
                                            <td>{item.extra_metadata.orden}</td>
                                            <td>{item.case_duration}</td>
                                            <td>{item.case_result.name}</td>
                                        </tr>
                                    )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )



}

