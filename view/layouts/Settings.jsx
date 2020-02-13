import React from "react";
import Layout from "../components/Settings/Layout";
import EnergyControl from "../containers/EnergyControl";
import CheckBoxInput from "../containers/CheckBoxInput";

const Settings = () => (
  <Layout>
    <main>
      <EnergyControl/>
      <form className="m-20">
        <fieldset>
          <CheckBoxInput label='Notificaciones'/>
        </fieldset>
        <fieldset>
          <CheckBoxInput label='Email'/>
        </fieldset>
        <fieldset>
          <CheckBoxInput label='Pago Automatico'/>
        </fieldset>
          Idioma

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
