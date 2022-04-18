import * as React from 'react';
import {  useState, useEffect } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";

//noticias
import Noticia1 from '../CardNoticias';

const theme = createTheme();

export default function Inicial() {
  const [news, setNews] = useState([]);
  const noticias = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const api = axios.create({
    baseURL: "http://143.198.138.36:5000",
  });

  useEffect(() => {
    api.get("/notice").then((response) => {
      console.log(JSON.parse(response.data));
      let data = []
      for(let i = 0; i < JSON.parse(response.data).length; i = i + 3) {
        console.log(JSON.parse(response.data)[i], JSON.parse(response.data)[i+1], JSON.parse(response.data)[i+2])
        data.push({"id": JSON.parse(response.data)[i], "title": JSON.parse(response.data)[i+1], "text": JSON.parse(response.data)[i+2]})
      }
      console.log(data)
      setNews(data)
      console.log("asd", news)
    })
  }, [])


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
            {news.map((noticia) => {
              return (
                <Grid item xs={2} sm={8} md={6}>
                  <Noticia1 id={noticia.id} titulo={noticia.title} resumo={noticia.text} />
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