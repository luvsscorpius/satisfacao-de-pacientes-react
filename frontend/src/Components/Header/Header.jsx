import React from 'react'
import * as H from './Styles'
import iconHeader from '../../assets/iconHeader.png'
import { FaRegUser } from "react-icons/fa";

export const Header = () => {
  return (
    <H.Header>
        <H.HeaderTitle>
            <span><img src={iconHeader} alt="icone" /></span>
            <h2>Clínica de Psicologia Ana Silva</h2>
        </H.HeaderTitle>

        <H.HeaderIcon>
            <span><FaRegUser/></span>
        </H.HeaderIcon>
    </H.Header>
  )
}
