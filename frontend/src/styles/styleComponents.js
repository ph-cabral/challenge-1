import styled, { keyframes } from 'styled-components';
import { Alert, Table, Form, Button, Image } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'



///### Log In ###///

export const ContainerLogIn = styled.div`
    width: 300px;
    min-height: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FormContainer = styled.div`
    min-width: 200px
`

export const Label = styled(Form.Label)`
    color:white
`

export const Input = styled(Form.Control)`
    border: none;
    background: none;
    border-bottom: 2px #e0bb65 solid;
    color: white;
    outline-style: none;
    font-size: 25px;
    text-align: center;

        &:focus{
            outline: none;
            background:none;
            color: white;   
            outline-style: none;
            border-bottom: 4px #f0b01c solid;
            box-shadow: none
        }

    ::placeholder{
    font-size: 1em;
    font-style: italic;
    text-align: center;
    }
`




////### User Data ###///

export const ContainerUser = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`

export const Body = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`



///### Data filter ###///

export const ContainerCalendar = styled.div`
    margin: 20px auto;
    display:flex;
    height: 150px;
    max-width: 600px;

        i{
            display: none;
        }

        @media (max-width: 800px){
            display: flex;
            flex-direction: column;
            padding: auto;
            justify-content: space-evenly
            
            input{
                position: relative;
                z-index: -1
            }

            div {
                margin: auto

            }
     
            i{
                display: block;
                margin: auto;
                margin-bottom: 5px
        }
            button{
                margin: auto
            }
        }

        div{
            background:none;
                color:#f0b01c;
                font-weight: 20px;
                margin-top: -25px
                
                &:nth-child(2) {
                    margin-top: -150px
                  }
            }

        }
`

export const Calendar = styled(DatePicker)`
    background: none;
    outline-style: none;
    border: 1px #f0b01c solid;
    height: 40px;
    color: #f0b01c;
    font-weight: 15px;
    border-radius: 3px;
    cursor: pointer;
    margin: auto;

   

        &:hover{
            background: #f0b01c;
            color: black
        }

        ::placeholder{
            font-size: 18px;
            color: #f0b01c;
            text-align: center;
            font-weight: 400;
        }

            &:hover::placeholder{
                color: black
            }        

        @media (max-width: 800px){
            margin auto !important;

        }


`



///### SideBar ###///

export const ContainerSideNav = styled.div`
    height: 100vh;
    min-width: 180px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;

    h3{
        margin: auto;
    }
 
        i{
            display:none
        }
            @media (max-width: 800px){
                position: fixed;
                background: rgba(255, 255, 255, .9);
                width: 100vw;
                transition: transform 0.5s cubic-bezier(0.55, 0, 0.1, 1), -webkit-transform 0.5s cubic-bezier(0.55, 0, 0.1, 1);
                transform: ${({ theme }) => theme.move};
            

                    i{
                        display: block;
                        }    
                    
            }
`

export const SideNav = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 800px){
        text-align: center;
        transform: rotate(360deg);
        z-index: -1;
    }
`




///### ERROR ###///

export const ContainerError = styled.div`
    display: flex;
    backgraund: red;
`

export const BUTTON = styled(Button)`
    position: absolute  
`

export const Img = styled(Image)`
    width: 100vw;
    height: 100vh;
`



///### Table ###///

export const ContainerTable = styled.div`
    width: 100%;
    height: calc(100% - 150px);
    display:flex;
    align-item: center;
    overflow: scroll;
    
    overflow-x: auto;
    overflow-y: auto;

`

export const TABLE = styled(Table)`
    min-width: 1000px;
    max-width: 100%;
`

export const Thead = styled.thead`
    background: #f0b01c;

    @media (max-width: 800px){
    }

`

export const Tbody = styled.tbody`

    tr{
        position: relative;
        background: rgba(255,255,255,.8);
        z-index: -1;
        &:hover{
            background: #f0b01c

    }

`




///### Alert ###/// 

export const Delete = keyframes`
    0% {
        transform: translateY(-100%);
    }
    50% {
        transform: translateY(0%);
    }
    100%{
        transform: translateY(-100%);
    }
`
// translate: .3s;
// transform: translateY(-100%);

export const ALERT = styled(Alert)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    animation: ${Delete} .3s 5s .3s alternate;

`

export const ContainerLoader = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`