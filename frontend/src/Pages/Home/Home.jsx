import React, { useContext, useState } from 'react'
import * as H from './Styles'
import { useNavigate } from 'react-router-dom';
import {Info} from '../../Components/Info/Info';
import {Steps} from '../../Components/Steps/Steps';
import { Context } from '../../Context/Context';

export const Home = () => {
    const {userInfo, setUserInfo, isChecked, setIsChecked} = useContext(Context)

    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
    }

    console.log(isChecked)

    const checkIsChecked = () => {
        if (!isChecked) {
            
        }
    }

    const handleToggleCheck = () => {
        setIsChecked(prevState => !prevState)
        console.log(isChecked)
    }

    return (
        <H.Content>
            <Info titulo="Deixe sua avaliação" p="Ficamos felizes com a sua sessão, utilize o formulário abaixo para avaliar o produto"/>

            <H.FormContainer onSubmit={handleClick}>

                <Steps/>

                <H.inputContainer>
                    <H.labelContent>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" name="name" id="name" required={isChecked}/>
                    </H.labelContent>

                    <H.labelContent>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" required={isChecked} />
                    </H.labelContent>

                    <H.checkContent>
                        <input type="checkbox" name="check" id="check" checked={isChecked} onChange={handleToggleCheck}/>
                        <label htmlFor="check">Desejo permanecer anônimo</label>
                    </H.checkContent>
                </H.inputContainer>

                <H.buttonContent>
                    <H.buttonAvancar type='submit' onClick={checkIsChecked}>Avançar</H.buttonAvancar>
                </H.buttonContent>
            </H.FormContainer>
        </H.Content>
    )
}
