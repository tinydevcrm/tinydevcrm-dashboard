// Card with form to enable human user-agent to sign up for TinyDevCRM.

import React from 'react';
import {
    Button
} from 'antd';
import classnames from 'classnames';

import 'antd/dist/antd.css';
import styles from './SignupForm.module.scss';


const passwordStyling = classnames(
    styles.formInput,
    styles.formPasswordInput
)

class SignupForm extends React.Component {
    render() {
        return (
            <form className={styles.container}>
                <label className={styles.formTitle}>
                    Sign Up
                </label>

                <label className={styles.formInputLabel}>
                    Email
                </label>
                <input type="email" className={styles.formInput} />

                <label className={styles.formInputLabel}>
                    Full Name
                </label>
                <input type="text" className={styles.formInput} />

                <label className={styles.formInputLabel}>
                    Password
                </label>
                <input type="password" className={passwordStyling} />

                <label className={styles.formInputLabel}>
                    Confirm Password
                </label>
                <input type="password" className={passwordStyling} />

                <div className={styles.centered}>
                    <input type="submit" value="Sign Up" className={styles.submitButton}></input>
                </div>
            </form>
        )
    }
}

export default SignupForm;
