import styled from "styled-components";

export const Steps = styled.div`
    width: 800px;
    height: 90px;
    border: 1px solid #DDDDDD;
    border-radius: 9px;
    display: flex;
    gap: 4rem;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    position: relative;

    &:after {
        content: "";
        width: 380px;
        border-bottom: 1px solid #ccc;
        position: absolute;
        top: 30px;
    }

    .active {
        font-weight: bold;  
        color: #457B9D;
    }

    .active > svg {
        fill: #457B9D;
    }
`

export const Step = styled.div`
    text-align: center;
    background-color: #fff;
    z-index: 1;
    width: 100px;
    padding: 0.5rem;
    cursor: pointer;

    .icon {
        height: 40px;
        font-size: 20px;
    }

    .icon.star {
        font-size: 25px;
    }

    p {
       height: 20px;
    }
`