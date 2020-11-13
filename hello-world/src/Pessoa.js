import React from 'react'


function Pessoa(props) {
  return (
    <div>
      <h2>{props.nome}</h2>
      <p>{props.email}</p>
      <p>Idade: {props.idade} </p>
    </div>
  )  
}


export default Pessoa
