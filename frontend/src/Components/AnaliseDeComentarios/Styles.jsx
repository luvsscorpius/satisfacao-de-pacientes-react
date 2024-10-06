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
    gap: 10px;

    span {
        width: 100%;
    }

    input[type="search"] {
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

    .filters {
        width: 50%;
        gap: 10px;

        select {
            width: 100%;
            cursor: pointer;
            height: 2rem;
            border: 1px solid #E8EAED;
            border-radius: 5px;
            background: white;
            box-shadow: 0 1px 3px -2px #9098A9;
            font-family: inherit;
            font-size: 16px;
            transition: all 150ms;
            color: #9e9ea7;
        }
    }

    @media (max-width: 724px) {
        .filters {
            select {
                width: 100%;
            }
        }
    }

`

export const commentsContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 10px;

    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        list-style: none;
        margin-top: 10px;
        width: 100%;
        height: 40px;
        line-height: 28px;
        padding: 0 1rem;
        border: 2px solid transparent;
        border-radius: 8px;
        outline: none;
        background-color: #f3f3f4;
        color: #0d0c22;
        transition: .3s ease;

        li.page {
            width: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;

            &:hover {
                outline: none;
                background-color: #457B9D;
                border-color: #457B9D;
                box-shadow: 0 2px 8px rgba(69, 123, 157, 0.5);
                cursor: pointer;
                color: #fff;
            }
        }

        li.active {
                outline: none;
                background-color: #457B9D;
                border-color: #457B9D;
                box-shadow: 0 2px 8px rgba(69, 123, 157, 0.5);
                color: #fff;
        }

        li.next {
            width: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;

            &:hover {
                outline: none;
                background-color: #457B9D;
                border-color: #457B9D;
                box-shadow: 0 2px 8px rgba(69, 123, 157, 0.5);
                cursor: pointer;
                color: #fff;
            }
        }

        li.previous {
            width: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;

            &:hover {
                outline: none;
                background-color: #457B9D;
                border-color: #457B9D;
                box-shadow: 0 2px 8px rgba(69, 123, 157, 0.5);
                cursor: pointer;
                color: #fff;
            }
        }


    }
`

export const commentsContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    margin-top: 10px;
    border: 1px solid #dddd;
    gap: 10px;
    
    span {
        display: flex;
        gap: 10px;
    }

    .info {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 20px;
    }
`