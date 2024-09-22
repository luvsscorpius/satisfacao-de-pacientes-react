import React, { useContext } from 'react'
import * as Home from '../Home/Styles'
import { Info } from '../../Components/Info/Info'
import { Steps } from '../../Components/Steps/Steps'
import * as A from './Styles'
import { useNavigate } from 'react-router-dom'
import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill, BsEmojiFrownFill } from 'react-icons/bs'
import { Context } from '../../Context/Context'

const Avaliacao = () => {

  const { currentStep, changeStep, data } = useContext(Context)

  console.log(data)

  const navigate = useNavigate()

  const previousPage = (e) => {
    e.preventDefault()
    changeStep(currentStep - 1, e)
    navigate("/")
  }

  const handleNextPage = (e) => {
    e.preventDefault()
    navigate("/avaliacao/avalie")
  }

  return (
    <Home.Content>
      <Info titulo="Deixe sua avaliação" p="Ficamos felizes com a sua sessão, utilize o formulário abaixo para avaliar a sessão" />

      {/* Changing handleNextPage from onClick to onSubmit */}
      <Home.FormContainer onSubmit={(e) => handleNextPage(e)}>
        <Steps currentStep={currentStep} />

        <Home.inputContainer>
          <A.rateContent>
            <span>
              <input type="radio" name="rating" id="unsatisfied" value="unsatisfied" required/>
              <BsEmojiFrownFill />
              <p>Ruim</p>
            </span>
            <span>
              <input type="radio" name="rating" id="neutral" value="neutral" required/>
              <BsFillEmojiNeutralFill />
              <p>Regular</p>
            </span>
            <span>
              <input type="radio" name="rating" id="satisfied" value="satisfied" required/>
              <BsFillEmojiSmileFill />
              <p>Bom</p>
            </span>
            <span>
              <input type="radio" name="rating" id="verySatisfied" value="verySatisfied" required/>
              <BsFillEmojiHeartEyesFill />
              <p>Excelente</p>
            </span>
          </A.rateContent>

          <A.textAreaContent>
            <label htmlFor="">Comentario:</label>
            <textarea name="textarea" placeholder='Nos conte como foi a sua experiência...' rows="3" cols="3"></textarea>
          </A.textAreaContent>
        </Home.inputContainer>

        <Home.buttonContent>
          <Home.buttonAvancar onClick={(e) => previousPage(e)}>Voltar</Home.buttonAvancar>
          <Home.buttonAvancar type='submit'>Avançar</Home.buttonAvancar>
        </Home.buttonContent>
      </Home.FormContainer>
    </Home.Content>
  )
}

export default Avaliacao