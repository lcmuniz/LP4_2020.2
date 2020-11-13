import React from 'react'

import './Cabecalho.css'

function Cabecalho(props) {

    return (
      <div className="cabecalho">
        <p className="titulo">Projeto 01</p>
        <p className="data">{props.data}</p>
        <p className="nome">{props.nome} - {props.idade}</p>
      </div>
    )

}

export default Cabecalho