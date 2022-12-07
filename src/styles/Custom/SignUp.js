import styled from "styled-components";

export const Container = styled.main`
    .sign-form{
        width: 550px;
        @media(max-width: 576px){
            width: 350px;
        }
        @media(max-width: 400px){
            width: 300px;
        }
    }
    h1{
        color: ${props => props.theme.primaryColor};
    }
    label{
        color: ${props => props.theme.textColor};
    }
    .form-label{
        @media(max-width:400px){
            font-size: 16px !important;
        }
    }
    .form-control{
        @media(max-width:576px){
            font-size: 14px !important;
        }
        @media(max-width:400px){
            font-size: 13px !important;
        }
    }
    .checkbox-label{
        color: ${props => props.theme.primaryColor};
        @media(max-width:576px){
            font-size: 16px !important;
        }
        @media(max-width:400px){
            font-size: 14px !important;
        }
    }
    span{
        color: ${props => props.theme.errorColor};
        @media(max-width:576px){
            font-size: 12px !important;
        }
    }
`