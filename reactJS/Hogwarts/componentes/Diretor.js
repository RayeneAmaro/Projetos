import React, { Component } from 'react';

class Diretor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diretor: [ ],
        }
    }

    componentDidMount(){
        let url = 'https://hp-api.herokuapp.com/api/characters';

        fetch(url)
        .then((r)=>r.json())
        .then((json) => {
            console.log(url)
            let state=this.state;
            state.diretor = json;
            this.setState(state);
        })
    }

    render() {
        return (
            <div>
                <section  className='container'>
                    <h2 className='subtitulo'>Diretor de Hogwarts</h2>
                    {this.state.diretor.filter((diretor) => diretor.name === "Albus Dumbledore")
                        .map((dir, idx) => {
                            return(
                                <div key={idx}>
                                    <details className='conjunto'>
                                        <summary className='nomes'>{dir.name}</summary>
                                        <ul>
                                            <li className='lista'>Espécie: {dir.species}</li>
                                            <li className='lista'>Sexo: {dir.gender}</li>
                                            <li className='lista'>Tipo: {dir.ancestry}</li>
                                            <li className='lista'>Ator: {dir.actor}</li>
                                        </ul>
                                    </details>
                                </div>
                            )
                        })
                        }
                </section>
            </div>
        );
    }
}

Diretor.propTypes = {

};

export default Diretor;