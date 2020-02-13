const LayoutStyle = () => (
  <style jsx="true">{`
    html {
      height: 100%;
    }

    body {
      min-height: 100%;
      display: grid;
      grid-template-rows: 85px auto 60px;
    }

    header nav {
      width: 100hw;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    nav span {
      font-family: var(--openSans600), sans-serif;
      color: var(--blue207);
      font-weight: 600;
    }

    main {
      font-family: var(--oxygen400), sans-serif;
      margin-bottom: 80px;
    }

    footer {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: var(--gray96);
      grid-area: footer;
      width: 100vw;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0.8em 0;
    }

    .tabs {
      display: flex;
      justify-content: space-around;
      font-weight: 700;
      margin: 20px 2px;
      -webkit-box-shadow: 10px 10px 10px -9px var(--gray67);
      -moz-box-shadow: 10px 10px 10px -9px var(--gray67);
      box-shadow: 10px 10px 10px -9px var(--gray67);
    }

    .tabs span[active] {
      border-bottom: 2px var(--blue201) solid;
      line-height: 1;
      /* text-decoration: underline blue solid; */
    }

    .contenedor {
      border: 1px solid;
      border-color: var(--gray67);
      border-radius: 15px;
      padding: 5px;
      -webkit-box-shadow: 10px 10px 10px -9px var(--gray67);
      -moz-box-shadow: 10px 10px 10px -9px var(--gray67);
      box-shadow: 10px 10px 10px -9px var(--gray67);
    }
  `}</style>
);

export default LayoutStyle;
