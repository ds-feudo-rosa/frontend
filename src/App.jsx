//libs
import React from 'react';
import { BrowserRouter, Route ,Routes } from "react-router-dom";


//pages
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Acompanhamentos from './components/pages/Acompanhamentos';
import ComoVerificamos from './components/pages/ComoVerificamos';
import Debates from './components/pages/Debates';
import Feed from './components/pages/Feed';
import Inicial from './components/pages/Inicial';
import Login from './components/pages/Login';

//Testes
//import Evento from './components/layout/Evento';
//import Form from './components/layout/layoutLogin/Form';
//import Evento from './components/layout/Evento';

export default function App() {
    return (
  <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Inicial />}/>
          <Route path="/acompanhamentos" element={<Acompanhamentos />}/>
          <Route path="/feed" element={<Feed />}/>
          <Route path="/comoVerificamos" element={<ComoVerificamos />}/>
          <Route path="/debates" element={<Debates />}/>          
          <Route path="/login" element={<Login />}/>
        </Routes>
      <Footer />
    </BrowserRouter>     
  </>
      
  );
};
