import styled from "styled-components";

export const Footer = styled.footer`
    width: 100%;
    height: 405px;
    background-color: #457B9D;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const lineUp = styled.div`
    width: 600px;
    height: 8px;
    background-color: #A8DADC;
    margin: 0 auto;
`

export const lineDown = styled.div`
    width: 600px;
    height: 5px;
    background-color: #A8DADC;
    margin: 0 auto;
`

export const containers = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const acessoContainer = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center;
`

export const logoContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    img {
        height: 100px;
        width: 100px;
    }
`

export const iconsContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    img {
        height: 20px;
        cursor: pointer;
        width: 20px;
        margin: 10px;
    }
`

export const linksContainer = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;

    h2 {
        width: 100%;
        height: 50px;
    }

    ul {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        border: 1px solid red;
        height: 100px;
    }
`

export const contatoContainer = styled.div`
    width: 100%;
    border: 1px solid red;
`