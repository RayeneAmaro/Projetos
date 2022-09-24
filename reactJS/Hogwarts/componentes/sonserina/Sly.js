import React, { Component } from 'react';

class Sly extends Component {
    constructor(props) {
        super(props);
            this.state = {
                casaSly: [],
            }
    }

    componentDidMount(){
        let urlSly = 'https://hp-api.herokuapp.com/api/characters/house/slytherin';
        fetch(urlSly)
        .then((r) => r.json())
        .then((json)=>{
            let state = this.state;
            state.casaSly = json;
            this.setState(state);
        })
    }


    render() {
        return (
            <div>
                <section className="container">
                    <h3 className="subtitulo">Estudantes:</h3>

                    {this.state.casaSly.filter((casaSly) => casaSly.hogwartsStudent === true)
                    .filter((casaSly) => casaSly.image !== '')
                    .map((sly,index) => {
                        return(
                            <div key={index}>
                                <img src={sly.image} alt="" className="img imgSly" />
                                <details className='conjunto'>
                                    <summary className='nomes'>{sly.name}</summary>
                                    <ul>
                                        <li className="lista">Espécie: {sly.species}</li>
                                        <li className="lista">Sexo: {sly.gender}</li>
                                        <li className="lista">Data de aniversário: {sly.dateOfBirth}</li>
                                        <li className="lista">Tipo: {sly.ancestry}</li>
                                        <li className="lista">Patrono: {sly.patronus}</li>
                                        <li className="lista">Ator: {sly.actor}</li>
                                    </ul>
                                </details>
                            </div>
                        )
                    })}
                </section>

                <section className="container">
                    <h3 className="subtitulo">Outros estudantes:</h3>
                    {this.state.casaSly.filter((casaSly) => casaSly.image === '')
                    .filter((casaSly) => casaSly.hogwartsStudent === true)
                    .map((sly,index) => {
                        return(
                            <div key={index}>
                                <details className="conjunto">
                                    <summary className="nomes">{sly.name}</summary>
                                    <ul>
                                        <li className="lista">Espécie: {sly.species}</li>
                                        <li className="lista">Sexo: {sly.gender}</li>
                                        <li className="lista">Ator: {sly.actor}</li>
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

export default Sly;