import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap'
import { getToken } from '../redux/ducks/logIn';
import logo from '../assets/logo.jpg'
import { ContainerLogIn, FormContainer, Label, Input } from '../styles/styleComponents'
import { useNavigate } from 'react-router-dom';
import Message from '../components/Message';



export default function ScreenLogIn() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { errorLogIn } = useSelector(state => state.logIn)


    const [usuario, setUsuario] = useState({
        'email': "reactdev@iniceptia.ai",
        'password': "4eSBbHqiCTPdBCTj",
    })

    const changeHandle = ({ target }) => {
        setUsuario({
            ...usuario,
            [target.name]: target.value
        })
    }

    const dir = () => {
            navigate('/DatesUsers')
    }

    const Submit = (e) => {
        e.preventDefault()
        dispatch(getToken(usuario))
        setTimeout(dir, 1000)
    }

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            navigate('/DatesUsers')
        }
    }, [])



    return (
        <ContainerLogIn>
            {
                errorLogIn
                    ?
                    <Message variant="danger">
                        {errorLogIn === 'Request failed with status code 400'
                            ? 'Usuario y/o Contraseña erronea'
                            : errorLogIn
                        }
                    </Message>
                    : null
            }
            <div>
                <img src={logo} alt="inceptia.ia" style={{ borderRadius: '8px' }} />
            </div>

            <FormContainer>

                <Form onSubmit={Submit} >
                    <Form.Group className="mb-3">
                        <Label>Email address</Label>
                        <Input
                            type="email"
                            name='email'
                            value={usuario.email}
                            onChange={(e) => changeHandle(e)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Label>Password</Label>
                        <Input
                            type="password"
                            name='password'
                            value={usuario.password}
                            onChange={(e) => changeHandle(e)}
                        />
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="submit"
                    >
                        Log In
                    </Button>

                </Form>
            </FormContainer>
        </ContainerLogIn>
    )

}


