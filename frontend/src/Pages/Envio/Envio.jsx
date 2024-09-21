import React, { useContext } from 'react'
import * as Home from '../Home/Styles'
import { Info } from '../../Components/Info/Info'
import { Steps } from '../../Components/Steps/Steps'
import { Context } from '../../Context/Context'
import * as Avalie from '../Avalie/Styles'
import * as E from './Styles'

export const Envio = () => {
    const { currentStep, changeStep } = useContext(Context)

  return (
    <Home.Content>
        <Info titulo="Deixe sua avaliação" p="Ficamos felizes com a sua sessão, utilize o formulário abaixo para avaliar a sessão" />

        <Home.FormContainer>
            <Steps currentStep={currentStep}/>

            <Home.inputContainer>
                <Avalie.divP>
                    <h2>Falta pouco...</h2>
                    <p>A sua opinião é muito importante</p>
                </Avalie.divP>

                <E.resumoContent>
                    <h3>Aqui está o resumo da sua avaliação</h3>
                    <p>Satisfação da sessão:</p>
                    <p>Comentário:</p>
                    <p>Quanto voltaria na próxima sessão:</p>
                </E.resumoContent>
            </Home.inputContainer>

            <Home.buttonContent>
                <Home.buttonAvancar>Voltar</Home.buttonAvancar>
                <Home.buttonAvancar>Enviar</Home.buttonAvancar>
            </Home.buttonContent>
        </Home.FormContainer>
    </Home.Content>
  )
}
