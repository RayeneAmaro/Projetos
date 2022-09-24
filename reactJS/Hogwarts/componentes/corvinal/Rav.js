import React, { Component } from 'react';

class Rav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            casaRav: [],
        }
    }

    componentDidMount() {
        let urlRav = 'https://hp-api.herokuapp.com/api/characters/house/ravenclaw';

        fetch(urlRav)
        .then((r)=>r.json())
        .then((json)=>{
            let state = this.state;
            state.casaRav = json;
            this.setState(state);
        })
    }

    render() {
        return (
            <div>
                <section className="container">
                    <h3 className="subtitulo">Estudantes</h3>

                    {this.state.casaRav.filter((casaRav)=>casaRav.hogwartsStudent === true)
                    .filter((casaRav)=>casaRav.image !== "")
                    .map((rav, index)=>{
                        return(
                            <div key={index}>
                                <img src={rav.image} alt="" className="img imgRav" />
                                <details className="conjunto">
                                    <summary className="nomes">{rav.name}</summary>
                                    <ul>
                                        <li className="lista">Espécie: {rav.species}</li>
                                        <li className="lista">Sexo: {rav.gender}</li>
                                        <li className="lista">Data de aniversário: {rav.dateOfBirth}</li>
                                        <li className="lista">Tipo: {rav.ancestry}</li>
                                        <li className="lista">Patrono: {rav.patronus}</li>
                                        <li className="lista">Ator: {rav.actor}</li>
                                    </ul>
                                </details>
                            </div>
                        )
                    })}
                </section>
                <section className="container">
                    <h3 className="subtitulo">Outros estudantes:</h3>

                    {this.state.casaRav.filter((casaRav)=> casaRav.hogwartsStudent === true)
                    .filter((casaRav)=>casaRav.image === "")
                    .map((rav, index)=>{
                        return(
                            <div key={index}>
                                <details className="conjunto">
                                    <summary className="nomes">{rav.name}</summary>
                                    <ul>
                                        <li className="lista">Espécie: {rav.species}</li>
                                        <li className="lista">Sexo: {rav.gender}</li>
                                        <li className="lista">Ator: {rav.actor}</li>
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

export default Rav;