import React from 'react'
import { Home } from './Pages/Home/Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './Components/Header/Header';
import { GlobalStyle } from './Css/GlobalStyle';
import { Footer } from './Components/Footer/Footer';
import Avalie from './Pages/Avalie/Avalie';
import { ContextProvider } from './Context/Context';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header />
      <Router>
        <ContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/avalie' element={<Avalie/>}>
            
          </Route>
        </Routes>
        </ContextProvider>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
