import Banner from 'components/Banner'
import style from './Player.module.css'
import Title from 'components/Title'
import { useParams } from 'react-router-dom'
import Erro from 'Pages/Erro'
import { useEffect, useState } from 'react'

function Player() {
    const [video, setVideo] = useState();
    const params = useParams();
    
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Aristeu-Miranda/cinetag-api/videos?id=${params.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados)
        })
    })

    if(!video) {
        return <Erro />
    }

    return (
        <>
            <Banner imagem="player" />
            <Title>
                <h1>Player</h1>
            </Title>
            <section className={style.container}>
            <iframe 
                width="100%" 
                height="100%" 
                src={video.link}
                title={video.titulo}
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
            </section>
        </>
    )
}

export default Player