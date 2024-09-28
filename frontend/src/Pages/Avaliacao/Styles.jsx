import styled from "styled-components";

export const rateContent = styled.div`
    width: 625px;
    height: 63px;
    border: 1px solid #DDDDDD;
    border-radius: 9px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    span {
        height: 100%;
        text-align: center;
        position: relative;

        input {
            opacity: 0;
            position: absolute;
            width: 20px;
            top: 13px;
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
`