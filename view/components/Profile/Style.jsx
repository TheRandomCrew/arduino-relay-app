const LayoutStyle = () => <style jsx="true">{`
header > nav {
    justify-content: flex-end;
  }
  
  .label-control {
    font-weight: bold;
  }
  
  .button-aceptar {
    background: var(--blue212);
    color: white;
    width: 100%;
    margin: 20px 0;
  }
  
  .button-editar {
    background: var(--blue196);
    color: white;
    margin: 0 15px;
  }
  
  .button-container {
    float: right;
    top: 10px;
    /*display: flex;
    justify-content: flex-end;*/
  }
  
  .foto-container {
    background: var(--gray0);
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin: 0 auto;
    padding: 5% 0;
  }
  
  .circle {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10% 0;
  }
  
  .circle p {
    font-size: x-small;
  }
  
  .main-container {
    margin-bottom: 20px;
  }
  
`}</style>

export default LayoutStyle