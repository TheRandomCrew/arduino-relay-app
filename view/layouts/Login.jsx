import React from 'react';
import Layout from '../components/Login/Layout';
import ActiveLink from '../containers/Link';

const Login = () => (
    <Layout header={
        <img src="/Logo/logo.png" alt="EnergyConnectSV" />
    }>
        <main>
            <div className="div-container">
            <form className="flex-column form-container">
                <h1 className="h1-title-login title-text">
                ACCESO
                </h1>
                <fieldset className="flex-column fieldset-login">
                <input placeholder="INGRESA TU CÓDIGO" className="input-login" />
                <input placeholder="INGRESA TU PAÍS" className="input-login" />
                <input placeholder="INGRESA TU NUMERO DE IDENTIDAD" className="input-login" />
                </fieldset>
                <ActiveLink href="/services" className="submit-button">
                    INGRESAR
                </ActiveLink>
            </form>
            </div>
        </main>
    </Layout>
);

export default Login;