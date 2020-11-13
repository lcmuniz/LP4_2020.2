import React from 'react';
import './App.css';

import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'

function App() {

  const meunome = "Luiz Carlos"
  const idade = 45;

  const artigo = "Neste índice estão dispostos todos os filmes criticados em nossa cobertura para o 9º Olhar de Cinema (Festival Internacional de Curitiba), que ocorreu de forma online em 2020, por conta da pandemia, entre os dias 7 e 15 de outubro. "


  const filmes = [
    {titulo: "Procurando Nemo", duracao: 120},
    {titulo: "A Coisa", duracao: 180},
    {titulo: "Batman Begins", duracao: 180}
  ]


  return (
    <div className="App">

      <Cabecalho data="08/10/2020" nome={meunome} idade={idade}/>

      <Conteudo texto={artigo} filmes={filmes} />

    </div>
  );
}

export default App;
