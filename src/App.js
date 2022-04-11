import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Header from './components/Header';
import Footer from './components/Footer';

//pages
import Inicial from './pages/Inicial';
import Feed from './pages/Feed';
import Verificamos from './pages/Verificamos';
import Solicitacoes from './pages/Solicitacoes';
import Cadastro from './pages/Cadastrar';
import SignIn from './pages/Login';
import Perfil from './pages/Perfil';

//noticias
import Noticia1 from './pages/Noticias/Noticia 1';
import Noticia2 from './pages/Noticias/Noticia 2';
import Noticia3 from './pages/Noticias/Noticia 3';
import Noticia4 from './pages/Noticias/Noticia 4';
import Noticia5 from './pages/Noticias/Noticia 5';
import Noticia6 from './pages/Noticias/Noticia 6';
import Noticia7 from './pages/Noticias/Noticia 7';
import Noticia8 from './pages/Noticias/Noticia 8';
import Noticia9 from './pages/Noticias/Noticia 9';


const sections = [
  { title: 'Inicial', url: '/inicial' },
  { title: 'Feed', url: '/feed' },
  { title: 'Como Vericamos', url: '/verificamos' },
  { title: 'Acompanhar Solicitação', url: '/solicitacoes' },
  { title: 'Perfil', url: '/perfil' },
];

const theme = createTheme();

export default function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <div className="App">   
        <CssBaseline />
          <BrowserRouter>
        <Header title="SAFE" sections={sections} />
            <Routes>
              <Route path='/inicial' element={<Inicial />}/>
              <Route path='/feed' element={<Feed />}/>
              <Route path='/verificamos' element={<Verificamos />}/>
              <Route path='/solicitacoes' element={<Solicitacoes />}/>
              <Route path='/cadastrar' element={<Cadastro />}/>
              <Route path='/login' element={<SignIn />}/>
              <Route path='/perfil' element={<Perfil />}/>

              
              <Route path='/noticia1' element={<Noticia1 />}/>
              <Route path='/noticia2' element={<Noticia2 />}/>
              <Route path='/noticia3' element={<Noticia3 />}/>
              <Route path='/noticia4' element={<Noticia4 />}/>
              <Route path='/noticia5' element={<Noticia5 />}/>
              <Route path='/noticia6' element={<Noticia6 />}/>
              <Route path='/noticia7' element={<Noticia7 />}/>
              <Route path='/noticia8' element={<Noticia8 />}/>
              <Route path='/noticia9' element={<Noticia9 />}/>
            </Routes>
        <Footer title='Footer' description='Footer'/>
          </BrowserRouter>
      </div>
    </ThemeProvider>

  );
};


