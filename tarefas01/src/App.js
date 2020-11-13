import { useState } from 'react';
import './App.css';

let indice = 0

function App() {

  const [tarefas, setTarefas] = useState([])

  const [mensagem, setMensagem] = useState('Você não tem tarefas.')

  function alterarMensagem(array) {
    if (array.length === 0) {
      setMensagem('Você não tem tarefas.')
    }
    else if (array.length === 1) {
      setMensagem('Você tem 1 tarefa.')
    }
    else {
      setMensagem('Você tem ' + array.length + ' tarefas.')
    }
  }

  function tratarEntrada(event) {

    if (event.keyCode === 13) {

        const texto = event.target.value

        if (texto === "") return;

        const novaTarefa = {id:indice, texto: texto, completada: false}
        
        const novoArray = [...tarefas, novaTarefa]

        setTarefas(novoArray)

        event.target.value = ''

        alterarMensagem(novoArray)

        indice = indice + 1

      }
  }

  function marcar(id) {

    const novoArray = tarefas.map(tarefa => {
      if (tarefa.id === id) {
        return {...tarefa, completada: !tarefa.completada}
      }
      else {
        return tarefa
      }
    })

    setTarefas(novoArray)

  }

  function apagar(id) {

    const novoArray =  tarefas.filter(tarefa => tarefa.id !== id )

    setTarefas(novoArray)

    alterarMensagem(novoArray)

  }

  function obterClasse(tarefa) {
    if (tarefa.completada) {
      return "texto risco"
    }
    else {
      return "texto"
    }
  }

  return (
    <div className="App">

      <div className="titulo">
        Lista de Tarefas
      </div>

      <div className="formulario">
        <div className="cel1">
          <input className="entrada" 
            onKeyUp={event => tratarEntrada(event)}
            />
        </div>
        <div className="cel2"><i className="fa fa-plus-circle mais"></i></div>
      </div>

      <div className="conteudo">
        <ul className="lista">

          {
            tarefas.map(tarefa => 
              <li className="item" key={tarefa.id}>
                <i className="fa fa-circle circulo"
                  onClick={() => marcar(tarefa.id)}>
                </i>
                <p className={obterClasse(tarefa)}>
                  {tarefa.texto} 
                </p>
                <i className="fa fa-trash lixeira" 
                  onClick={() => apagar(tarefa.id)}>
                </i>
              </li>
            )
          }

        </ul>
      </div>

      <div className="mensagem">
        {mensagem}
      </div>
      
    </div>
  );
}

export default App;
