import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";


const api = axios.create({
  baseURL: "http://143.198.138.36:5000",
});

export default function Noticias() {
  const { id } = useParams()
  const [news, setNews] = useState([]);

  useEffect(() => {
    api.get("/notice", { "id": id }).then((response) => {
      const responseObject = JSON.parse(response.data)
      const restResponse = []
      for (let i = 0; i < responseObject.length; i += 3) {
        restResponse.push({ "id": responseObject[i], "title": responseObject[i + 1], "text": responseObject[i + 2] })
      }
      setNews(restResponse[id - 1])
    })
  }, [ id ])

  return (
    <>
      <h1>{news.title}</h1>
      <h3>{news.text}</h3>
      {/* <img alt='oi' src={backendData.img} /> */}
    </>
  )
}