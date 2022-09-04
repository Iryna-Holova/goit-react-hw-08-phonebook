import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 20px;
    background-color: ${props => props.accent ? "#305885" : "#ffffff"};
    min-height: ${props => props.main ? 'calc(100vh - 80px)' : 'auto'};
    background-image: ${props => props.main ? "url('https://gamerwall.pro/uploads/posts/2021-11/1637105026_6-gamerwall-pro-p-tekstura-tetradi-v-kletku-oboi-na-zastavku-6.jpg')" : 'none'};
    padding-top: ${props => props.main ? "20px" : '0'};
    position: relative;
`

export const Header = styled.header`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.div`
    font-size: 36px;
    font-weight: 700;
    color: #ffffff;
`

export const AuthNavLink = styled.link`
    display: inline-block;
    width: 100px;
    padding: 10px 0;
    border-radius: 3px;
    font-size: 20px;
    text-align: center;
    color: #ffffff;
    transition: color 300ms ease-in-out;
    transition: background-color 300ms ease-in-out;

    &:last-child {
        margin-left: 10px;
    }

    &.active,
    &:hover,
    &:focus-within {
        font-weight: 500;
        background-color: #ffffff;
        color: inherit;
    }
`

export const Guest = styled.span`
    font-size: 18px;
    font-style: italic;
    color: #b8c5d4;
`