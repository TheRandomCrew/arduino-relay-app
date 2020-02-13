import React, { Component } from "react";
import Layout from "../components/Services/Layout";
import ServicesBody from "../components/Services/ServicesBody";
import BillingBody from "../components/Billing/BillingBody";

class Services extends Component {
  constructor() {
    super();
    this.state = {
      billingTab: false,
      serviceTab: true
    };
  }

  handleClickBilling = () => {
    this.setState({
      billingTab: false,
      serviceTab: true
    });
  };

  handleClickbillingTab = () => {
    this.setState({
      billingTab: true,
      serviceTab: false
    });
  };

  render() {
    let { serviceTab, billingTab } = this.state;
    let body;
    if (serviceTab) {
      body = <ServicesBody />;
    } else {
      body = <BillingBody />;
    }

    return (
      <Layout>
        <main>
          <div id="home">
            <div className="tabs">
              <span
                id="services-tabber"
                onClick={this.handleClickBilling}
                {...(serviceTab && { active: "true" })} //this is equals a: if(serviceTab) active="true"
              >
                Servicios
              </span>
              <span
                id="billing-tabber"
                onClick={this.handleClickbillingTab}
                {...(billingTab && { active: "true" })}
              >
                Facturaciones
              </span>
            </div>
            {body}
          </div>
        </main>
      </Layout>
    );
  }
}

export default Services;
