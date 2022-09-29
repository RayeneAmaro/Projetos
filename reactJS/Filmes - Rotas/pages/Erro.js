import React from 'react'
import {Link} from 'react-router-dom'
import './Erro.css'

function Erro() {
  return (
    <div className='divErro'>
      <h1 className='erro'>Página não encontrada</h1>
      <Link to='/' className='linkErro'>Voltar</Link>
    </div>
  )
}

export default Erro
