import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html, body, #root {
        height: 100%; /* Aplica a altura de 100% apenas nesses elementos */
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;