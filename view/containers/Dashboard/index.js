import React from 'react'
import Layout from '../../components/Home/Layout'
import ActiveLink from '../Link'

const Dashboard = ({ children, links }) => (
  <Layout
    links={
      links &&
      links.map((section, id) => (
        <div key={id}>
          <ActiveLink href={section.href}>
            <img src={section.icon} id={section.id} alt={section.description} />
          </ActiveLink>
        </div>
      ))
    }
  >
    {children}
  </Layout>
)

export default Dashboard
