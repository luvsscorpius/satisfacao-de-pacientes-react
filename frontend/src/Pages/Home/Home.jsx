import React from 'react'
import * as H from './Styles'
import { FaUser , FaRegStar } from "react-icons/fa";
import { BsSend } from "react-icons/bs";

export const Home = () => {
  return (
    <H.Content>
        <H.Info>
            <h1>Deixe sua avaliação</h1>
            <p>Ficamos felizes com a sua sessão, utilize o formulário abaixo para avaliar o produto</p>
        </H.Info>

        <H.FormContainer>
            <H.Steps>
                <H.Step className='active'>
                    <FaUser  className='icon'/>
                    <p>Identificação</p>
                </H.Step>
                <H.Step>
                    <FaRegStar className='icon star'/>
                    <p>Avaliação</p>
                </H.Step>
                <H.Step>
                    <BsSend className='icon'/>
                    <p>Envio</p>
                </H.Step>
            </H.Steps>
        </H.FormContainer>
    </H.Content>
  )
}
