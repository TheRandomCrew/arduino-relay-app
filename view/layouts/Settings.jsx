import React from "react";
import Layout from "../components/Settings/Layout";
import EnergyControl from "../containers/EnergyControl";

const Settings = () => (
  <Layout>
    <main>
      <EnergyControl/>
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
