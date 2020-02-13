import React, { useState } from 'react'
import { useRouter } from "next/router";
import { withCookie } from 'next-cookie'

const LoginForm = ({cookie}) => {
  const [name, setName] = useState( cookie.get('name') || '')
  const router = useRouter();

  const onChange = event => {
    setName(event.target.value)
  };

  const onSubmit = (e) => {
      e.preventDefault();

      cookie.set('name', name)
      router.push('/services');
  }


  return (
    <form className="flex-column form-container" onSubmit={onSubmit}>
      <h1 className="h1-title-login title-text">ACCESO</h1>
      <fieldset className="flex-column fieldset-login">
        <input 
        placeholder="INGRESA TU NOMBRE" 
        className="input-login"
        type='name'
        value={name} 
        onChange={onChange}
        />
        <input placeholder="INGRESA TU PAÍS" className="input-login" />
        <input
          placeholder="INGRESA TU NUMERO DE IDENTIDAD"
          className="input-login"
        />
      </fieldset>
      <input type='submit' className="submit-button" value="Ingresar" />
    </form>
  )
}

export default withCookie(LoginForm)
