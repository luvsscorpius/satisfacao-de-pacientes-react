import React, { useContext, useState } from 'react'
import * as H from './Styles'
import { useNavigate } from 'react-router-dom';
import { Info } from '../../Components/Info/Info';
import { Steps } from '../../Components/Steps/Steps';
import { Context } from '../../Context/Context';

export const Home = () => {
    const { userInfo, setUserInfo, isChecked, setIsChecked, isRequired, setIsRequired, currentStep, changeStep } = useContext(Context)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    console.log(currentStep)

    const navigate = useNavigate()

    // Usando essa função para ver se o checkbox esta checado, se sim deixamos a pessoa passar para a próxima etapa do formulário
    const checkIsChecked = (e) => {
        // adicionando e.preventDefault para arrumar o erro de Form submission canceled because the form is not connected
        e.preventDefault()

        if (isChecked === true) {
            changeStep(currentStep + 1, e)
            navigate("/avaliacao")
        }

        if (name && email) {
            // Enviando as informações
            changeStep(currentStep + 1, e)
            navigate('/avaliacao')
        }
    }

    const handleToggleCheck = () => {
        setIsChecked(prevState => !prevState)
        // Usando setIsRequired para fazer o toggle de true/false ou vise versa para corrigir o erro de quando colocar o checkIsChecked no onSubmit ele permitir passar para a proxima pagina sendo anonimo
        setIsRequired(prevState => !prevState)
    }

    return (
        <H.Content>
            <Info titulo="Deixe sua avaliação" p="Ficamos felizes com a sua sessão, utilize o formulário abaixo para avaliar o produto" />

            <H.FormContainer onSubmit={(e) => checkIsChecked(e)} >

                <Steps currentStep={currentStep} />

                <H.inputContainer>
                    <H.labelContent>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required={isRequired} />
                    </H.labelContent>

                    <H.labelContent>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required={isRequired} />
                    </H.labelContent>

                    <H.checkContent>
                        <input type="checkbox" name="check" id="check" checked={isChecked} onChange={handleToggleCheck} />
                        <label htmlFor="check">Desejo permanecer anônimo</label>
                    </H.checkContent>
                </H.inputContainer>

                <H.buttonContent>
                    <H.buttonAvancar type='submit'>Avançar</H.buttonAvancar>
                </H.buttonContent>
            </H.FormContainer>
        </H.Content>
    )
}