import styled from 'styled-components';

export const ContactItem = styled.li`
height: 30px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #305885;

:first-child {
    border-top: 1px solid #305885;
}
`;

export const ContactWrapper = styled.span`
width: 200px;
&:not(:first-child) {
    width: 150px;
}
`;

export const DeleteButton = styled.button`
transition: color 300ms ease-in-out;
font-size: 20px;

:hover, :focus {
    color: #305885;
}
`;