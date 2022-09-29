import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

function Filme() {

    const [filme, setFilme] = useState({})
    const {id} = useParams()

    useEffect( () => {
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`
        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            setFilme(json)
        })
    }, [])

  return (
    <div>
      <article className='container'>
        <h1 className='tituloFilme'>{filme.nome}</h1>
        <img src={filme.foto} className='img imgFilme'/>

        <div className='conteudo'>
          {Object.keys(filme).length !== 0 &&
            <h3 className='subtitulo'>Sinopse:</h3>
          }

          <p className='p'>{filme.sinopse}</p>
        </div>

        {Object.keys(filme).length !== 0 &&
          <Link to='/' className='link'>Home</Link>
          
          }
          
      </article>
    </div>
  )
}

export default Filme
