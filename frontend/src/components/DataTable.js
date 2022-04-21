import React from 'react';
import { ContainerTable, TABLE, Thead, Tbody } from '../styles/styleComponents';
import Loader from './Loader';



export default function DataTable({ casos, loadingCasos }) {


    return (
        <ContainerTable>

            {casos !== null

                && Object.keys(casos).length === 0
                ? <h2>No hay datos en estas fechas o este cliente</h2>
                : casos === null
                    ? <h2>Selecciona algun cliente por favor</h2>
                    : loadingCasos
                        ? <Loader />
                        :
                        <TABLE striped hover
                        >
                            <Thead>
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
                            </Thead>
                            <Tbody>
                                {casos.map((item, index) =>
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
                            </Tbody>
                        </TABLE>
            }

        </ContainerTable>
    )
}