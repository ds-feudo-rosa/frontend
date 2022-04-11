import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";


export default function Noticia5() {
  return (
    <>
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          Titúlo Notícia 5
        </Typography>
        <Typography>
          Resumo da notícia 5
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='/noticia5'>View</Button>
        <Button size="small">Verdadeiro</Button>
        <Button size="small">Falso</Button>
      </CardActions>
    </Card>
    </>
  )
}