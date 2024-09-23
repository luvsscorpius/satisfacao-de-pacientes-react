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

function App() {

  const formComponents = [
    <Home />,
    <Avaliacao />,
    <Avalie />,
    <Envio />
  ]

  return (
    <>
      <GlobalStyle />
      <Header />
      <ContextProvider formComponents={formComponents}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/avaliacao' element={<ProtectedRoute stepRequired={0}><Avaliacao /></ProtectedRoute>} />
            <Route path='/avaliacao/avalie' element={<ProtectedRoute stepRequired={1}><Avalie /></ProtectedRoute>} />
            <Route path='/avaliacao/envio' element={<ProtectedRoute stepRequired={2}><Envio /></ProtectedRoute>} />
          </Routes>
        </Router>
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
