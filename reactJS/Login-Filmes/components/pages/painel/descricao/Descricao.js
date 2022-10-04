import React,{ useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Api from '../../../../services/Api';
import './styleDesc.css'

function Descricao() {

    const [descricao, setDescricao] = useState({})
    const {id} = useParams()

    
    useEffect(() => {
        let urlFilmes = `/${id}?language=pt-BR&api_key=8fe2ca4f078c4f8f43df881fcaae37f1`
        Api(urlFilmes)
        .then(({data}) => {
            setDescricao(data)
        })

        // let urlElenco = `https://api.themoviedb.org/3/movie/${id}/credits?language=pt-BR&api_key=8fe2ca4f078c4f8f43df881fcaae37f1`
        // Api(urlElenco)
        // .then(({data}) => {
        //     setDescricao(old => ({...old,...data }))
        // })
    },[])

    useEffect(() => {
        let urlElenco = `/${id}/credits?language=pt-BR&api_key=8fe2ca4f078c4f8f43df881fcaae37f1`
        Api(urlElenco)
        .then(({data}) => {
            setDescricao(old => ({...old,...data }))
        })
        
    },[])

    useEffect(() => {
        console.log(descricao.cast);
        
    },[descricao])


    return (

        <div className='containerDesc'>
            <h1 className='movieTitle'>{descricao.title}</h1>
            <h2 className='movieSubtitle'>{descricao.tagline}</h2>
            <img src={'https://image.tmdb.org/t/p/w500' + descricao.backdrop_path} className='poster'/>
            <h4 className='overview'>Resumo:</h4>
            <p className='description'>{descricao.overview}</p>
            <h4 className='originalTitle'>Título original: <span className='originalTitleDes'>{descricao.original_title}</span></h4>
            <h4 className='language'>Linguagem original: <span className='languageMovie'>{descricao.original_language}</span></h4>

            <details className='details'>
                <summary className='summaryDetails'>
                    Elenco
                </summary>
                <p className='people'>
                    
                    {
                        descricao?.cast && descricao?.cast.filter((i) => i.profile_path !== null).map((i, id) => {
                            return(
                                <div key={id}>
                                    
                                    <p><img src={'https://image.tmdb.org/t/p/w500' + i.profile_path} className='photo'/> {i.name} - {i.known_for_department} - <span><strong>Personagem:</strong> {i.character}</span></p>
                                    <br />
                                </div>
                            )
                        })
                    }
                    {
                        descricao?.cast && descricao?.cast.filter((i) => i.profile_path === null || i.profile_path === '')
                        .map((i,id) => {
                            return(
                                <div key={id}>
                                    <p><span>{i.name} - {i.known_for_department}</span> - <span><strong>Personagem:</strong> {i.character}</span></p>
                                </div>
                            )
                        })

                    }
                </p>
            </details>
            <div className='botoes'>
                <a href='#' className='botaoAssistir'>Assistir</a>
                <Link to='/painel' className='botaoVoltar'>Voltar ao painel</Link>
            </div>
        </div>
    )


}

export default Descricao
