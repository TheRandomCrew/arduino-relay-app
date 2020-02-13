import React from 'react'
import { withCookie } from 'next-cookie'
import Layout from '../components/Billing/Layout'
import ActiveLink from '../containers/Link'

const Billing = ({ cookie }) => (
  <Layout>
    <main>
      <div id="home">
        <div className="tabs">
          <ActiveLink href="/services" id="services-tabber">
            Servicios
          </ActiveLink>
          <span id="billing-tabber" active="true">
            Facturaciones
          </span>
        </div>
        <div className="m-20 print" id="billing">
          <div className="contenedor">
            <div className="">
              <p className="titulo m-20">Pago de servicio eléctrico </p>
              <p className="cantidadFactura">USD$15.00</p>
            </div>

            <div className="datosFactura">
              <p>Fecha de emisión: 15/05/2020 </p>
              <p>Remitente: {cookie.get('name') || 'User'}</p>
              <p>N° Entidad: 9082745</p>
              <p>País: Brasil</p>
              <p>Empresa: Energy connect</p>
            </div>

            <div className="reclamoFactura m-20">
              <p className="m-20">
                Cualquier consulta o reclamos, puedes enviar un mensaje a
                nuestro buzón
              </p>
              <a
                href="/services"
                onClick={e => {
                  e.preventDefault() // https://www.thoughtco.com/how-to-add-a-print-button-4072006
                  window.print()
                  return false
                }}
                className="button-primary print-button "
              >
                IMPRIMIR
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
)

export default withCookie(Billing)
