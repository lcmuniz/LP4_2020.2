import React from 'react'
import './Cabecalho.css'


class Cabecalho extends React.Component {

  render() {
    return (
      <div className="titulo">
        { this.props.children }
      </div>
    )  
  }

}


export default Cabecalho
