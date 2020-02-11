import React from 'react'
import Layout from '../components/Help/Layout'

const Help = () => (
  <Layout>
    <main>
      <div class="header-help">
        <img src="/icons/help.svg" alt="Help" />
        <h2>Soporte Tecnico</h2>
      </div>
      <div class="body-help">
        <p>
          Hola, nuestro equipo esta para ayudarte ante cualquier inconveniente.
          Por favor Dejanos tu consulta o problema para poder ayudarte.
        </p>
        <form action="">
          <fieldset class="m-20">
            <label for="">Tienes un problema tecnico o consulta?</label>
            <select>
              <option value="volvo">Problem Tecnico</option>
              <option value="saab">Consulta</option>
              <option value="mercedes">Queja o Reclamo</option>
              <option value="audi">Seguimiento a Requerimiento</option>
            </select>
          </fieldset>
          <fieldset class="m-20">
            <label for="">Que tipo de problema?</label>
            <select>
              <option value="volvo">Pago</option>
              <option value="saab">Mis datos son incorrectos</option>
              <option value="mercedes">Una funcion de la app no sirve</option>
              <option value="audi">otro</option>
            </select>
          </fieldset>
          <fieldset class="m-20">
            <label for="">Describenos tu situacion</label>
            <textarea rows="6"></textarea>
          </fieldset>
          <fieldset class="send-button">
            <input type="submit" value="Enviar" class="button-primary" />
          </fieldset>
        </form>
      </div>
    </main>
  </Layout>
)

export default Help
