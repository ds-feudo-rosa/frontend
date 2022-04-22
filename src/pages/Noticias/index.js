import {  useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";


export default function Noticias() {
  const { id } = useParams()
  const [news, setNews] = useState([]);
  //imagens aleatorias para testes
  const imgs = ['https://i.em.com.br/uKw-qDVV2FItakxzJbIOENAr8TI=/820x492/smart/imgsapp.em.com.br/app/noticia_127983242361/2019/10/04/1090179/20191004091130833766i.jpg', 
  'https://img.r7.com/images/macacos-assassinos-ratos-devoradores-malasia-22102019160746405?dimensions=794x460', 
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScNLydYTwVcK46pEPmsH3yEqWS7ic6B3n0bA&usqp=CAU']
  
  //noticia teste
  const backendData = {
    titulo: `Elon Musk desiste de integrar o conselho de administração do Twitter, diz presidente-executivo da rede social ${id}`,
    resumo: `Elon Musk, o bilionário fundador da Tesla e da SpaceX, desistiu de integrar o conselho de administração do Twitter, do qual é o acionista, anunciou neste domingo (10) o presidente-executivo da rede social, Parag Agrawal.

    "A nomeação de Elon para o conselho deveria se tornar efetiva de maneira oficial em 9 de abril, mas Elon informou naquela manhã que não se uniria ao conselho", 
    afirmou Agrawal em uma mensagem enviada aos funcionários do Twitter.
    "Eu acredito que é melhor", completou.`,
    img: imgs[Math.floor(Math.random() * imgs.length)]
  }

  const api = axios.create({
    baseURL: "http://143.198.138.36:5000",
  });

  useEffect(() => {
    api.get("/notice", {"id": id}).then((response) => {
      console.log(response.data);
      console.log(response.data[id-1])
      setNews(response.data[id-1])
    })
  }, [])

  return (
    <>
      <h1>{news.title}</h1>
      <img width={350} src={news.url}>
      </img>
      <h3>{news.text}</h3>
    </>
  )
}