import React from 'react';
import { Spinner } from 'react-bootstrap';
import {ContainerLoader} from '../styles/styleComponents'


export default function Loader() {
    return (
        <ContainerLoader>
            <Spinner
                animation='border'
                role='status'
                variant="danger"
                style={{
                    height: '100px',
                    width: '100px',
                    margin: 'auto',
                }}
            >
            </Spinner>
        </ContainerLoader>
    )
}
