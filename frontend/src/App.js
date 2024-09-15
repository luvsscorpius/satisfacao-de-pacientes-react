import React from 'react'
import { Home } from './Pages/Home/Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './Components/Header/Header';
import { GlobalStyle } from './Css/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
