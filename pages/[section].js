import React from 'react'
import { withRouter } from 'next/router'
import Dashboard from '../view/containers/Dashboard'
import Billing from '../view/layouts/Billing'
import Services from '../view/layouts/Services'
import Help from '../view/layouts/Help'
import Payment from '../view/layouts/Payment'
import Profile from '../view/layouts/Profile'
import Settings from '../view/layouts/Settings'

// https://nextjs.org/docs/api-reference/next/router
const home = ({ router }) => {
    const {section} = router.query
    return (
        <Dashboard
        links = {
                [
                    {
                        href: '/services',
                        icon: '/Menu/home.png',
                        id: 'home-footer-button',
                        description: 'Home'
                    },
                    {
                        href: '/billing',
                        icon: '/Menu/payment.png',
                        id: 'billing-footer-button',
                        description: 'Billing'
                    },
                    {
                        href: '/help',
                        icon: '/Menu/help.png',
                        id: 'help-footer-button',
                        description: 'Help'
                    },
                    {
                        href: '/settings',
                        icon: '/Menu/settings.png',
                        id: 'config-footer-button',
                        description: 'Settings'
                    }
                ]
        }
        >
            {
                {
                    billing: <Billing />,
                    help: <Help/>,
                    payment: <Payment/>,
                    profile: <Profile/>,
                    services: <Services/>,
                    settings: <Settings/>
                }[section]
            }
        </Dashboard>
    )
}

export default withRouter(home)
