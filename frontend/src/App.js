import React from 'react'
import { Home } from './Pages/Home/Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './Components/Header/Header';
import { GlobalStyle } from './Css/GlobalStyle';
import { Footer } from './Components/Footer/Footer';
import Avalie from './Pages/Avalie/Avalie';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/avalie' element={<Avalie/>}>
            
          </Route>
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
