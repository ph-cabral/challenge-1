import React, { useEffect, useState } from 'react';
import imagen from '../assets/imagen.png'
import { Link } from 'react-router-dom'
import { ContainerError, BUTTON, Img } from '../styles/styleComponents';


export default function Error() {

    const [state, setState] = useState('')

    useEffect(() => {
        localStorage.getItem('token') !== null
            ? setState('/DatesUsers')
            : setState('/')
    }, [])


    return <ContainerError>

        <Link to={state}>
            <BUTTON>
                Regresar
            </BUTTON>
        </Link>
        <Img src={imagen} alt="working..." />
    </ContainerError>
}