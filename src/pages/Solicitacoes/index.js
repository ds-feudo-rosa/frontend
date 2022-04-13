import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField } from '@mui/material';



const theme = createTheme();

export default function Checkout() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <h3>Adicione sua notícia</h3>
            <p>Título</p>
            <TextField id="outlined-basic" label="Título" variant="outlined" />
            <p>Texto da notícia</p>
            <TextField id="outlined-basic" label="Texto da notícia" variant="outlined" />
            <p>Adicione uma imagem (Opcional)</p>
            <TextField id="outlined-basic" label="Link imagem" variant="outlined" />



        </Paper>
      </Container>
    </ThemeProvider>
  );
}