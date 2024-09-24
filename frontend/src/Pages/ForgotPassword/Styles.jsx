import styled from "styled-components"

export const Info = styled.div`
    width: 889px;
    height: 125px;
    background-color: #457B9D;
    border-radius: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    color: #fff;

    span {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 5px;
        padding-top: 10px;
        opacity: 1;
        margin-left: 20px;
        width: 9%;

        p {
            display: flex;
            align-items: center;;
            justify-content: center;
            height: 30px;
            font-weight: bold;
        }

        svg {
            width: 15px;
            height: 30px;
        }
    }

    span:hover {
        cursor: pointer;
        opacity: 0.9;
    }

    h1 {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #fff;
        width: 100%;
        padding: 230px;
    }
`
