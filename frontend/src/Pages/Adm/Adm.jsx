import React from 'react'
import * as Home from '../Home/Styles'
import {Admin, Resource} from 'react-admin'
import { dataProvider } from './DataProvider'

export const Adm = () => {
  return (
    <Admin dataProvider={dataProvider}>
      
    </Admin>
  )
}
