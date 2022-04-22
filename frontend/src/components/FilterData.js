import React from 'react';
import { Button } from 'react-bootstrap';
import { ContainerCalendar, Calendar } from '../styles/styleComponents';
import { useNavigate } from 'react-router-dom';



export default function FilterData({ dispatch, accionFecha, accionGet, estadoUno, estadoDos }) {

    const navigate = useNavigate()

    const midif = i => {
        dispatch(accionFecha(i))
    }

    const logOut = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <ContainerCalendar>
            <Calendar
                selectsRange={true}
                startDate={estadoUno}
                endDate={estadoDos}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                onChange={(item) => midif(item)}
                dateFormat='dd MM yyyy'
                placeholderText='Seleccionar fechas'
            />
            <Button
                style={{ marginLeft: '15px', height: '40px', width: '200px' }}
                variant="outline-warning"
                onClick={() => dispatch(accionGet())}
            >
                Filtrar
            </Button>
            <Button
                variant="outline-danger"
                style={{ marginLeft: '15px', height: '40px', width: '200px' }}
                onClick={logOut}
            >
                Log Out
            </Button>
        </ContainerCalendar>
    )
}
