const LayoutStyle = () => <style jsx="true">{`
.payment {
    padding: 10px;
  }
  
  .titulo {
    color: #656464;
    font-size: 13px;
    font-weight: bold;
    padding-left: 20px;
    text-align: center;
  }
  
  .cantidadFactura {
    text-align: center;
    font-weight: 900;
    font-size: 34px;
    margin: 20px;
    color: var(--gray39);
  }
  
  .labelForm {
    font-weight: bold;
    font-size: 10px;
    color: var(--gray53);
    margin: 0;
  }
  
  .inputForm {
    border: 2px solid var(--gray53);
    border-radius: 6px;
    width: 100%;
  }
  
  .button-realizar-pago {
    background: var(--blue212);
    color: white;
    width: 100%;
    margin: 20px 0;
  }
  
  .row {
    display: flex;
  }
  
  .col-6 {
    flex: 50%;
  }
  
  input[type='submit'] {
    border: none;
  }
  
`}</style>

export default LayoutStyle