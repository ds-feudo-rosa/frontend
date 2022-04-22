import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useState } from "react";




export default function CardNoticias({titulo, resumo, id, likes, dislikes}) {
  const [like, setLike] = useState(likes ?? 0); // [variable, () => {}]
  const [dislike, setDislike] = useState(dislikes ?? 0);
  
  
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
        
        <>
      <div>
        <Button onClick={() => setLike(like + 1)}>
          {like} Verdadeiro ✅
        </Button>
      </div>
      <div>
        <Button onClick={() => setDislike(dislike + 1)}>
          {dislike} Falso ❌
        </Button>
      </div>
    </> 

      </CardActions>
    </Card>
    </>
  )
}