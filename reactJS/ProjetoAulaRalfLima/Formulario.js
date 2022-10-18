import React from 'react';

const Formulario = ({btnCadastrar, cadastrar, alterar, remover, cancelar, setNome, setIdade, setCidade, nome, idade, cidade}) => {

    return (
        <div className='form'>
            <form>
                <p className='lead'>Nome: <input type="text" className='form-control' onChange={e => setNome(e.target.value)} value={nome}/></p>
                <p className='lead'>Cidade: <input type="text" className='form-control' onChange={e => setCidade(e.target.value)} value={cidade}/></p>
                <p className='lead'>Idade: <input type="number" className='form-control' onChange={e => setIdade(e.target.value)} value={idade}/></p>
                
                {
                    btnCadastrar
                    ?
                    <button className='btn btn-primary' type='submit' onClick={cadastrar}>Cadastrar</button>
                    :
                    <div>
                        <button className='btn btn-primary' type='button' onClick={alterar}>Alterar</button>
                        <button className='btn btn-danger' type='button' onClick={remover}>Excluir</button>
                        <button className='btn btn-dark' type='button' onClick={cancelar}>Cancelar</button>
                    </div>
                }
            </form>
        </div>
    )
}

export default Formulario