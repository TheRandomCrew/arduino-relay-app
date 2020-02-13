const LayoutStyle = () => (
  <style jsx="true">{`
    body {
      font-family: var(--oxygen400), sans-serif;
    }

    .titulo {
      font-family: var(--openSans600), sans-serif;
      font-weight: 600;
      color: var(--gray39);
      font-size: 13px;
      font-weight: bold;
      padding-left: 20px;
    }

    .info-text {
      font-weight: 900;
      font-size: 14px;
      margin: 10px;
      text-align: center;
    }

    .bar-container {
      display: box;
      margin: 15px;
    }

    progress {
      width: 100%;
    }

    progress[value] {
      -webkit-appearance: none;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      border: none;
      height: 15px;
    }

    progress[black][value]::-webkit-progress-value {
      background: black;
      border-radius: 15px;
    }

    progress[green][value]::-webkit-progress-value {
      background: var(--green84);
      border-radius: 15px;
    }
    progress::-webkit-progress-bar {
      background-color: var(--gray96);
      border-radius: 15px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    }

    .pay-parent {
      text-align: center;
      margin-bottom: 20px;
    }

    .pay-button {
      background-color: var(--blue207);
      color: white;
      text-shadow: 0 1px 0 var(--blue201);
      border-radius: 30px;
    }

    .pago {
      font-weight: bold;
      font-size: 20px;
      margin: 20px;
      text-align: center;
    }

    .estadoDeuda {
      color: var(--gray67);
      font-weight: 900;
      font-size: 12px;
      text-align: center;
    }
  `}</style>
);

export default LayoutStyle;
