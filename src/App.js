import React from 'react';
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import { Footer } from './components/layout/Footer';


//pages
import Navbar from './components/layout/Navbar';
import AcompanharSolicitacao from './components/pages/AcompanharSolicitacao';
import ComoVerificamos from './components/pages/ComoVerificamos';
import Debates from './components/pages/Debates';
import Feed from './components/pages/Feed';
import { Inicial } from './components/pages/Inicial';
import Login from './components/pages/Login';

function App() {
    return (
      <>
      <BrowserRouter>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Inicial />}/>
          <Route path="/acompanhamentos" element={<AcompanharSolicitacao />}/>

          <Route path="/feed" element={<Feed />}/>
          <Route path="/comoVerificamos" element={<ComoVerificamos />}/>
          <Route path="/debates" element={<Debates />}/>          
          <Route path="/login" element={<Login />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      
      </>
      
  );
}

export default App;
