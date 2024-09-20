import React from 'react'
import * as S from './Styles'
import { FaUser, FaRegStar } from "react-icons/fa";
import { BsSend } from "react-icons/bs";

export const Steps = ({currentStep}) => {

    return (
        <S.Steps>
            <S.Step className='active'>
                <FaUser className='icon' />
                <p>Identificação</p>
            </S.Step>
            {/* usando concatenacao de strings pois no macbook `` nao funciona */}
            <S.Step className={'step ' + (currentStep >= 1 ? "active" : "")}>
                <FaRegStar className='icon star' />
                <p>Avaliação</p>
            </S.Step>
            <S.Step className={'step ' + (currentStep >= 2 ? "active" : "")}>
                <BsSend className='icon' />
                <p>Envio</p>
            </S.Step>
        </S.Steps>
    )
}