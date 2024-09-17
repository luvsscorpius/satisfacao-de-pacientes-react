import React from 'react'
import * as I from './Styles'

const Info = ({titulo, p}) => {

  return (
    <I.Info>
        <h1>{titulo}</h1>
        <p>{p}</p>
    </I.Info>
  )
}

export default Info