import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//noticias
import Noticia1 from '../CardNoticias';

const theme = createTheme();

export default function Inicial() {
  const noticias = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
            {noticias.map((noticia) => {
              return (
                <Grid item xs={2} sm={8} md={6}>
                  <Noticia1 id={noticia} titulo={`Noticia${noticia}`} resumo={`resumo noticia ${noticia}`} />
                </Grid>
              )
            })}
              <Grid item>
              </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}