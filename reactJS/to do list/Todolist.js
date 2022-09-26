import React, {useState, useRef} from 'react'

function Todolist() {

    const [lista, setLista] = useState([])
    const [tarefa, setTarefa] = useState('')

    const idt = useRef(0)
    const inFocus = useRef()

    function adicionar(){
        setLista(old => [...old, {id: idt.current, texto: tarefa.charAt(0).toUpperCase() + tarefa.slice(1).toLowerCase()}])
        idt.current++
        setTarefa('')
        inFocus.current.focus()
    }

    function limpar(){
        setLista([])
        idt.current = 0
    }

    function remover(id){
        const tmp = lista.filter((tarefas) => tarefas.id !== id)
        setLista(tmp)
    }

  return (
    <div className='container'>
        <h1 className='titulo'>Minhas Tarefas</h1>
        <p><span class='p'>Digite sua tarefa: </span><input ref={inFocus} type='text' value={tarefa} onChange={(e) => setTarefa(e.target.value)} className='input'/></p>
        <div className='botoes'>
            <button onClick={adicionar} className='botao adicionar'>Adicionar</button>
            <button onClick={limpar} className='botao limpar'>Limpar tudo</button>
        </div>
        <hr/>
        <h4 className='subtitulo'>Tarefas:</h4>
        {lista.map((t)=>{
            return (
                <div key={t.id}>
                    <li className='tarefaLista'>{t.texto}. <span onClick={() => {remover(t.id)}} className='remover'>[remover]</span></li>
                </div>
            )
        })}
    </div>
  )
}

export default Todolist
