import React, { Component } from 'react';

class Huf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            casaHuf: [],
        }
    }

    componentDidMount() {
        let urlHuf = 'https://hp-api.herokuapp.com/api/characters/house/hufflepuff';

        fetch(urlHuf)
        .then((r) => r.json())
        .then((json)=>{
            let state = this.state;
            state.casaHuf = json;
            this.setState(state);
        })
    }

    render() {
        return (
            <div>
                <section className="container">
                    <h3 className="subtitulo">Estudantes</h3>

                    {this.state.casaHuf.filter((casaHuf) => casaHuf.hogwartsStudent === true)
                    .map((huf,index)=>{
                        return(
                            <div key={index}>
                                <details className="conjuntos">
                                    <img src={this.image} alt="" />
                                    <summary className="nomes">{huf.name}</summary>
                                    <ul>
                                        <li className="lista">Espécie: {huf.species}</li>
                                        <li className="lista">Sexo: {huf.gender}</li>
                                        <li className="lista">Data de aniversário: {huf.dateOfBirth}</li>
                                        <li className="lista">Tipo: {huf.ancestry}</li>
                                        <li className="lista">Patrono: {huf.patronus}</li>
                                        <li className="lista">Ator: {huf.actor}</li>
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

export default Huf;