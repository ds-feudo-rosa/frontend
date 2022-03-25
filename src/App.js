import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';

//components
import Header from './components/Header';
import Footer from './components/Footer';

//pages
import Inicial from './pages/Inicial'

const sections = [
  { title: 'Inicial', url: '/inicial' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
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
            </Routes>
          </BrowserRouter>
        <Footer title='Footer' description='Footer'/>
      </div>
    </ThemeProvider>

  );
}


