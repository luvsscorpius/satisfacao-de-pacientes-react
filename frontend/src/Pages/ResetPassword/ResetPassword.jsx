import React, { useContext } from 'react'
import * as Home from '../Home/Styles'
import * as R from '../ResetPassword/Styles'
import { FaArrowLeft } from "react-icons/fa";
import { Context } from '../../Context/Context';

export const ResetPassword = () => {
    const {navigate} = useContext(Context)

  return (
    <Home.Content>
        <R.Info>
            <span onClick={() => navigate('/login')}>
                <FaArrowLeft/>
                <p>Voltar</p>
            </span>

            <h1>Redefinicao de senha!</h1>
        </R.Info>

        <Home.FormContainer>
            <Home.inputContainer>
                <Home.labelContent>
                    <p>Por favor, digite sua nova senha para completar o processo de redefinição.</p>
                </Home.labelContent>

                <Home.labelContent>
                    <label htmlFor="password">Nova senha:</label>
                    <input type="email" name="password" id="passwordreset" placeholder='Digite a nova senha' />
                </Home.labelContent>
            </Home.inputContainer>

            <Home.buttonContent>
                <Home.buttonAvancar >Redefinir</Home.buttonAvancar>
            </Home.buttonContent>
        </Home.FormContainer>
    </Home.Content>
  )
}
