import React, { useState } from 'react'
import Produtos from './Produtos';
import Titulo from './Titulo';
import './style.css'

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

function App() {

  const [nome, setNome] = useState('')

  return (
    <div className='container'>
     <div className='qTit'><span className='titulo'>Produtos:</span></div>

      <div className='botoes'>
        <button onClick={((e) => setNome(e.target.innerText.toLowerCase()))} className='botao'><Titulo titulo='Tablet'/></button> 
        <button onClick={((e) => setNome(e.target.innerText.toLowerCase()))} className='botao'><Titulo titulo='Smartphone'/></button>
        <button onClick={((e) => setNome(e.target.innerText.toLowerCase()))} className='botao'><Titulo titulo='Notebook'/></button>
      </div>

      <section className='produtos'>
        <Produtos nome={nome}/>
      </section>
    </div>
  );
}
export default App;
