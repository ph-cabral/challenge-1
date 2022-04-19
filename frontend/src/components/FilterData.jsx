import styled from 'styled-components';
import React, { useEffect } from 'react';
import { enGB } from 'date-fns/locale'
import { DateRangePicker, START_DATE } from 'react-nice-dates'
import axios from 'axios'
import 'react-nice-dates/build/style.css'
import useStates from './States';


const Container = styled.div`
width: 200px;
height: 200px

`

export default function FilterData() {

    const { startDate, endDate, ChangeDatos } = useStates()


    useEffect(() => {
      

        if (startDate !== null && endDate === null)
            axios.get(Casos, {
                headers: { 'Authorization': 'JWT ' + localStorage.getItem('token') },
                params:
                {
                    'client': '28',
                    'local_updated__date__gte': startDate.toISOString().substring(0, endDate.toISOString().length - 14),
                    'local_updated__date__lte': endDate.toISOString().substring(0, endDate.toISOString().length - 14)
                }
            })
                .then(({ data }) =>
                    ChangeDatos('detalle', data)
                )
    }, [ endDate !== null])


    return (
        <Container >
            <DateRangePicker
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={(item) => ChangeDatos('startDate', item)}
                onEndDateChange={(item) => ChangeDatos('endDate', item)}
                minimumLength={1}
                format='dd MMM yyyy'
                locale={enGB}
            >
                {({ startDateInputProps, endDateInputProps, focus }) => (
                    <div className='date-range'>
                        <input
                            className={'input' + (focus === START_DATE ? ' -focused' : '')}
                            {...startDateInputProps}
                            placeholder='Start date'
                            value={startDateInputProps.value + ' ... ' + endDateInputProps.value}
                        />
                    </div>
                )}
            </DateRangePicker>
        </Container >

    )
}