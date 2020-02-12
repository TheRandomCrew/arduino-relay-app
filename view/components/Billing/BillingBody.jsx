import React from "react";
import LayoutStyle from "./Style";

const BillingBody = () => {
  return (
    <>
      <div className="m-20" id="billing">
        <div className="contenedor">
          <div className="">
            <p className="titulo m-20">Pago de servicio eléctrico </p>
            <p className="cantidadFactura"> 50 USD </p>
          </div>

          <div className="datosFactura">
            <p>Fecha de emisión: 15/05/2020 </p>
            <p>Remitente: Julio Gauss</p>
            <p>N° Entidad: 9082745</p>
            <p>País: Brasil</p>
            <p>Empresa: Energy connect</p>
          </div>

          <div className="reclamoFactura m-20">
            <p className="m-20">
              Cualquier consulta o reclamos, puedes enviar un mensaje a nuestro
              buzón
            </p>
            <a href="#" className="button-primary print-button ">
              IMPRIMIR
            </a>
          </div>
        </div>
      </div>
      <LayoutStyle />
    </>
  );
};

export default BillingBody;
