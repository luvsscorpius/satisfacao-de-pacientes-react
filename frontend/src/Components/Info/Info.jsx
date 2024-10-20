import React from 'react'
import * as I from './Styles'

export const Info = ({titulo, p}) => {

  return (
    <I.Info>
        <h1>{titulo}</h1>
        <p>{p}</p>
    </I.Info>
  )
}
