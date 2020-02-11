const LayoutStyle = () => <style jsx="true">{`
.body-help {
    margin: 10px auto;
    padding: 30px;
    font-size: small;
  }
  
  .body-help p {
    color: gray;
    margin: 10px auto;
  }
  
  .header-help {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .header-help > h2 {
    color: var(--blue207);
  }
  
  .header-help > img {
    width: 60px;
    filter: invert(52%) sepia(33%) saturate(4902%) hue-rotate(184deg)
      brightness(97%) contrast(95%);
  }
  
  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: white;
    border: 2px black solid;
    border-radius: 10px;
    padding: 3px;
  }
  
  .select-css::-ms-expand {
    display: none;
  }
  .select-css:hover {
    border-color: var(--gray53);
  }
  .select-css:focus {
    border-color: var(--gray73);
    box-shadow: 0 0 1px 3px var(--blue212);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: var(--dark13);
    outline: none;
  }
  .select-css option {
    font-weight: normal;
  }
  
  textarea {
    padding: 5px;
    border-radius: 10px;
    min-height: 75px;
    resize: none;
    border: 2px rgb(0, 0, 0) solid;
  }
  
  .send-button {
    display: flex;
  }
  
  .send-button > input[type='submit'] {
    background-color: var(--blue207);
    color: white;
    width: 70%;
    margin: 10px auto;
  }
  
  form fieldset {
    display: flex;
  }
  
`}</style>

export default LayoutStyle