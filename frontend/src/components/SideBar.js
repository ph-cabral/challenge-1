import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components'
import { ContainerSideNav, SideNav } from '../styles/styleComponents'
import { useThemeContext } from '../context/moveContext';
import { inside, outside } from '../styles/theme'
import { ThemeContext } from '../context/moveContext'



export default function SideBar({ loading, clientes, funcion, state }) {

    const { toggleTheme } = useThemeContext()
    const { theme } = useContext(ThemeContext)

    return (
        <div >
            <ThemeProvider theme={theme === 'there' ? outside : inside}>
                <ContainerSideNav>
                    <SideNav>
                        <div>
                               <i className="fa-solid fa-xmark"
                                style={{ marginTop: '-20px', position: 'relative' }}
                                onClick={toggleTheme}></i>
                            <h3>Clientes</h3>
                        </div>
                        <ul>
                            {
                                loading ? 'cargando clientes'
                                    : clientes.map(({ id, name }) =>
                                        <li
                                            key={id}
                                            onClick={() => funcion(id)}
                                            className={state === id ? "on" : "off"}
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
            </ThemeProvider>
        </div>
    )

}