import React, { Component } from 'react';

class Griff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            casas: [ ],
        }
    }

    componentDidMount(){
        let url = 'https://hp-api.onrender.com/api/characters/house/gryffindor';
        fetch(url)
        .then((r)=>r.json())
        .then((json) => {
            console.log(url)
            let state=this.state;
            state.casas = json;
            this.setState(state);
        })
    }

    render() {
        return (
            <div>
                <section className='container'>
                <h3 className='subtitulo'>Estudantes:</h3>

                    {this.state.casas.filter((casas) => casas.hogwartsStudent === true)
                    .filter((casas) => casas.image !== '')
                    .map((grif,idx) => {
                    return(
                    <div key={idx}>
                        <img src={grif.image} alt="" className='img imgGrif'/>
                        <details className='conjunto'>
                            <summary className='nomes'>{grif.name}</summary>
                            <ul>
                                <li className='lista'>Espécie: {grif.species}</li>
                                <li className='lista'>Sexo: {grif.gender}</li>
                                <li className='lista'>Data de aniversário: {grif.dateOfBirth}</li>
                                <li className='lista'>Tipo: {grif.ancestry}</li>
                                <li className='lista'>Patrono: {grif.patronus}</li>
                                <li className='lista'>Ator: {grif.actor}</li>
                            </ul>
                        </details>
                    </div>
                    )
                     })}

                     <p className='subtitulo'>Outros estudantes:</p>
                     {this.state.casas.filter((casas) => casas.hogwartsStudent === true)
                     .filter((casas) => casas.image === '')
                     .map((grif,idx) =>{
                        return(
                            <div key={idx}>
                                <details className='conjunto'>
                                    <summary className='nomes'>{grif.name}</summary>
                                    <ul>
                                        <li className='lista'>Espécie: {grif.species}</li>
                                        <li className='lista'>Sexo: {grif.gender}</li>
                                        <li className='lista'>Tipo: {grif.ancestry}</li>
                                        <li className='lista'>Ator: {grif.actor}</li>    
                                    </ul>  
                                </details>
                            </div>
                        )
                     })}
                </section>
            </div>
        );
    }
}

export default Griff;