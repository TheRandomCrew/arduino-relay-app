const LayoutStyle = () => (
  <style jsx="true">
    {`
      main {
        font-family: var(--oxygen400), sans-serif;
      }

      .form-container {
        margin: 2.5em;
        align-items: center;
      }

      .fieldset-login {
        width: 100%;
      }
      .h1-title-login {
        color: var(--violet279);
      }
      .input-login {
        width: 100%;
        background-color: var(--gray73);
        border: none;
        border-radius: 15px;
        padding: 0.3em 1em;
        margin: 1.5em 0;
      }
      .submit-button {
        width: 100%;
        background-color: var(--violet279);
        box-shadow: 0 1px 8px 1px darkgrey;
        color: white;
        border: none;
        border-radius: 15px;
        padding: 0.2em 5.3em;
        text-align: center;
      }
      .div-container {
        margin-top: 20vh;
      }
      header {
        width: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 15vh;
        background: var(--blue212);
        box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
        border-radius: 0 0 85% 85% / 95%;
        @media (min-width: 768px) {
          border-radius: 0;
        }
      }

      header img {
        height: 50px;
      }

      /*:::::::::INPUT placeholder::::::::::*/
      ::-webkit-input-placeholder {
        color: var(--gray39);
        font-weight: 700;
        font-size: 1em;
      }

      :-moz-placeholder {
        /* Firefox 18- */
        color: var(--gray39);
        font-weight: 700;
        font-size: 1em;
      }

      ::-moz-placeholder {
        /* Firefox 19+ */
        color: var(--gray39);
        font-weight: 700;
        font-size: 1em;
      }

      :-ms-input-placeholder {
        color: var(--gray39);
        font-weight: 700;
        font-size: 1em;
      }
      /*:::::::::FIN INPUT placeholder:::::::::*/
    `}
  </style>
);

export default LayoutStyle;
