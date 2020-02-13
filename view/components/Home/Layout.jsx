import LayoutStyle from './Style'

const Layout = ({ links, children }) => (
  <>
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
