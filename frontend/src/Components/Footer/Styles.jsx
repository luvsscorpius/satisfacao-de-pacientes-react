import styled from "styled-components";

export const Footer = styled.footer`
    width: 100%;
    height: 405px;
    background-color: #457B9D;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 724px) {
        height: 300px;
    }

    @media (max-width: 1024px) {
        width: 100vw;
    }
`

export const lineUp = styled.div`
    width: 800px;
    height: 8px;
    background-color: #A8DADC;
    margin: 0 auto;

    @media (max-width: 724px) {
        width: 204px;    
    }

    @media (max-width: 1024px) {
        width: 200px;
    }
`

export const lineDown = styled.div`
    width: 800px;
    height: 5px;
    background-color: #A8DADC;
    margin: 0 auto;

    @media (max-width: 724px) {
        width: 204px;    
    }

    @media (max-width: 1024px) {
        width: 200px;
    }
`

export const containers = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: 724px) {
        width: 100%; 
        height: 100%;
    }

    @media (max-width: 1024px) {
        width: 100%;
    }
`

export const acessoContainer = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center;

    @media (max-width: 724px) {
        width: 100%;
        height: 100%;

        h2 {
            font-size: 23px;
        }
    }
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

    @media (max-width: 724px) {
        display: none;
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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    color: #fff;
    height: 100%;

    h2 {
        width: 100%;
    }

    ul {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        height: 150px;
        gap: 10px;
    }

    li {
        list-style: none;
        cursor: pointer;
    }

`

export const contatoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;

    h2 {
        height: 30px;
    }
        
    span {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }

    ul {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        height: 150px;
        gap: 10px;
        margin: 100px;
    }

    li {
        list-style: none;
        max-width: 300px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 724px) { 
        height: 100%;
        width: 100%;

        ul {
            margin: 0px;
        }

        h2 {
            margin-top: 10px;
        }

        .location {
            width: 35px;
        }
    }

`

export const infoContainer = styled.div`
    width: 1100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;

    p {
        display: flex;
        align-items: center;
        color: #fff;
    }

    @media (max-width: 724px) {
        width: 90%;    
        gap: 10px;
        justify-content: center;
        height: 100px;

        p {
            width: 45%;
            text-align: center;
        }
    }
        
    @media (max-width: 1024px) {
        width: 90%;    
        gap: 10px;
        justify-content: center;
        height: 100px;

        p {
            text-align: center;
        }
    }
`