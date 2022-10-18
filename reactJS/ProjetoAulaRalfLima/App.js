import React, {useState} from 'react'
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {

  const [btnCadastrar, setBtnCadastrar] = useState(true)
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [cidade, setCidade] = useState('')
  const [vetor, setVetor] = useState([]) //segurar dados
  const [indice, setIndice] = useState('') //para função selecionar, na tabela

  //Formulário
  const Cadastrar = (ev) => {
    ev.preventDefault()
    let dados = {'nome': nome, 'idade': idade, 'cidade': cidade}

    setVetor([...vetor, dados])
    setNome('')
    setIdade('')
    setCidade('')
  }

  //Tabela
  const Selecionar = (indice) =>{
    setIndice(indice)
    setNome(vetor[indice].nome)
    setIdade(vetor[indice].idade)
    setCidade(vetor[indice].cidade)
    setBtnCadastrar(false)
  }

  //Formulário
  const Alterar = () => {
    let dados = {'nome': nome, 'idade': idade, 'cidade': cidade}
    let copia = [...vetor] //faz uma copia do vetor, com os dados q estao nele
    copia[indice] = dados //modifica a copia
    setVetor(copia)

    setNome('')
    setIdade('')
    setCidade('')
    setBtnCadastrar(true)
  }

  //Formulário
  const Remover = () => {
    let copia = [...vetor] //pega todos os dados do vetor e adc na variavel
    copia.splice(indice, 1) //1º posição que começa a exclusão , 2º quantos registros quer remover(linha)
    setVetor(copia) //sobrepor o state vetor

    setNome('')
    setIdade('')
    setCidade('')
    setBtnCadastrar(true)
  }

  //Formulário
  const Cancelar = () => {
    setNome('')
    setIdade('')
    setCidade('')
    setBtnCadastrar(true)
  }


  return (
    <div>
      {/* {JSON.stringify(vetor)} */}
      <Formulario btnCadastrar={btnCadastrar}
        cadastrar={Cadastrar} alterar={Alterar} remover={Remover} cancelar={Cancelar}
        setNome={setNome} setIdade={setIdade} setCidade={setCidade}
        nome={nome} idade={idade} cidade={cidade}/>

      <Tabela vetor={vetor} selecionar={Selecionar}/>
    </div>
  );
}

export default App;


