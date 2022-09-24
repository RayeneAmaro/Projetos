import React, { Component } from 'react';

class Feiticos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feiticos: [],
        }
    }

    componentDidMount() {
        let url = 'https://hp-api.herokuapp.com/api/spells'

        fetch(url)
        .then((r)=>r.json())
        .then((json)=>{
            let state = this.state;
            state.feiticos = json;
            this.setState(state);
        })
    }

    render() {
        return (
            <div>
                <section className='container'>
                    <h2 className="subtitulo">Feitiços</h2>
                    {this.state.feiticos.map((feiticos,index)=>{
                        return(
                            <div key={index}>
                                <details className="conjunto">
                                    <summary className="nomes">{feiticos.name}</summary>
                                    <li className="descricao">{feiticos.description}</li>
                                </details>
                            </div>
                        )
                    })}
                </section>

            </div>
        );
    }
}


export default Feiticos;
