import React from 'react'

import './Pessoa.css'

class Pessoa extends React.Component {

  render() {
    return (
      <div className="itemPessoa">
        <p>Nome: { this.props.item.nome }</p>
        <p>Idade: { this.props.item.idade }</p>
        <p>Profissão: { this.props.item.profissao }</p>
      </div>
    )
  }

}

export default Pessoa