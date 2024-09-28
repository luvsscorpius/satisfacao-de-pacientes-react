import React, { useContext } from 'react'
import * as Home from '../Home/Styles'
import * as L from './Styles'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Context/Context'

export const Login = () => {
    const {handleLogin, loginData, setLoginData, isLembrarMe, setIsLembrarMe} = useContext(Context)
    const navigate = useNavigate()

    console.log(isLembrarMe)

    return (
        <Home.Content>
            <L.Info>
                <h1>Dra. Ana Maria, Bem vinda de volta</h1>
            </L.Info>

            <Home.FormContainer className='login'>
                <Home.inputContainer>
                    <Home.labelContent>
                        <label htmlFor="user">Nome de usuário:</label>
                        <input type="text" name="user" id="user" value={loginData.username || ''} onChange={(e) => setLoginData((prev) => ({...prev, username: e.target.value}))} />
                    </Home.labelContent>
                    <Home.labelContent>
                        <label htmlFor="password">Senha:</label>
                        <input type="password" name="password" id="password" value={loginData.password || ''} onChange={(e) => setLoginData((prev) => ({...prev, password: e.target.value}))} />
                    </Home.labelContent>

                    <Home.checkContent>
                        <input type="checkbox" name="lembrarme" id="lembrarme" value={isLembrarMe} onChange={(e) => setIsLembrarMe(prevState => !prevState)} />
                        <label htmlFor="check">Lembrar-me</label>
                    </Home.checkContent>
                </Home.inputContainer>

                <Home.buttonContent>
                    <p onClick={() => navigate('/login/forgotpassword')}>Esqueceu a senha?</p>
                    <Home.buttonAvancar type='submit' onClick={(e) => handleLogin(e)}>Fazer login</Home.buttonAvancar>
                </Home.buttonContent>
            </Home.FormContainer>
        </Home.Content>
    )
}
