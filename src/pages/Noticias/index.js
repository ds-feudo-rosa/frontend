import { useParams } from 'react-router-dom'

export default function Noticias() {
  const { id } = useParams()
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
  return (
    <>
      <h1>{backendData.titulo}</h1>
      <h3>{backendData.resumo}</h3>
      <img src={backendData.img}>

      </img>
    </>
  )
}