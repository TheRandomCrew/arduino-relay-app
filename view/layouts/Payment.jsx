import React from "react";
import Layout from "../components/Payment/Layout";

const Payment = () => (
  <Layout>
    <main className="m-20 payment" id="payment">
      <div className="">
        <p className="titulo">Pago a realizar</p>
        <p className="cantidadFactura">50 USD</p>
      </div>
      <div>
        <form className="">
          <label className="labelForm">Nombre del usuario</label>
          <input type="text" id="name" name="" className="inputForm" />
          <label className="labelForm">Numero de tarjeta</label>
          <input type="text" id="card" name="" className="inputForm" />

          <div className="row">
            <div className="col-6">
              <label className="labelForm ">Fecha de expiración</label>
              <input type="date" id="date" name="" className="inputForm" />
            </div>
            <div className="col-6">
              <label className="labelForm ">Código de seguridad</label>
              <input type="number" id="code" name="" className="inputForm" />
            </div>
          </div>
          <input
            type="submit"
            className="button-realizar-pago button-primary"
            value="REALIZAR PAGO"
          />
        </form>
      </div>
    </main>
  </Layout>
);

export default Payment;
