import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";


export default function Noticia2() {
  return (
    <>
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          Titúlo Notícia 2
        </Typography>
        <Typography>
          Resumo da notícia 2
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='/noticia2'>View</Button>
        <Button size="small">Verdadeiro</Button>
        <Button size="small">Falso</Button>
      </CardActions>
    </Card>
    </>
  )
}