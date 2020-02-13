import React from 'react';
import Layout from '../components/Login/Layout';
import LoginForm from '../containers/LoginForm';

const Login = () => (
    <Layout header={
        <img src="/Logo/logo.png" alt="EnergyConnectSV" />
    }>
        <main>
            <div className="div-container">
                <LoginForm />
            </div>
        </main>
    </Layout>
);

export default Login;