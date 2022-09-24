import React, { Component } from 'react';
import './style.css';

class cronometro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
            start: 'START',
        }
        this.timer = null;
        this.start = this.start.bind(this);
        this.zero = this.zero.bind(this);

    }

    start(){
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
            this.state.start = 'START';
            
        } else {
            this.timer = setInterval(() => {
                let state = this.state;
                state.numero += 0.01;
                this.setState(state);
            }, 10)
            this.state.start = 'PAUSAR'; 
            
            
        };
        this.setState(this.state);
    }

    zero(){
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
        }
        let state = this.state;
        this.state.numero = 0;
        this.state.start = 'START';
        this.setState(state);
    }

    render() {
        return (
            <div className='container'>
                <img src={require('./assets/cronometro.png')} className='img'/>
                <h2 className='timer'>{this.state.numero.toFixed(2)}</h2>
                <div className='btn'>
                    <button className='botao' onClick={this.start}>{this.state.start}</button>
                    <button className='botao' onClick={this.zero}>ZERO</button>
                </div>
            </div>
        );
    }
}


export default cronometro;