import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//noticias
import Noticia1 from '../Noticias/Noticia 1';
import Noticia2 from '../Noticias/Noticia 2';
import Noticia3 from '../Noticias/Noticia 3';
import Noticia4 from '../Noticias/Noticia 4';
import Noticia5 from '../Noticias/Noticia 5';
import Noticia6 from '../Noticias/Noticia 6';
import Noticia7 from '../Noticias/Noticia 7';
import Noticia8 from '../Noticias/Noticia 8';
import Noticia9 from '../Noticias/Noticia 9';

const theme = createTheme();

export default function Inicial() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={4}
              justifyContent="center"
            >
            </Stack>
          </Container>
        </Box>
        <Container maxWidth="md">
          <Grid container spacing={6}>
              <Grid item xs={12} sm={6} md={4}>         
                <Noticia1 />
              </Grid>  
              <Grid item xs={12} sm={6} md={4}>         
                <Noticia2 />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>         
                <Noticia3 />
              </Grid>  
              <Grid item xs={12} sm={6} md={4}>         
                <Noticia4 />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>         
                <Noticia5 />
              </Grid>  
              <Grid item xs={12} sm={6} md={4}>         
                <Noticia6 />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>         
                <Noticia7 />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>         
                <Noticia8 />
              </Grid>  
              <Grid item xs={12} sm={6} md={4}>         
                <Noticia9 />
              </Grid>
              <Grid item >         
              </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}