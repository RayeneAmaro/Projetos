import React, { Component } from 'react';

class Professores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profs: [],
        }
    }

    componentDidMount() {
        let urlP = 'https://hp-api.herokuapp.com/api/characters'

        fetch(urlP)
        .then((r)=>r.json())
        .then((json)=>{
            let state = this.state;
            state.profs = json;
            this.setState(state);
        })
        .catch((err) => {
            alert(err)
        })
    }

    render() {
        return (
            <div>
                <section className='container'>
                    <h2 className='subtitulo'>Professores e funcionários</h2>
                    {this.state.profs.filter((profs)=>profs.hogwartsStaff === true)
                    .filter((profs) => profs.image !== "")
                    .map((phuf, index)=>{
                        return(
                            <div key={index}>
                                <img src={phuf.image} className="img imgProf" />
                                <details className="conjunto">
                                    <summary className="nomes">{phuf.name}</summary>
                                    <ul>
                                        <li className="lista">Espécie: {phuf.species}</li>
                                        <li className="lista">Sexo: {phuf.gender}</li>
                                        <li className="lista">Data de aniversário: {phuf.dateOfBirth}</li>
                                        <li className="lista">Tipo: {phuf.ancestry}</li>
                                        <li className="lista">Patrono: {phuf.patronus}</li>
                                        <li className="lista">Ator: {phuf.actor}</li>
                                    </ul>
                                </details>
                            </div>
                        )
                    })}
                </section>
                
                <section className='container'>
                    <h2 className='subtitulo'></h2>
                    {this.state.profs.filter((profs)=>profs.hogwartsStaff === true)
                    .filter((profs)=>profs.image === "")
                    .map((phuf,index)=>{
                        return(
                            <div key={index}>
                                <details className="conjunto">
                                    <summary className="nomes">{phuf.name}</summary>
                                    <ul>
                                        <li className="lista">Espécie: {phuf.species}</li>
                                        <li className="lista">Sexo: {phuf.gender}</li>
                                        <li className="lista">Data de aniversário: {phuf.dateOfBirth}</li>
                                        <li className="lista">Tipo: {phuf.ancestry}</li>
                                        <li className="lista">Patrono: {phuf.patronus}</li>
                                        <li className="lista">Ator: {phuf.actor}</li>
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

export default Professores;