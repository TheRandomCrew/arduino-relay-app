const LayoutStyle = () => <style jsx="true">{`
.titulo {
    color: var(--gray39);
    font-size: 13px;
    font-weight: bold;
    padding-left: 20px;
    text-align: center;
  }
  .cantidadFactura {
    font-weight: 900;
    font-size: 34px;
    margin: 5px;
    text-align: center;
    color: var(--gray39);
  }
  
  .datosFactura {
    font-weight: 500;
    font-size: 12px;
    color: var(--gray67);
    margin: 5px 15px;
  }
  
  .print-button {
    background-color: var(--blue207);
    color: white;
    text-shadow: 0 1px 0 var(--blue201);
    border-radius: 30px;
  }
  
  .reclamoFactura {
    font-weight: bold;
    font-size: 9px;
    text-align: center;
    color: var(--gray53);
  }
  .reclamoFactura p {
    margin-bottom: 2em;
  }
  
`}</style>

export default LayoutStyle
