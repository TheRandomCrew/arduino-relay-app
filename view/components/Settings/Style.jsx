const LayoutStyle = () => <style jsx="true">{`
  .connect {
    width: 100%;
    margin: 5px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  fieldset {
    margin: 20px 5px;
  }
  
  label {
    display: flex;
    justify-content: space-between;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 28px;
  }
  
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--gray96);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  
  .slider:before {
    position: absolute;
    content: '';
    height: 20px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: var(--blue207);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  
  input:checked + .slider {
    background-color: white;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px white;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
    border: 1px solid var(--gray39);
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
  
  .radio-toolbar {
    display: inline-block;
    justify-content: center;
  }
  
  .radio-toolbar input[type='radio'] {
    opacity: 0;
    position: fixed;
    width: 0;
  }
  
  .radio-toolbar label {
    display: inline-block;
    background-color: #ddd;
    padding: 10px 20px;
    border: 2px solid var(--gray27);
    border-radius: 4px;
  }
  /* https://markheath.net/post/customize-radio-button-css */
  .radio-toolbar input[type='radio']:checked + label {
    background-color: var(--blue209);
    border-color: var(--blue207);
  }
  
  .radio-toolbar input[type='radio']:focus + label {
    border: 2px dashed var(--gray27);
  }
  
  .radio-toolbar label:hover {
    background-color: var(--green120);
  }
  
  .connect button {
    color: white;
  }

  .connect img {
    width: 20%;
  }
  
  .connect span {
    color: var(--gray39);
    font-size: 13px;
    font-weight: bold;
    padding-left: 20px;
  }

  .connect .clr-red{
    background-color: red;
  }

  .connect .clr-green {
    background-color: green;
  }
  
`}</style>

export default LayoutStyle