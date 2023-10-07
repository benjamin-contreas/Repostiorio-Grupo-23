import React from 'react'

const InfoMiembro = ({foto, tetxo, nombre, width}) => {
  return (
    <div className='container grid'>
      <div>
        <img src={foto} style={{ width: width }} alt="No se" className='grid-image'/>
      </div>
      <div>
        <h2>{nombre}</h2>
        <p>{tetxo}</p>
      </div>
    </div>
  )
}

export default InfoMiembro