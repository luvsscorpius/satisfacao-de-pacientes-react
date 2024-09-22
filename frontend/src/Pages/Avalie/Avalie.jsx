import React, { useContext } from 'react'
import * as Home from '../Home/Styles'
import { Info } from '../../Components/Info/Info'
import { Steps } from '../../Components/Steps/Steps'
import { Context } from '../../Context/Context'
import * as A from './Styles'
import { useNavigate } from 'react-router-dom'

export const Avalie = () => {
    const { currentStep, changeStep, data, setData } = useContext(Context)
    const navigate = useNavigate()

    const previousPage = (e) => {
        e.preventDefault()
        navigate('/avaliacao')
    }

    console.log(data)

    // Função para ir para a próxima página
    const nextPage = (e) => {
        e.preventDefault()
        changeStep(currentStep + 1, e)
        navigate('/avaliacao/envio')
    }

    return (
        <Home.Content>
            <Info titulo="Deixe sua avaliação" p="Ficamos felizes com a sua sessão, utilize o formulário abaixo para avaliar a sessão" />

            <Home.FormContainer onSubmit={(e) => nextPage(e)}>
                <Steps currentStep={currentStep} />

                <Home.inputContainer>
                    <A.divP>
                        <p>Avalie de 0 a 5 o quanto você voltaria para um nova sessão?</p>
                    </A.divP>

                    <A.blocksContent>
                        <span>
                            <input type="radio" name="rating" id="1" value="1" required checked={data.comeback === "1"} onChange={(e) => setData((prev) => ({...prev, comeback: e.target.value}))} />
                            <p>
                                1
                            </p>
                        </span>
                        <span>
                            <input type="radio" name="rating" id="2" value="2" required checked={data.comeback === "2"} onChange={(e) => setData((prev) => ({...prev, comeback: e.target.value}))} />
                            <p>
                                2
                            </p>
                        </span>
                        <span>
                            <input type="radio" name="rating" id="3" value="3" required checked={data.comeback === "3"} onChange={(e) => setData((prev) => ({...prev, comeback: e.target.value}))} />
                            <p>
                                3
                            </p>
                        </span>
                        <span>
                            <input type="radio" name="rating" id="4" value="4" required checked={data.comeback === "4"} onChange={(e) => setData((prev) => ({...prev, comeback: e.target.value}))}/>
                            <p>
                                4
                            </p>
                        </span>
                        <span>
                            <input type="radio" name="rating" id="5" value="5" required checked={data.comeback === "5"} onChange={(e) => setData((prev) => ({...prev, comeback: e.target.value}))}/>
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
                    <Home.buttonAvancar onClick={(e) => previousPage(e)}>Voltar</Home.buttonAvancar>
                    <Home.buttonAvancar>Avançar</Home.buttonAvancar>
                </Home.buttonContent>
            </Home.FormContainer>
        </Home.Content>
    )
}
