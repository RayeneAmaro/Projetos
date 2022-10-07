import React,{useEffect, useState} from 'react'
import Api from './Api';


const Produtos = ({nome}) => {

    const [produtos, setProdutos] = useState({})
    let url = '/' + nome

    
    useEffect(() => {

        if (nome !== '') {
            Api(url)
            .then(({data}) => {
                setProdutos(data)
            })
        }
    },[nome, url])


    return Object.keys(produtos).length > 0 && (
            
        <div className='containerProdutos'>
            <h2 className='tituloProdutos'>{produtos.nome}</h2>
            <div className='informacoes'>
                <img src={produtos.fotos[0].src} alt={produtos.nome} className='img'/>
                <h3 className='preco'><span className='preco1'>R$ </span>{produtos.preco}</h3>
                <span className='descricao1'>Descrição:<div class="tres"></div></span>
                <p className='descricao'>{produtos.descricao}</p>
            </div>
            <div className='containerProd'>
            <span className='teste'></span><p className='situacao'>{produtos.vendido === "false" ? 'Produto em estoque' : 'Produto esgotado'}</p>
            <button className='btn' href='#'>Comprar</button>
            </div>
            
        </div>
    )
}


export default Produtos