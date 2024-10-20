import React from 'react'
import * as F from './Styles'
import iconHeader from '../../assets/iconHeader.png'
import igIcon from '../../assets/igLogo.png'
import linkIcon from '../../assets/linkLogo.png'
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export const Footer = () => {
    return (
        <F.Footer>
            <F.lineUp></F.lineUp>
            <F.containers>
                <F.acessoContainer>
                    <F.logoContainer>
                        <img src={iconHeader} alt="Icone psicologia" />

                        <F.iconsContainer>
                            <img src={igIcon} alt="Icone instagram" />
                            <img src={linkIcon} alt="Icone linkedin" />
                        </F.iconsContainer>
                    </F.logoContainer>

                    <F.linksContainer>
                        <ul>
                        <h2>Acesso Rápido</h2>
                            <li>Inicio</li>
                            <li>Sobre mim</li>
                            <li>Serviços</li>
                            <li>Locais de atendimento</li>
                        </ul>
                    </F.linksContainer>
                </F.acessoContainer>

                <F.contatoContainer>
                    <ul>
                        <h2>Contato</h2>
                        <span>
                            <FaPhone/>
                            <li>(11) 91234-5678</li>
                        </span>
                        <span>
                            <IoMdMail/>
                            <li>ana.silva@exemplo.com</li>
                        </span>
                        <span>
                            <FaLocationDot className='location'/>
                            <li>Rua Gomes de Carvalho, 1356 5º Andar Vila Olímpia São Paulo/SP</li>
                        </span>
                    </ul>
                </F.contatoContainer>
            </F.containers>
            <F.lineDown></F.lineDown>
            
            <F.infoContainer>
                <p>© 2024 Psicóloga Dra. Ana Maria da Silva</p>
                <p>Construído por Anderson Vitor</p>
            </F.infoContainer>
        </F.Footer>
    )
}
