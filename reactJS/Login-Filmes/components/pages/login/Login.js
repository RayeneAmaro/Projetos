import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../provider/Auth'
import * as Ai from 'react-icons/ai'
import '../../../style.css'

function Login() {

  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const {setAutenticador} = useAuth()
  const Navigate = useNavigate()

  function acessar(){
    if (login === 'teste@teste.com' && senha === '123'){
      setAutenticador(true)
      Navigate('/painel')
    } else {
      alert ('Dados incorretos')
    }
  }

  React.useEffect(() =>{
    document.body.classList.add('overflowH');

    return () => document.body.classList.remove('overflowH');
  },[])

  
  return (
    <div className='container'>

      <div className='card'>
      
        <div className='container-label'>Login <span></span></div>
      
        <div className='container-icon'>
          {/* colocar icone */}
          <div className='circle'><Ai.AiOutlineRight size={24} className='icone'/></div>
        </div>

        <div className='container-form'>
          <form>
            <label htmlFor='email'>E-mail</label>
              <input type='email' id='email' placeholder='Digite seu e-mail' onChange={(p) => setLogin(p.target.value)} autoFocus/>
            <label htmlFor='password'>Senha</label>
              <input type='password' id='password' placeholder='Senha' onChange={(p) => setSenha(p.target.value)}/>
            
            <button type='submit' onClick={acessar}>Acessar</button> 
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login