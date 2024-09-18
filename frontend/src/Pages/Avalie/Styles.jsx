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
        height: 20px;
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
`