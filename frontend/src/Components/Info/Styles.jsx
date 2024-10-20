import styled from "styled-components"

export const Info = styled.div`
    width: 889px;
    height: 125px;
    background-color: #457B9D;
    border-radius: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }

    p {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ddd;
    }

    @media (max-width: 724px) {
        width: 90%;

        p {
            text-align: center;
        }
    }

    @media (max-width: 1024px) {
        width: 90%;

        p {
            text-align: center;
        }
    }
`
