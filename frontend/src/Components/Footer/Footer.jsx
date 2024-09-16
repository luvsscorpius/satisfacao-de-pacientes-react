import React from 'react'
import * as F from './Styles'
import iconHeader from '../../assets/iconHeader.png'
import igIcon from '../../assets/igLogo.png'
import linkIcon from '../../assets/linkLogo.png'

export const Footer = () => {
    return (
        <F.Footer>
            <F.lineUp></F.lineUp>
            <F.containers>
                <F.acessoContainer>
                    <F.logoContainer>
                        <img src={iconHeader} alt="" />

                        <F.iconsContainer>
                            <img src={igIcon} alt="" />
                            <img src={linkIcon} alt="" />
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
                    teste
                </F.contatoContainer>
            </F.containers>
            <F.lineDown></F.lineDown>
        </F.Footer>
    )
}
