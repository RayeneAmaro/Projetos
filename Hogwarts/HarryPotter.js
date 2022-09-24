import React, { Component } from 'react';
import './assets/style.css';
import Biscoito from './componentes/Biscoito';
import Rav from './componentes/corvinal/Rav';
import Diretor from './componentes/Diretor';
import Feiticos from './componentes/Feiticos';
import Griff from './componentes/griffinoria/Griff';
import Huf from './componentes/lufalufa/Huf';
import Professores from './componentes/Professores';
import Sly from './componentes/sonserina/Sly';

// https://hp-api.herokuapp.com/

class HarryPotter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            casas: [ ],
        }
    }


    render() {
        return (
            <div>
                <nav className='nav'>
                        <li className='navli'><a href='#diretoria'>Diretoria</a></li>
                        <li className='navli'><a href='#professores'>Professores/funcionários</a></li>
                        <li className='navli'><a href='#grifinoria' className='casag'>Grifinória</a></li>
                        <li className='navli'><a href='#sonserina' className='casas'>Sonserina</a></li>
                        <li className='navli'><a href='#lufalufa' className='casal'>Lufa-Lufa</a></li>
                        <li className='navli'><a href='#corvinal' className='casar'>Corvinal</a></li>
                        <li className='navli'><a href='#feiticos'>Feitiços</a></li>
                        <li className='navli'><a href='#biscoito'>Bicoito da Sorte</a></li>
                </nav>
                <h1 className='titulo'>Hogwarts</h1>
                
                <div className='conteudo' id='diretoria'>
                    <section className='secao secaoDiretor' >
                    <Diretor/>
                    </section>

                    <section className='secao secaoProfessores' id='professores'>
                        <Professores/>
                    </section>
                    
                    <section className='secao secaoGrif' id='grifinoria'>
                        <h2 className='casa grif'>Grifinória</h2>
                        <Griff/>
                    </section>
                    <section className='secao secaoSly' id='sonserina'>
                        <h2 className='casa sly'>Sonserina</h2>
                        <Sly/>
                    </section>
                    <section className='secao secaoHuf' id='lufalufa'>
                        <h2 className='casa huf'>Lufa-Lufa</h2>
                        <Huf/>
                    </section>
                    <section className='secao secaoRav' id='corvinal'>
                        <h2 className='casa rav'>Corvinal</h2>
                        <Rav/>
                    </section>
                    <section className='secao secaoFeiticos' id='feiticos'>
                        <h2 ></h2>
                        <Feiticos/>
                    </section>
                    <section className='secao secaoBiscoito' id='biscoito'>
                        <h2></h2>
                        <Biscoito/>
                    </section>           
                </div>
            </div>
        );
    }
}


export default HarryPotter;