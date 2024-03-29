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
import Noticias from './pages/Noticias';



const sections = [
  { title: 'Inicial', url: '/' },
  { title: 'Como Vericamos', url: '/verificamos' },
  { title: 'Adicione sua notícia', url: '/solicitacoes' },
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
              <Route path='/' element={<Inicial />}/>
              <Route path='/feed' element={<Feed />}/>
              <Route path='/verificamos' element={<Verificamos />}/>
              <Route path='/solicitacoes' element={<Solicitacoes />}/>
              <Route path='/cadastrar' element={<Cadastro />}/>
              <Route path='/login' element={<SignIn />}/>
              <Route path='/perfil' element={<Perfil />}/>

              
              <Route path='/noticias/:id' element={<Noticias />}/>

            </Routes>
        <Footer title='Footer' description='Footer'/>
          </BrowserRouter>
      </div>
    </ThemeProvider>

  );
};


