import React from 'react'
import { Home } from './Pages/Home/Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './Components/Header/Header';
import { GlobalStyle } from './Css/GlobalStyle';
import { Footer } from './Components/Footer/Footer';
import Avaliacao from './Pages/Avaliacao/Avaliacao';
import { ContextProvider } from './Context/Context';
import { Avalie } from './Pages/Avalie/Avalie';
import { Envio } from './Pages/Envio/Envio';
import { ProtectedRoute } from './Routes/ProtectedRoute';
import { Login } from './Pages/Login/Login';
import { ForgotPassword } from './Pages/ForgotPassword/ForgotPassword';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { Adm } from './Pages/Adm/Adm';
import { ProtectedRouteLogin } from './Routes/ProtectedRouteLogin';

function App() {

  const formComponents = [
    <Home />,
    <Avaliacao />,
    <Avalie />,
    <Envio />
  ]

  return (
    <>
      <Router>
        <ContextProvider formComponents={formComponents}>
          <GlobalStyle />
          <Header />
          <ToastContainer autoClose={3000} className="toast-container" />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/avaliacao' element={<ProtectedRoute stepRequired={0}><Avaliacao /></ProtectedRoute>} />
            <Route path='/avaliacao/avalie' element={<ProtectedRoute stepRequired={1}><Avalie /></ProtectedRoute>} />
            <Route path='/avaliacao/envio' element={<ProtectedRoute stepRequired={2}><Envio /></ProtectedRoute>} />
            <Route path='/login' element={<Login />} />
            <Route path='/login/forgotpassword' element={<ForgotPassword />} />
            <Route path='/adm/*' element={<ProtectedRouteLogin><Adm /> </ProtectedRouteLogin>} />
          </Routes>
        </ContextProvider>
      </Router>
      <Footer />
    </>
  );
}

export default App;
