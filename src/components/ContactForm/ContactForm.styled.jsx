import styled from 'styled-components';

export const FormTitle = styled.h2`
    margin-bottom: 20px;
    text-align: center;
`

export const Form = styled.form`
width: 350px;
box-sizing: border-box;
padding: 20px 30px;
margin-bottom: 20px;
border: 1px solid #305885;
display: flex;
flex-direction: column;
`;

export const Label = styled.label`
margin-bottom: 20px;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid black;
transition: color 300ms ease-in-out;

:hover,
:focus-within {
    color: #305885;
}
`;

export const Input = styled.input`
background-color: transparent;
outline: none;
border: none;
height: 25px;
width: 190px;
font-family: inherit;
font-size: 24px;
`;