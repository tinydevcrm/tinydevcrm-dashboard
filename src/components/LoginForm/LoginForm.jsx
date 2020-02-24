// Card with form to enable human user-agent to log into TinyDevCRM.

import React from 'react';
import {
    Button
} from 'antd';
import classnames from 'classnames';

import 'antd/dist/antd.css';
import styles from './LoginForm.module.scss';


const passwordStyling = classnames(
    styles.formInput,
    styles.formPasswordInput
)

class LoginForm extends React.Component {
    render() {
        return (
            <form className={styles.container}>
                <label className={styles.formTitle}>
                    Log In
                </label>

                <label className={styles.formInputLabel}>
                    Email
                </label>
                <input type="email" className={styles.formInput} />

                <label className={styles.formInputLabel}>
                    Password
                </label>
                <input type="password" className={passwordStyling} />

                <div className={styles.centered}>
                    <Button
                        htmlType={"submit"}
                        type="primary"
                        className={styles.submitButton}
                        size={"large"}>
                        Log In
                    </Button>
                </div>
            </form>
        )
    }
}


export default LoginForm;
