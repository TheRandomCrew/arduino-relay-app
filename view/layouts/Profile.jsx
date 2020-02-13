import React from "react";
import Layout from "../components/Profile/Layout";

const Profile = () => (
  <Layout>
    <main>
      <div className="main-container">
        <div className="foto-container">
          <div className="circle">
            <span>+</span>
            <p>Añadir Foto</p>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="button-primary button-editar">EDITAR</button>
      </div>
      <form className="m-20">
        <fieldset className="m-10">
          <label className="label-control" for="">
            Nombre del usuario
          </label>
          <p>Julio Torres</p>
        </fieldset>
        <fieldset className="m-10">
          <label className="label-control" for="">
            Código
          </label>
          <p>**********</p>
        </fieldset>
        <fieldset className="m-10">
          <label className="label-control" for="">
            Correo electrónico
          </label>
          <p>julio.torres@gmail.com</p>
        </fieldset>
        <fieldset className="m-10">
          <label className="label-control" for="">
            Dirección
          </label>
          <p>Av. Micaela Bastidas Lote 87 - Miraflores</p>
        </fieldset>
        <fieldset className="m-10">
          <label className="label-control" for="">
            Pais
          </label>
          <p>Ecuador</p>
        </fieldset>
        <fieldset className="m-10">
          <label className="label-control">Número de identidad</label>
          <p>932112321</p>
        </fieldset>
        <fieldset>
          <input
            type="submit"
            className="button-aceptar button-primary"
            value="ACEPTAR"
          />
        </fieldset>
      </form>
    </main>
  </Layout>
);

export default Profile;
