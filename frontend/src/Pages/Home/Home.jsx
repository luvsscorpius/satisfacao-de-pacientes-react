import React, { useContext, useState } from 'react'
import * as H from './Styles'
import { useNavigate } from 'react-router-dom';
import {Info} from '../../Components/Info/Info';
import {Steps} from '../../Components/Steps/Steps';
import { Context } from '../../Context/Context';

export const Home = () => {
    const {userInfo, setUserInfo} = useContext(Context)

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/avalie')
    }

    return (
        <H.Content>
            <Info titulo="Deixe sua avaliação" p="Ficamos felizes com a sua sessão, utilize o formulário abaixo para avaliar o produto"/>

            <H.FormContainer>

                <Steps/>

                <H.inputContainer>
                    <H.labelContent>
                        <label htmlFor="">Nome:</label>
                        <input type="text" name="name" id="name" />
                    </H.labelContent>

                    <H.labelContent>
                        <label htmlFor="">Email:</label>
                        <input type="email" name="email" id="email"  />
                    </H.labelContent>

                    <H.checkContent>
                        <input type="checkbox" name="check" id="check" />
                        <label htmlFor="check">Desejo permanecer anônimo</label>
                    </H.checkContent>
                </H.inputContainer>

                <H.buttonContent>
                    <H.buttonAvancar onClick={handleClick}>Avançar</H.buttonAvancar>
                </H.buttonContent>
            </H.FormContainer>
        </H.Content>
    )
}
