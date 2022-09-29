import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function Home() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        playFilmes()
    }, [])

    function playFilmes(){
        let url = 'https://sujeitoprogramador.com/r-api/?api=filmes/'

        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            setFilmes(json)
        })
    }

  return (
    <div>
        {filmes.map((f) => {
            return(
                <article key={f.id} className='container'>
                    <Link to={`/filme/${f.id}`} className='titLink'><h1 className='titulo'>{f.nome}</h1></Link>
                    <img src={f.foto} className='img'/>
                    <hr/>
                </article>
            )
        })}
    </div>
  )
}

export default Home
