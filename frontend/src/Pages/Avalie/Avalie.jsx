import React, { useContext } from 'react'
import * as Home from '../Home/Styles'
import { Info } from '../../Components/Info/Info'
import { Steps } from '../../Components/Steps/Steps'
import { Context } from '../../Context/Context'
import * as A from './Styles'
import { useNavigate } from 'react-router-dom'

export const Avalie = () => {
    const { currentStep } = useContext(Context)
    const navigate = useNavigate()

    const previusPage = (e) => {
        e.preventDefault()
        navigate('/avaliacao')
    }

    return (
        <Home.Content>
            <Info titulo="Deixe sua avaliação" p="Ficamos felizes com a sua sessão, utilize o formulário abaixo para avaliar a sessão" />

            <Home.FormContainer>
                <Steps currentStep={currentStep} />

                <Home.inputContainer>
                    <A.divP>
                        <p>Avalie de 0 a 5 o quanto você voltaria para um nova sessão?</p>
                    </A.divP>

                    <A.blocksContent>
                        <span>
                            <input type="radio" name="rating" id="1" value="1" required />
                            <p>
                                1
                            </p>
                        </span>
                        <span>
                            <input type="radio" name="rating" id="2" value="2" required />
                            <p>
                                2
                            </p>
                        </span>
                        <span>
                            <input type="radio" name="rating" id="3" value="3" required />
                            <p>
                                3
                            </p>
                        </span>
                        <span>
                            <input type="radio" name="rating" id="4" value="4" required/>
                            <p>
                                4
                            </p>
                        </span>
                        <span>
                            <input type="radio" name="rating" id="5" value="5" required />
                            <p>
                                5
                            </p>
                        </span>
                    </A.blocksContent>

                    <A.divP2>
                        <p>Muito Insatisfeito</p>
                        <p>Muito Satisfeito</p>
                    </A.divP2>
                </Home.inputContainer>

                <Home.buttonContent>
                    <Home.buttonAvancar onClick={(e) => previusPage(e)}>Voltar</Home.buttonAvancar>
                    <Home.buttonAvancar>Avançar</Home.buttonAvancar>
                </Home.buttonContent>
            </Home.FormContainer>
        </Home.Content>
    )
}
