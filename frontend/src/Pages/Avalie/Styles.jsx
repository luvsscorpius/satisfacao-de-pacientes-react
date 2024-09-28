import styled from "styled-components";

export const divP = styled.div`
    width: 625px;
    height: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;

    p {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 724px) {
        width: 90%;
        gap: 0.5rem;
    }
`

export const blocksContent = styled.div`
    width: 400px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        border: 1px solid #000000;
        width: 56px;
        height: 53px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        transition: 0.3 ease-in-out;

        p {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;
            width: 100%;
            height: 100%;
        }

        input {
            opacity: 0;
            position: absolute;
            width: 20px;
            cursor: pointer;
        }

        input:checked + p {
            background-color: #457B9D;
            color: #fff; 
        }

        input:hover + p {
            background-color: #457B9D;
            color: #fff; 
        }
    }

    @media (max-width: 724px) {
        width: 90%;
        gap: 0.5rem;
    }
`

export const divP2 = styled.div`
    width: 625px;
    height: 30px;
    text-align: center;
    display: flex;
    justify-content: space-around;

    p {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    
    @media (max-width: 724px) {
        width: 90%;
    }
`