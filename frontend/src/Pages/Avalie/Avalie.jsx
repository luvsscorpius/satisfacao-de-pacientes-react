import React, { useContext } from 'react'
import * as Home from '../Home/Styles'
import { Info } from '../../Components/Info/Info'
import { Steps } from '../../Components/Steps/Steps'
import * as A from './Styles'
import { useNavigate } from 'react-router-dom'
import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill, BsEmojiFrownFill } from 'react-icons/bs'
import { Context } from '../../Context/Context'

const Avalie = () => {

  const { currentStep } = useContext(Context)

  const navigate = useNavigate()

  return (
    <Home.Content>
      <Info titulo="Deixe sua avaliação" p="Ficamos felizes com a sua sessão, utilize o formulário abaixo para avaliar a sessão" />

      <Home.FormContainer>
        <Steps currentStep={currentStep} />

        <Home.inputContainer>
          <A.rateContent>
            <span>
              <input type="radio" name="unsatisfied" id="unsatisfied" />
              <BsEmojiFrownFill />
              <p>Ruim</p>
            </span>
            <span>
              <input type="radio" name="unsatisfied" id="unsatisfied" />
              <BsFillEmojiNeutralFill />
              <p>Regular</p>
            </span>
            <span>
              <input type="radio" name="unsatisfied" id="unsatisfied" />
              <BsFillEmojiSmileFill />
              <p>Bom</p>
            </span>
            <span>
              <input type="radio" name="unsatisfied" id="unsatisfied" />
              <BsFillEmojiHeartEyesFill />
              <p>Excelente</p>
            </span>
          </A.rateContent>

          <A.textAreaContent>
            <label htmlFor="">Comentario:</label>
            <textarea name="textarea" placeholder='Nos conte como foi a sua experiência...'></textarea>
          </A.textAreaContent>
        </Home.inputContainer>

        <Home.buttonContent>
          <Home.buttonAvancar onClick={() => navigate('/')}>Voltar</Home.buttonAvancar>
          <Home.buttonAvancar>Avançar</Home.buttonAvancar>
        </Home.buttonContent>
      </Home.FormContainer>
    </Home.Content>
  )
}

export default Avalie