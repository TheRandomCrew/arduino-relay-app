import React, { useState } from 'react'
const arduinoNumber = 50370093968;

const EnergyControl = () => {
  const [status, setStatus] = useState('off')

  const pressOn = () => {
    fetch(`https://arduino-relay-backend.herokuapp.com/${arduinoNumber}/e`)
      .then(res => res.json())
      .then(res=>{
        console.log(res)
        setStatus('on')
      })
      .catch(console.error)
  }

  const pressOff = () => {
    fetch(`https://arduino-relay-backend.herokuapp.com/${arduinoNumber}/e`)
      .then(res => res.json())
      .then(res=>{
        console.log(res)
        setStatus('off')
      })
      .catch(console.error)
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
