import React, {useState} from 'react'

const Tabela = ({vetor, selecionar}) => {

    const [termo, setTermo] = useState('')

    return (
        <div>
            <input type='text' onChange={e => setTermo(e.target.value)} placeholder='Digite um nome para pesquisa' className='form-control pesquisa'/>
            <section className='secao'>
                <h2>{termo}</h2>
            </section>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Nome</td>
                        <td>Cidade</td>
                        <td>Idade</td>
                        <td>Selecionar</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        vetor.filter(obj => obj.nome.includes(termo)).map((obj, indice) => (
                            <tr key={indice}>
                                <td>{indice + 1}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.cidade}</td>
                                <td>{obj.idade}</td>
                                <td><button className='tabela' onClick={() => selecionar(indice)}>Selecionar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tabela