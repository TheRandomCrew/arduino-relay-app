import React from 'react'
import { withCookie } from 'next-cookie'
import Layout from '../../components/Home/Layout'
import ActiveLink from '../Link'

const Dashboard = ({ children, links, cookie }) => {
  return (
    <Layout
      links={
        links &&
        links.map((section, id) => (
          <div key={id}>
            <ActiveLink href={section.href}>
              <img
                src={section.icon}
                id={section.id}
                alt={section.description}
              />
            </ActiveLink>
          </div>
        ))
      }
    >
      <header>
        <h1 hidden>Welcome to Energy Connect SV!</h1>
        <nav>
          <span className="m-20">Hola, {cookie.get('name') || 'User'}</span>
          <a href="/profile">
            <img src="/Menu/user.png" alt="EnergyConnectSV" />
          </a>
        </nav>
      </header>
      {children}
    </Layout>
  )
}

export default withCookie(Dashboard)
