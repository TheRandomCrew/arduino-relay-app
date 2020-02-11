import LayoutStyle from './Style'

const Layout = ({ links, children }) => (
  <>
    <header>
      <h1 hidden>Welcome to Energy Connect SV!</h1>
      <nav>
        <span className="m-20">Hola, Julio</span>
        <a href="/profile">
          <img src="/Menu/user.png" alt="EnergyConnectSV" />
        </a>
      </nav>
    </header>
    {children}
    <footer>
      {
        links && links
      }
    </footer>
    <LayoutStyle />
  </>
)

export default Layout
