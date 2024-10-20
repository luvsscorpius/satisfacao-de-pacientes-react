import styled from "styled-components";

export const rateContent = styled.div`
    width: 625px;
    height: 75px;
    border: 1px solid #DDDDDD;
    border-radius: 9px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    position: relative;
    
    span {
        height: 90%;
        text-align: center;
        border: 1px solid #ccc;
        width: 70px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        input {
            opacity: 0;
            position: absolute;
            width: 65px;
            height: 100px;
            cursor: pointer;
        }
    }

    svg {
        cursor: pointer;
        font-size: 1.6rem;
        transition: 0.3s;
        height: 40px;
    }

    svg:hover {
        fill: #457B9D;
    }

    input:checked ~ svg {
        fill: #457B9D;
    }

    @media (max-width: 724px) {
        width: 90%;
    }

    @media (max-width: 1024px) {
        width: 90%;
    }
`

export const textAreaContent = styled.div`
    width: 625px;
    height: 100px;
    display: flex;
    flex-direction: column;

    label {
        height: 20px;
    }

    textarea {
        border: 1px solid #DDDDDD;
        border-radius: 9px;
        padding: 10px;

        &::placeholder {
            padding: 0px;
        }   
    }

    @media (max-width: 724px) {
        width: 90%;
    }

    @media (max-width: 1024px) {
        width: 90%;
    }
`