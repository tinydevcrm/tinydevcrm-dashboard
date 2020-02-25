// Login page.

import React from 'react';
import {
    Link
} from 'react-router-dom';

import PageCenterWrapper from 'components/PageCenterWrapper/PageCenterWrapper.jsx';
import LoginForm from 'components/LoginForm/LoginForm.jsx';

import styles from './Login.module.scss';


const Login = () => (
    <div className={styles.background}>
        <PageCenterWrapper>
            <div className={styles.center}>
                <LoginForm />
                <div className={styles.text}>
                    Don't have an account? &nbsp;
                    <Link to="/signup">
                        Sign up
                    </Link>
                </div>
            </div>
        </PageCenterWrapper>
    </div>
)


export default Login;
