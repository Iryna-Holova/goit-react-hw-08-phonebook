import styled from 'styled-components';

export const SubmitButton = styled.button`
width: 100%;
padding: 10px;
border-radius: 5px;
text-align: center;
font-size: 24px;
font-weight: bold;
color: #ffffff;
background-color: #557294;
transition: background-color 300ms ease-in-out;

:hover, :focus {
    background-color: #305885;
}

:disabled {
    opacity: 0.6;
}
`;