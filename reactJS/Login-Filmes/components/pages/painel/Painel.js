import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Api from '../../../services/Api';
import './stylePainel.css';

function Painel() {

  const [filmes, setFilmes] = useState([])
  const Navigate = useNavigate()
  
  useEffect(() => {
    play()
  })

  function play(){
    let url = '/popular?language=pt-BR&api_key=8fe2ca4f078c4f8f43df881fcaae37f1'
    Api(url)
  .then(({data}) => {
    setFilmes(data.results);
  })
  .catch((err) => {
    alert(err)
  })
}

function sair(){
  Navigate('/')
}

  return (
    <div className='filmes'>
      <p className='deslog' onClick={sair}>Sair</p>
      <h1 className='titulo'>Seja bem-vindo !!</h1>
      <h2 className='subtitulo'>Estes são os novos filmes disponíveis para você assistir:</h2>
      {filmes.map((f,id) => {
        return (
          <div className='secao' key={f.id}>
            <h2 className='title'>{f.title}</h2>
            <img src={'https://image.tmdb.org/t/p/w500' + f.poster_path} className='img'/>
            <Link to={`/filme/${f.id}`} className='link'>
              <button className='botaoFilmes'>+ informações</button>
            </Link>
          </div>
        )
      })}


    </div>
  )
}

export default Painel

