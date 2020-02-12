import React from "react";
import Layout from "../components/Settings/Layout";

const Settings = () => (
  <Layout>
    <main>
      <div className="connect">
        <span>Servicio Electrico</span>
        <img
          className="m-20"
          src="./src/assets/Logo/isotipo.png"
          alt="energy connect"
        />
        <button className="m-20 button-primary">Cancelar</button>
      </div>
      <form className="m-20">
        <fieldset>
          <label>
            <span>Notificaciones</span>
            <div className="switch">
              <input
                type="checkbox"
                name="notifications"
                id="notifications-checkbox"
                checked
              />
              <span className="slider round"></span>
            </div>
          </label>
        </fieldset>
        <fieldset>
          <label>
            Email
            <div className="switch">
              <input
                type="checkbox"
                name="emails"
                id="emails-checkbox"
                checked
              />
              <span className="slider round"></span>
            </div>
          </label>
        </fieldset>
        <fieldset>
          <label>
            Pago Automatico
            <div className="switch">
              <input
                type="checkbox"
                name="auto-payment"
                id="auto-payment-checkbox"
                checked
              />
              <span className="slider round"></span>
            </div>
          </label>
          Idioma
        </fieldset>

        <div className="radio-toolbar">
          <input
            type="radio"
            id="radioBanana"
            name="radioFruit"
            value="banana"
            checked
          />
          <label for="radioBanana">
            <img src="/icons/es.png" alt="es" width="100px" />
          </label>
          <input type="radio" id="radioApple" name="radioFruit" value="apple" />
          <label for="radioApple">
            <img src="/icons/en.png" alt="en" width="100px" />
          </label>
        </div>
      </form>
    </main>
  </Layout>
);

export default Settings;
