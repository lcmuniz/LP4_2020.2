import React from 'react'


function Lista(props) {

  return (
    <div>
      <h2>Minha lista de cores favoritas:</h2>
      <ol>
        { props.cores.map(cor => <li>{cor}</li>) }
      </ol>
    </div>
  )
}


export default Lista