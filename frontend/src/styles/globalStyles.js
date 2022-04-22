import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.jpg'



const GlobalStyle = createGlobalStyle`

    &.react-datepicker__input-container{
        display: flex;
    }

    &.react-datepicker-wrapper{
        width: 300px !important;
        height: 50px;
        margin-top: 10px



        @media (max-width: 800px){
            z-index: auto;
        }
    }

    &.react-datepicker{
        background: rgba(255, 255, 255, 1) !important;
        backdrop-filter: blur(10px) !important;

    }

    &.react-datepicker__day{
        transition: transform .1s;
        -webkit-text-stroke: .5px black;

            &:hover{
                transform: scale(1.5) !important;
                background: black !important;
                transition: transform .10s;
            }
    }

    &.react-datepicker__day--outside-month{
        background: rgba(255, 255, 255, 0.4) !important
    }

    *{
        code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            mono}

    }

    h2{
        margin: auto;
        text-align:center;
        color: white
    }

    h3{
        margin: 10px auto ;
        color: white !important;

        @media (max-width: 800px){
            color: black !important
        }
    }


  body {
    height: 100vh;
    width: 100vw;
    background-image: url(${background});
    background-size: cover;
    max-width: 100vw;
    max-height: 100vh;
    background-position: center center;
    background-attachment: fixed;
  }

    ul{
        margin: 0;
        padding: 0;
    }

  li{
    list-style-type: none;
    font-size: x-large;
    cursor: pointer;
    position: relative;
    left: 0;
    margin-top: 3px 0;
    border-left: 5px solid #f0b01c;
    transition: .4s;
    
        &:hover{
            
            ::before{
                transform: sacaleX(1);
                width: 100%;
            }
        }

        ::before{
            content: '';
            position: absolute;
            width: 0;
            height: 100%;
            background: #f0b01c;
            transform: sacaleX(0);
            transform-origin: left;
            transition: .3s;
        }

       
        span{
            width: 100%;
            color: #f0b01c;
            position: relative;
            padding: 8px;
            display: inline-block;
            transition: .4s;
            left: 5px;

                &:hover{
                    color: black;
                    left: 15px;
                    transition: .4s;
                }
        }

        &.on{
            span{
                left: 15px;
                color: black;

                @media (max-width: 800px){
                    
                }
            }
            ::before{
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background: #f0b01c;

                @media (max-width: 800px){
                    left: 0
                }
            }
    }

    



`;

export default GlobalStyle;