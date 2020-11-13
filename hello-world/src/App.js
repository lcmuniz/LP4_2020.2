import React from 'react'
import './App.css'

import Pessoa from './Pessoa'
import Cabecalho from './Cabecalho'
import Lista from './Lista'

function App() {

  const pessoas = [
    {nome: 'Luiz Carlos', email: 'lcmuniz@gmail.com', idade: 50},
    {nome: 'Maria Silva', email: 'maria@gmail.com', idade: 30},
    {nome: 'Carlos ALberto', email: 'carlos@gmail.com', idade: 60},
    {nome: 'Carlos Sousa', email: 'carlos@gmail.com', idade: 60},
    
  ]


  return (
    <div className="App">
      
      <Cabecalho>Minha Aplicação</Cabecalho>

      { pessoas.map(pessoa => 
          <Pessoa nome={pessoa.nome}  
                  email={pessoa.email} 
                  idade = {pessoa.idade} />) 
      }

      <Lista cores={ ['Amarelo', 'Verde', 'Vermelho', 'Azul', "Rosa"] } />

    </div>
  )
}

export default App