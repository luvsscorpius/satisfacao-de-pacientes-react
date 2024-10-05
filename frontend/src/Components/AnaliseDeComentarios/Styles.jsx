import styled from "styled-components";

export const mainContainer = styled.div`
    width: 100%;
    height: 100%;
`

export const navContainer = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    line-height: 28px;
    align-items: center;
    position: relative;

    span {
        width: 100%;
    }

    input {
        width: 100%;
        height: 40px;
        line-height: 28px;
        padding: 0 1rem;
        padding-left: 2.5rem;
        border: 2px solid transparent;
        border-radius: 8px;
        outline: none;
        background-color: #f3f3f4;
        color: #0d0c22;
        transition: .3s ease;

        &::placeholder {
            color: #9e9ea7; /* Cor do placeholder */
            opacity: 1; /* Aumenta a visibilidade do placeholder */
        }
    }

    input:focus, input:hover {
        outline: none;
        background-color: #fff;
        border-color: #457B9D;
        box-shadow: 0 2px 8px rgba(69, 123, 157, 0.5);
    }

    .icon {
        position: absolute;
        left: 1rem;
        fill: #9e9ea7;
        width: 1rem;
        height: 2.5rem;
    }

`