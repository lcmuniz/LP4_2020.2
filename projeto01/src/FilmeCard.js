import React from 'react'

import './FilmeCard.css'

function FilmeCard(props) {
  return (
    <div className="card">
      <p className="titulo1">Título: {props.item.titulo}</p>
      <p className="duracao">Duração: {props.item.duracao}</p>
    </div>
  )

}

export default FilmeCard