import React from 'react'
import * as Home from '../Home/Styles'
import * as L from './Styles'

export const Login = () => {
    return (
        <Home.Content>
            <L.Info>
                <h1>Dra. Ana Maria, Bem vinda de volta</h1>
            </L.Info>

            <Home.FormContainer>
                <Home.inputContainer>
                    <Home.labelContent>
                        <label htmlFor="user">Nome de usuário:</label>
                        <input type="text" name="user" id="user" />
                    </Home.labelContent>
                    <Home.labelContent>
                        <label htmlFor="password">Senha:</label>
                        <input type="password" name="password" id="password" />
                    </Home.labelContent>

                    <Home.checkContent>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="check">Lembrar-me</label>
                    </Home.checkContent>
                </Home.inputContainer>

                <Home.buttonContent>
                    <p>Esqueceu a senha?</p>
                    <Home.buttonAvancar type='submit'>Fazer login</Home.buttonAvancar>
                </Home.buttonContent>
            </Home.FormContainer>
        </Home.Content>
    )
}
