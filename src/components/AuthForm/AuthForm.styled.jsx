import styled from 'styled-components';

export const AuthFormWrapper = styled.div`
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 90vw;
    max-width: 800px;
`

export const FormBody = styled.form`
    display: flex;
    flex-direction: column;
`

export const FormLabel = styled.label`
    display: flex;
    flex-direction: column;
    position: relative;
    font-size: 24px;
    font-style: italic;
    margin-bottom: 40px;
    border-bottom: 1px solid #000000;

    & input{
        background-color: transparent;
        outline: none;
        border: none;
        font-family: inherit;
        font-size: inherit;
        height: 40px;
    }
`

export const Error = styled.div`
    position: absolute;
    bottom: -30px;
    right: 0;
    color: #ec1616;
    font-style: italic;
`