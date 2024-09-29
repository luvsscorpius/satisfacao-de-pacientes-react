import React from 'react'
import * as Home from '../Home/Styles'
import {Admin, Layout, Resource} from 'react-admin'
import {dataProvider} from './DataProvider'
import { UserList } from '../../Components/UserList/UserList'
import { AppBar } from 'react-admin';
import { styled } from '@mui/material/styles';


// Estilizando o AppBar usando Material-UI
const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#457B9D',
  color: '#FFFFFF',         
  boxShadow: 'none',        
  padding: '0 20px',         
  height: '50px',    
  position: 'absolute',
  display: 'flex;',
  justifyContent: 'center'
}));

// Criando um layout customizado com o AppBar
const CustomLayout = (props) => (
  <Layout {...props} appBar={CustomAppBar} />
);

export const Adm = () => {
  return (
    <Admin layout={CustomLayout} dataProvider={dataProvider} basename="/adm" >
      <Resource name='users' list={UserList} />
    </Admin>
  )
}
