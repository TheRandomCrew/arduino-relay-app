import React from 'react'
import Layout from '../components/Services/Layout'

const Services = () => (
  <Layout>
    <main>
      <div id="home">
        <div class="tabs">
          <span id="services-tabber" active="true">
            Servicios
          </span>
          <a href="./billing.html" id="billing-tabber">
            Facturaciones
          </a>
        </div>
        <div id="services">
          <div class="bar-container">
            <h5 class="titulo">Renovacion</h5>
            <div class="contenedor">
              <p class="info-text">19/06/20</p>
              <div class="bar-container">
                <progress black="true" max="100" value="30"></progress>
              </div>
            </div>

            <h5 class="titulo">Pago</h5>
            <div class="contenedor">
              <p class="pago">15 USD</p>
              <div class="pay-parent">
                <a href="./payment.html" class="button-primary pay-button">
                  PAGAR
                </a>
              </div>
            </div>

            <h5 class="titulo">Uso de Energia</h5>
            <div class="contenedor">
              <p class="info-text">70%</p>
              <div class="bar-container">
                <progress green="true" max="100" value="70"></progress>
              </div>
            </div>

            <h5 class="titulo">Deudas</h5>
            <div class="contenedor">
              <p class="info-text">¡Felicitaciones Julio!</p>
              <div class="">
                <p class="m-20 estadoDeuda">
                  No posees de ninguna deuda hasta la fecha
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
)

export default Services
