import styled from 'styled-components'

export const geralContent = styled.div`
    display: flex;
    flexDirection: row;
    gap: 10px;

    @media (max-width: 724px) {
        flex-direction: column;
    }
`