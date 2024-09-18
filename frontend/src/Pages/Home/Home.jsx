import React, { useContext, useState } from 'react'
import * as H from './Styles'
import { useNavigate } from 'react-router-dom';
import { Info } from '../../Components/Info/Info';
import { Steps } from '../../Components/Steps/Steps';
import { Context } from '../../Context/Context';

export const Home = () => {
    const { userInfo, setUserInfo, isChecked, setIsChecked, isRequired, setIsRequired } = useContext(Context)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
    }

    // Usando essa função para ver se o checkbox esta checado, se sim deixamos a pessoa passar para a próxima etapa do formulário
    const checkIsChecked = () => {
        if (isChecked === true) {
            setIsRequired(prevState => !prevState)
            navigate("/avalie")
        }

        if (name && email) {
            // Enviando as informações
            setUserInfo({ name, email, isChecked })
            navigate('/avalie')
        }
    }

    const handleToggleCheck = () => {
        setIsChecked(prevState => !prevState)
    }

    return (
        <H.Content>
            <Info titulo="Deixe sua avaliação" p="Ficamos felizes com a sua sessão, utilize o formulário abaixo para avaliar o produto" />

            <H.FormContainer onSubmit={handleClick}>

                <Steps />

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
                    <H.buttonAvancar type='submit' onClick={checkIsChecked}>Avançar</H.buttonAvancar>
                </H.buttonContent>
            </H.FormContainer>
        </H.Content>
    )
}
