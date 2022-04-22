import React from 'react';
import { Button } from 'react-bootstrap';
import { ContainerCalendar, Calendar } from '../styles/styleComponents';
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../context/moveContext';


export default function FilterData({ dispatch, accionFecha, accionGet, estadoUno, estadoDos }) {

    const { toggleTheme } = useThemeContext()

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
            <i
            style={{color: 'white'}}
                class="fa-solid fa-bars"
                onClick={toggleTheme}></i>
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
                style={{ height: '40px', width: '200px' }}
                variant="outline-warning"
                onClick={() => dispatch(accionGet())}
            >
                Filtrar
            </Button>
            <Button
                variant="outline-danger"
                style={{ height: '40px', width: '200px' }}
                onClick={logOut}
            >
                Log Out
            </Button>
        </ContainerCalendar>
    )
}
