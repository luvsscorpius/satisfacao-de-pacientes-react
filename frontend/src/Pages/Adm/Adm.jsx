import React, { useContext, useEffect, useRef } from 'react'
import { Admin, Layout, Resource } from 'react-admin'
import { dataProvider } from './DataProvider'
import { UserList } from '../../Components/UserList/UserList'
import { AppBar } from 'react-admin';
import { styled } from '@mui/material/styles';
import { Dashboard } from '../../Components/Dashboard/Dashboard'
import { Context } from '../../Context/Context'

// Estilizando o AppBar usando Material-UI
const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#457B9D',
  color: '#FFFFFF',
  boxShadow: 'none',
  padding: '0 20px',
  height: '50px',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
}));

// Criando um layout customizado com o AppBar
const CustomLayout = (props) => (
  <Layout {...props} appBar={CustomAppBar} />
);

export const Adm = () => {

  // usando isMounted para ver se o componente foi remontado
  const isMounted = useRef(false)

  const { loginData, getAllFeedBacks } = useContext(Context)

  // UseEffect to keep user logged in
  useEffect(() => {
    if (isMounted.current) {
      if (loginData.name !== "" && loginData.password !== "") {
        getAllFeedBacks()
      }
    } else {
      isMounted.current = true
    }
  }, [])

  return (
    <Admin dashboard={Dashboard} layout={CustomLayout} dataProvider={dataProvider} basename="/adm" >
      <Resource name='users' list={UserList} />
    </Admin>
  )
}
