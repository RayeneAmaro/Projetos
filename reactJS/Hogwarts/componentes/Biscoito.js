import React, { Component } from 'react';

class Biscoito extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textoFrases: '',
        }

        this.descobrir = this.descobrir.bind(this);
        this.frases = ['É preciso ter coragem para enfrentar os inimigos, e ainda mais para enfrentar os amigos.',
        'São as nossas escolhas que revelam o que realmente somos, muito mais do que as nossas qualidades.',
        'Não tenha pena dos mortos. Tenha pena dos vivos, e acima de tudo, daqueles que vivem sem amor.',
        'É o medo do desconhecido que nós tememos quando olhamos para a morte e a escuridão, nada mais.',
        'Haverá um momento em que teremos que escolher entre o que é fácil e o que é certo.',
        'A felicidade pode ser encontrada mesmo nas horas mais difíceis, se você lembrar de acender a luz.',
        'Afinal, aquilo que amamos sempre será parte de nós.',
        'Não adianta a gente ficar sentado se preocupando. O que tiver de ser será, e nós o enfrentaremos quando vier.',
        'Depois de todo esse tempo? Sempre.',
        'Há coisas pelas quais vale a pena morrer.',
        'As coisas que nos pertencem acabam voltando para nós.',
        'Todos nós temos tanto a luz e a escuridão dentro de nós. O que importa é o lado que escolhemos para agir. Isso é o que realmente somos.',
        'Controle suas emoções e discipline sua mente.',
        'Palavras são, na minha nada humilde opinião, nossa inesgotável fonte de magia.']
    }

    descobrir(){
        let state = this.state;
        let numero = Math.floor(Math.random() * this.frases.length);
        state.textoFrases = this.frases[numero];
        this.setState(state);
    }

    render() {
        return (
            <div>
                <section  className='container' style={{display:"flex", flexDirection:"column"}}>
                    <h3 className='subtitulo frasessub'>Descubra o que Hogwarts quer te dizer</h3>
                    <div className='areaFrase'>
                        <button onClick={this.descobrir} className='botao'>Descobrir</button>
                        <p className='frase'>{this.state.textoFrases}</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Biscoito;