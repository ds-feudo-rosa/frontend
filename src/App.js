import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';

//components
import Header from './components/Header';
import Footer from './components/Footer';

//pages
import Inicial from './pages/Inicial';
import Feed from './pages/Feed';
import Verificamos from './pages/Verificamos';
import Solicitacoes from './pages/Solicitacoes';

const sections = [
  { title: 'Inicial', url: '/inicial' },
  { title: 'Feed', url: '/feed' },
  { title: 'Como Vericamos', url: '/verificamos' },
  { title: 'Acompanhar Solicitação', url: '/solicitacoes' },
];

const theme = createTheme();

export default function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <div className="App">   
        <CssBaseline />
        <Header title="SAFE" sections={sections} />
          <BrowserRouter>
            <Routes>
              <Route path='/inicial' element={<Inicial />}/>
              <Route path='/feed' element={<Feed />}/>
              <Route path='/verificamos' element={<Verificamos />}/>
              <Route path='/solicitacoes' element={<Solicitacoes />}/>
            </Routes>
          </BrowserRouter>
        <Footer title='Footer' description='Footer'/>
      </div>
    </ThemeProvider>

  );
};


