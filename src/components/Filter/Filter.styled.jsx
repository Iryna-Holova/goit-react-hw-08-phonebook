import styled from 'styled-components';

export const FilterContainer = styled.div`
margin: 0 auto 30px auto;
text-align: center;
`;

export const FilterLabel = styled.label`
border-bottom: 1px dotted #000000;
`;

export const FilterInput = styled.input`
border: none;
background-color: transparent;
outline: none;
font-size: inherit;
font-family: inherit;

&::placeholder {
    font-style: italic;
}
`;