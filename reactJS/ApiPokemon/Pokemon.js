import React, { Component } from 'react';
import './estilo.css'

class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: []
        };
    }
    
    componentDidMount(){
        let url = 'https://pokeapi.co/api/v2/pokemon/ivysaur'
        fetch(url)
        .then((r) => r.json())
        .then((json) =>{
            let state = this.state;
            state.pokemon = json
            this.setState(state);
        })
    }

    render() {
        console.log(this.state.pokemon.name);
        return (
            <div className='container'>
                <h1 className='titulo'>Pokemon</h1>
                <div key={this.state.pokemon.id} className='conteudo'>
                    <h2 className='subtitulo'>Nome: {this.state.pokemon.name}</h2>
                    <img src={this.state.pokemon?.sprites?.front_default} className='img'/>
                    <a href="https://www.pokemon.com/br/pokedex/bulbasaur" target="_blank">
                        <button type="button" className='botao'>Conheça</button>
                    </a>
                </div>
            </div>
        );
    }
}

export default Pokemon;