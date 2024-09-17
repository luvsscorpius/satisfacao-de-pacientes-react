import React from 'react'
import * as H from './Styles'
import { FaUser, FaRegStar } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/avalie')
    }

    return (
        <H.Content>
            <H.Info>
                <h1>Deixe sua avaliação</h1>
                <p>Ficamos felizes com a sua sessão, utilize o formulário abaixo para avaliar o produto</p>
            </H.Info>

            <H.FormContainer>

                <H.Steps>
                    <H.Step className='active'>
                        <FaUser className='icon' />
                        <p>Identificação</p>
                    </H.Step>
                    <H.Step>
                        <FaRegStar className='icon star' />
                        <p>Avaliação</p>
                    </H.Step>
                    <H.Step>
                        <BsSend className='icon' />
                        <p>Envio</p>
                    </H.Step>
                </H.Steps>

                <H.inputContainer>
                    <H.labelContent>
                        <label htmlFor="">Nome:</label>
                        <input type="text" name="name" id="name" />
                    </H.labelContent>

                    <H.labelContent>
                        <label htmlFor="">Email:</label>
                        <input type="email" name="email" id="email" />
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
