import React from 'react'
import Layout from '../components/Profile/Layout'

const Profile = () => (
  <Layout>
    <main>
      <div class="main-container">
        <div class="foto-container">
          <div class="circle">
            <span>+</span>
            <p>Añadir Foto</p>
          </div>
        </div>
      </div>
      <div class="button-container">
        <button class="button-primary button-editar">EDITAR</button>
      </div>
      <form class="m-20">
        <fieldset class="m-10">
          <label class="label-control" for="">
            Nombre del usuario
          </label>
          <p>Julio Torres</p>
        </fieldset>
        <fieldset class="m-10">
          <label class="label-control" for="">
            Código
          </label>
          <p>**********</p>
        </fieldset>
        <fieldset class="m-10">
          <label class="label-control" for="">
            Correo electrónico
          </label>
          <p>julio.torres@gmail.com</p>
        </fieldset>
        <fieldset class="m-10">
          <label class="label-control" for="">
            Dirección
          </label>
          <p>Av. Micaela Bastidas Lote 87 - Miraflores</p>
        </fieldset>
        <fieldset class="m-10">
          <label class="label-control" for="">
            Pais
          </label>
          <p>Ecuador</p>
        </fieldset>
        <fieldset class="m-10">
          <label class="label-control">Número de identidad</label>
          <p>932112321</p>
        </fieldset>
        <fieldset>
          <input
            type="submit"
            class="button-aceptar button-primary"
            value="ACEPTAR"
          />
        </fieldset>
      </form>
    </main>
  </Layout>
)

export default Profile
