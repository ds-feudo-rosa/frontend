import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";



export default function CardNoticias({titulo, resumo, id}) {
  return (
    <>
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {titulo}
          {/* <h1>{id}</h1> */}
        </Typography>
        <Typography>
          {resumo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={`/noticias/${id}`}>View</Button>
        <Button size="small">Verdadeiro</Button>
        <Button size="small">Falso</Button>
      </CardActions>
    </Card>
    </>
  )
}