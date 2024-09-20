import React from 'react'
import * as S from './Styles'
import { FaUser, FaRegStar } from "react-icons/fa";
import { BsSend } from "react-icons/bs";

export const Steps = (currentStep) => {
    console.log(currentStep)

    return (
        <S.Steps>
            <S.Step className='active'>
                <FaUser className='icon' />
                <p>Identificação</p>
            </S.Step>
            <S.Step>
                <FaRegStar className='icon star' />
                <p>Avaliação</p>
            </S.Step>
            <S.Step>
                <BsSend className='icon' />
                <p>Envio</p>
            </S.Step>
        </S.Steps>
    )
}