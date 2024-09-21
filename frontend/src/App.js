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

function App() {

  const formComponents = [
    <Home />,
    <Avaliacao />,
    <Avalie />,
    <Envio />
  ]

  return (
    <>
      <GlobalStyle/>
      <Header />
      <Router>
        <ContextProvider formComponents={formComponents}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/avaliacao' element={<Avaliacao/>}/>
          <Route path='/avaliacao/avalie' element={<Avalie/>}/> 
          <Route path='/avaliacao/envio' element={<Envio/>}/>
        </Routes>
        </ContextProvider>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
