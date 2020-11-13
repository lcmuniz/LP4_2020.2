import React from 'react'

import './Conteudo.css'

import FilmeCard from './FilmeCard'

class Conteudo extends React.Component {


  state = {
    contador: 100,
    mensagem: "ola"
  }


  incrementar() {

    this.setState({
      contador: this.state.contador + 1,
      mensagem: "como vai"
    })

  }

  render() {

    return (
      <div className="conteudo">

        <p>{this.props.texto}</p>

        <h1>{this.state.contador}</h1>

        <h2>{this.state.mensagem}</h2>

        { this.props.filmes.map(filme => <FilmeCard item={filme} />)}


        <p>
          <button onClick={ () => this.incrementar() } className="botao">Adicionar</button>
        </p>

      </div>
    )

  }

}


export default Conteudo