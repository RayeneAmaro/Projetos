import React, { Component } from 'react';
import './style.css';

class Biscoito extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textoFrases: '',
        };

        this.quebrarBiscoitos = this.quebrarBiscoitos.bind(this);

        this.frases = ['Siga os bons e aprenda com eles', 'O bom-senso vale mais do que muito conhecimento',
        'O riso é a menor distância entre 2 pessoas', 'Deixe de lado as preocupações e seja feliz',
        'Realize o óbvio, pense no improvável e conquiste o impossível', 'Acredite em milagres, mas não dependa deles',
        'A maior barreira para o sucesso é o medo do fracasso.']

    }

    quebrarBiscoitos(){
        let state = this.state;
        let numero = Math.floor(Math.random() * this.frases.length);

        state.textoFrases = this.frases[numero];
        this.setState(state);
    }

    render() {
        return (
            <div className='componente'>
                <h1 className='titulo'>Biscoito da sorte</h1>
                <img src={require("./assets/biscoito.jpg")}></img>
                <Botao nome="Abrir biscoito" acaoBtn={this.quebrarBiscoitos}/>
                <h2 className='texto'>{this.state.textoFrases}</h2>
            </div>
        );
    }
}

class Botao extends Component {
    render(){
        return (
            <button onClick={this.props.acaoBtn} className='botao'>{this.props.nome}</button>
        )
    }

}

export default Biscoito;