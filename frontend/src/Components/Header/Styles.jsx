import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    background-color: #457B9D;
    height: 62px;
    display: flex;
    flex-direction: row;
`

export const HeaderTitle = styled.div`
    width: 100%;
    height: 62px;
    display: flex;
    align-items: center;
    color: #fff;
    padding: 10px;
    gap: 5px;

    h2 {
        display: flex;
        align-items: center;
    }

    img {
        width: 40px;
    }
`

export const HeaderIcon = styled.div`
    width: 100%;
    height: 62px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;

    span {
        font-size: 25px;
        cursor: pointer;
        color: #fff;
    }
`