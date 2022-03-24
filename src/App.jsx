//libs
import React from 'react';
import { BrowserRouter, Route ,Routes } from "react-router-dom";


//pages
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Acompanhamentos from './pages/Acompanhamentos';
import ComoVerificamos from './pages/ComoVerificamos';
import Debates from './pages/Debates';
import Feed from './pages/Feed';
import Inicial from './pages/Inicial';
import Login from './pages/Login';
import Cadastro from './pages/subPages/Cadastro';


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
          <Route path="/cadastro" element={<Cadastro/>}/>
        </Routes>
      <Footer />    
    </BrowserRouter>
</>
      
  );
};
