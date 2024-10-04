import styled from 'styled-components'

export const geralContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const geralContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;

    @media (max-width: 724px) {
        flex-direction: column;
    }
`

export const geralFirstContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 10px;
`

export const geralFirstContent = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-item: center;
    flex-direction: column;
`

