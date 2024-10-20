import styled from 'styled-components'

export const resumoContent = styled.div`
    width: 625px;
    height: 200px; 
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
    border-radius: 9px;

    h3 {
        text-align: center;
    }

    p {
        display: flex;
        align-items: center;
        gap: 5px;
        padding-left: 10px;
        word-break: break-word;
        width: 100%;

        max-height: 100px;
    }

    @media (max-width: 724px) {
        width: 90%;
    }
`