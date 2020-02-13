import React, { useState } from 'react'

const EnergyControl = () => {
  const [status, setStatus] = useState('off')

  const pressOn = (e) => {
      console.log('pressed ON')
    setStatus('on')
  }

  const pressOff = (e) => {
    console.log('pressed OFF')
    setStatus('off')
  }

  return (
    <div className="connect">
      <span>Estado de Servicio Electrico: {status=='on'?'Encendido':'Apagado'}</span>
      <img className="m-20" src={status==='on'?'/icons/on.svg':'/icons/off.svg'} alt="energy connect" />
      <button 
        className={`m-20 button-primary ${status==='on'?'clr-red':'clr-green'}`}
        onClick={e=>status==='on'?pressOff(e):status==='off'?pressOn(e):alert('Please wait')}
    >
          {status==='on'?'Apagar':'Encender'}
    </button>
    </div>
  )
}

export default EnergyControl
