import React from 'react'
import * as H from './Styles'
import iconHeader from '../../assets/iconHeader.png'
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate()

  return (
    <H.Header>
        <H.HeaderTitle>
            <span><img src={iconHeader} alt="icone" /></span>
            <h2 onClick={(e) => navigate('/')}>Clínica de Psicologia Ana Silva</h2>
        </H.HeaderTitle>

        <H.HeaderIcon>
            <span onClick={(e) => navigate("/login")}><FaRegUser/></span>
        </H.HeaderIcon>
    </H.Header>
  )
}
