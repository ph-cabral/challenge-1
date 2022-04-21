import React from 'react';
import { ContainerSideNav, SideNav } from '../styles/styleComponents'



export default function SideBar({ loading, clientes, funcion, state }) {

 
    return (
        <>
            <ContainerSideNav>
                <SideNav>

                    <h3>Clientes</h3>
                    <ul>
                        {
                            loading ? 'cargando clientes'
                                : clientes.map(({ id, name }) =>
                                    <li
                                        key={id}
                                        onClick={() => funcion(id)}
                                        className={state === id ? "on" : "off" }
                                        id={id}
                                        >
                                        <span>
                                            {name}
                                        </span>
                                    </li>
                                )
                        }
                    </ul>
                    <span />
                </SideNav>
            </ContainerSideNav>
        </>
    )

}