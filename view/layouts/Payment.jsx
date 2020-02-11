import React from 'react'
import Layout from '../components/Payment/Layout'

const Payment = () => (
  <Layout>
    <main class="m-20 payment" id="payment">
      <div class="">
        <p class="titulo">Pago a realizar</p>
        <p class="cantidadFactura">50 USD</p>
      </div>
      <div>
        <form class="">
          <label class="labelForm">Nombre del usuario</label>
          <input type="text" id="name" name="" class="inputForm" />
          <label class="labelForm">Numero de tarjeta</label>
          <input type="text" id="card" name="" class="inputForm" />

          <div class="row">
            <div class="col-6">
              <label class="labelForm ">Fecha de expiración</label>
              <input type="date" id="date" name="" class="inputForm" />
            </div>
            <div class="col-6">
              <label class="labelForm ">Código de seguridad</label>
              <input type="number" id="code" name="" class="inputForm" />
            </div>
          </div>
          <input
            type="submit"
            class="button-realizar-pago button-primary"
            value="REALIZAR PAGO"
          />
        </form>
      </div>
    </main>
  </Layout>
)

export default Payment
