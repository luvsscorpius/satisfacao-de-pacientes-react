import styled from 'styled-components'

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const FormContainer = styled.form`
    width: 889px;
    height: 489px;
    border: 1px solid #DDDDDD;
    border-radius: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
`

// InputContainer

export const inputContainer = styled.div`
    width: 800px;
    height: 197px;
    border: 1px solid #DDDDDD;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
`

export const labelContent = styled.div`
    width: 400px;
    height: 50px;
    display: flex;
    flex-direction: column;

    input {
        background-color: #eee;
        border: 1px solid #eee;
        outline: 1px solid #ddd;
        height: 60px;
        margin-bottom: 5px;
    }
`

export const checkContent = styled.div`
    display: flex;
    flex-direction: row;
    height: 30px;
    width: 400px;
    gap: 5px;
    
    label {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input[type="checkbox"] {
        width: 15px;    
        cursor: pointer;
    }
`

// Button

export const buttonContent = styled.div`
    width: 800px;
    height: 44px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`

export const buttonAvancar = styled.button`
    width: 121px;
    height: 44px;
    background-color: #457B9D;
    color: #fff;
    text-align: center;
    cursor: pointer;
    border: 1px solid #457B9D;
    border-radius: 5px;
    font-size: 0.9rem;
    font-weight: bold;    
    transition: transform 0.1s ease-in-out;

    &:active {
        transform: scale(0.97);
    }
`