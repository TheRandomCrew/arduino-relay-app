import LayoutStyle from './Style'

const Layout = ({ children, header }) => (
  <>
    <header>{header}</header>
    <main>{children}</main>
    <LayoutStyle />
  </>
)

export default Layout
