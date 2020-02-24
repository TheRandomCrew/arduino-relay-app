import React, { useState } from 'react';

const EnergyControl = () => {
  const [status, setStatus] = useState('off')
  const [arduinoNumber, setArduinoNumber] = useState('50379292637')

  const arduinoRequest = (number, order) => {
    fetch(`https://arduino-relay-backend.herokuapp.com/${number}/${order}`)
      .then(res => res.json())
      .then(res=>{
        console.log(res, order)
        if (res.success) setStatus(res.data.status==='E'?'on':'off');
      })
      .catch(console.error)
  }

  const onChange =(e) => {
    setArduinoNumber(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    arduinoRequest(e.target['phone'].value, status==='on'?'D':'E')
  }

  return (
    <form className="connect" onSubmit={(e)=>onSubmit(e)}>
      <span>Estado de Servicio Electrico: {status=='on'?'Encendido':'Apagado'}</span>
      <img className="m-20" src={status==='on'?'/icons/on.svg':'/icons/off.svg'} alt="energy connect" />
      <input type="tel" id="phone" name="phone" size='11' onChange={e=>onChange(e)} value={arduinoNumber}
       required placeholder='50379292637' list="defaultTels"/>
       <datalist id="defaultTels">
        <option value="50361855000"/>
        <option value="573203192077"/>
        <option value="50379292637"/>
      </datalist>
      <button 
        className={`m-20 button-primary ${status==='on'?'clr-red':'clr-green'}`}
        type="submit"
      >
          {status==='on'?'Apagar':'Encender'}
    </button>
    </form>
  )
}

export default EnergyControl
