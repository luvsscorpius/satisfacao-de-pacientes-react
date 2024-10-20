import React, { useContext } from 'react'
import * as H from './Styles'
import { Info } from '../../Components/Info/Info';
import { Steps } from '../../Components/Steps/Steps';
import { Context } from '../../Context/Context';

export const Home = () => {
    const { data, setData, isChecked, setIsChecked, isRequired, setIsRequired, currentStep, changeStep, isReadOnly, setIsReadOnly, navigate } = useContext(Context)

    // Usando essa função para ver se o checkbox esta checado, se sim deixamos a pessoa passar para a próxima etapa do formulário
    const checkIsChecked = (e) => {
        // adicionando e.preventDefault para arrumar o erro de Form submission canceled because the form is not connected
        e.preventDefault()

        if (isChecked === true) {
            changeStep(currentStep + 1, e)
            // Lógica para verificar se o usuário quer se identificar ou nao e setando um tipo diferente no array sem info como nome/email
            setData({ isAnonymous: isChecked, review: "", comment: "", comeback: "" })
            navigate("/avaliacao")
        }

        if (data.name && data.email) {
            // Enviando as informações
            changeStep(currentStep + 1, e)
            navigate('/avaliacao')
        }
    }

    const handleToggleCheck = () => {
        setIsChecked(prevState => !prevState)
        // Usando setIsRequired para fazer o toggle de true/false ou vise versa para corrigir o erro de quando colocar o checkIsChecked no onSubmit ele permitir passar para a proxima pagina sendo anonimo
        setIsRequired(prevState => !prevState)
        // Lógica para deixar o input disponivel/indisponivel para digitar caso o usuário deseje se identificar ou nao
        setIsReadOnly(prevState => !prevState)


        // Caso clique em anonimo mesmo depois de colocar as informações, o check limpara
        if (isChecked === false) {
            data.name = ""
            data.email = ""
        }
    }

    return (
        <H.Content>
            <Info titulo="Deixe sua avaliação" p="Ficamos felizes com a sua sessão, utilize o formulário abaixo para avaliar a sessão." />

            <H.FormContainer onSubmit={(e) => checkIsChecked(e)} >

                <Steps currentStep={currentStep} />

                <H.inputContainer>
                    <H.labelContent>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" name="name" id="name" value={data.name || ""} onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))} required={isRequired} readOnly={isReadOnly} />
                    </H.labelContent>

                    <H.labelContent>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" value={data.email || ""} onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))} required={isRequired} readOnly={isReadOnly} />
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