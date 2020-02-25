// Signup page.

import React from 'react';
import {
    Link
} from 'react-router-dom';

import PageCenterWrapper from 'components/PageCenterWrapper/PageCenterWrapper.jsx';
import SignupForm from 'components/SignupForm/SignupForm.jsx';

import styles from './Signup.module.scss';


const Signup = () => (
    <div className={styles.background}>
        <PageCenterWrapper>
            {/* This <div> acts as a shim to center an element with a max-width. */}
            <div className={styles.center}>
                <SignupForm />
                <div className={styles.text}>
                    Already have an account? &nbsp;
                    <Link to="/login">
                        Log in
                    </Link>
                </div>
            </div>
        </PageCenterWrapper>
    </div>
)


export default Signup;
