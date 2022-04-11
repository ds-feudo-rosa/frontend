import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";


export default function Noticia3() {
  return (
    <>
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          Titúlo Notícia 3
        </Typography>
        <Typography>
          Resumo da notícia 3
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='/noticia3'>View</Button>
        <Button size="small">Verdadeiro</Button>
        <Button size="small">Falso</Button>
      </CardActions>
    </Card>
    </>
  )
}