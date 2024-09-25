import React, { useContext } from 'react'
import * as Home from '../Home/Styles'
import { Info } from '../../Components/Info/Info'
import { Steps } from '../../Components/Steps/Steps'
import { Context } from '../../Context/Context'
import * as Avalie from '../Avalie/Styles'
import * as E from './Styles'
import { useNavigate } from 'react-router-dom'
import { BsFillEmojiFrownFill, BsFillEmojiHeartEyesFill, BsFillEmojiNeutralFill, BsFillEmojiSmileFill } from 'react-icons/bs'

export const Envio = () => {
    const { currentStep, changeStep, data, sendInfo } = useContext(Context)

    const navigate = useNavigate()

    const previousPage = (e) => {
        e.preventDefault()
        changeStep(currentStep - 1, e)
        navigate('/avaliacao/avalie')
    }

    // Objeto com os emojis para fazer a comparação e recuperar do usuário
    const emojiData = {
        unsatisfied: <BsFillEmojiFrownFill/>,
        neutral: <BsFillEmojiNeutralFill/>,
        satisfied: <BsFillEmojiSmileFill/>,
        verySatisfied: <BsFillEmojiHeartEyesFill/>
      }

  return (
    <Home.Content>
        <Info titulo="Falta pouco..." p="A sua opinião é muito importante" />

        <Home.FormContainer>
            <Steps currentStep={currentStep}/>

            <Home.inputContainer style={{gap: "5px"}}>

                <E.resumoContent style={{display: "flex"}}>
                    <h3>Aqui está o resumo da sua avaliação</h3>
                    <p>Satisfação da sessão:  {emojiData[data.review]}</p>
                    <p>Comentário:  {data.comment}</p>
                    <p>Quanto voltaria na próxima sessão:  {data.comeback}</p>
                </E.resumoContent>
            </Home.inputContainer>

            <Home.buttonContent>
                <Home.buttonAvancar onClick={(e) => previousPage(e)}>Voltar</Home.buttonAvancar>
                <Home.buttonAvancar onClick={(e) => sendInfo(e)}>Enviar</Home.buttonAvancar>
            </Home.buttonContent>
        </Home.FormContainer>
    </Home.Content>
  )
}
