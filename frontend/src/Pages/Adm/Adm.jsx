import React from 'react'
import * as Home from '../Home/Styles'
import {Admin, Resource} from 'react-admin'
import {dataProvider} from './DataProvider'
import { UserList } from '../../Components/UserList/UserList'

export const Adm = () => {
  return (
    <Admin dataProvider={dataProvider} basename="/adm" >
      <Resource name='users' list={UserList} />
    </Admin>
  )
}
