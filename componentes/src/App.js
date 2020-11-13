import React from 'react'

import './App.css'

import Pessoa from './Pessoa'

class App extends React.Component {

  state = {
    contador: 100
  }

  diminuir() {

    this.setState( {
      contador: this.state.contador - 1
    })

  }

  aumentar() {

    this.setState( {
      contador: this.state.contador + 1 
    })

  }

  render() {
    return (
      <div className="conteudo">
         
          <button className="dec" onClick={ () => this.diminuir() }> DIMINUIR </button>

          <div className="numero">{this.state.contador}</div>

          <button className="inc" onClick={ () => this.aumentar()} > AUMENTAR </button>

      </div>
    )
  }

}


export default App

