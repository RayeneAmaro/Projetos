import React from 'react'
import {Link} from 'react-router-dom'

function Erro() {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <Link to='/'>Voltar</Link>
    </div>
  )
}

export default Erro
