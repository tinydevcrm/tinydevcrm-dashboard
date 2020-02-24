// Login page.

import React from 'react';

import PageCenterWrapper from 'components/PageCenterWrapper/PageCenterWrapper.jsx';
import LoginForm from 'components/LoginForm/LoginForm.jsx';

import styles from './Login.module.scss';


const Login = () => (
    <div className={styles.background}>
        <PageCenterWrapper>
            <div className={styles.center}>
                <LoginForm />
            </div>
        </PageCenterWrapper>
    </div>
)


export default Login;
