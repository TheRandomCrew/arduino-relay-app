import React from 'react'
import Layout from '../components/Services/Layout'

const Services = () => (
  <Layout>
    <main>
      <div id="home">
        <div className="tabs">
          <span id="services-tabber" active="true">
            Servicios
          </span>
          <a href="/billing" id="billing-tabber">
            Facturaciones
          </a>
        </div>
        <div id="services">
          <div className="bar-container">
            <h5 className="titulo">Renovacion</h5>
            <div className="contenedor">
              <p className="info-text">19/06/20</p>
              <div className="bar-container">
                <progress black="true" max="100" value="30"></progress>
              </div>
            </div>

            <h5 className="titulo">Pago</h5>
            <div className="contenedor">
              <p className="pago">15 USD</p>
              <div className="pay-parent">
                <a href="/payment" className="button-primary pay-button">
                  PAGAR
                </a>
              </div>
            </div>

            <h5 className="titulo">Uso de Energia</h5>
            <div className="contenedor">
              <p className="info-text">70%</p>
              <div className="bar-container">
                <progress green="true" max="100" value="70"></progress>
              </div>
            </div>

            <h5 className="titulo">Deudas</h5>
            <div className="contenedor">
              <p className="info-text">¡Felicitaciones Julio!</p>
              <div className="">
                <p className="m-20 estadoDeuda">
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