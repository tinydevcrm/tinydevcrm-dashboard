// Card with form to enable human user-agent to log into TinyDevCRM.

import React from 'react';
import {
    Button
} from 'antd';
import classnames from 'classnames';

import axiosInstance from 'api/axios.js';

import 'antd/dist/antd.css';
import styles from './LoginForm.module.scss';


const passwordStyling = classnames(
    styles.formInput,
    styles.formPasswordInput
)

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await axiosInstance.post(
                '/v1/auth/tokens/obtain/',
                {
                    'primary_email': this.state.email,
                    'password': this.state.password
                }
            );
            axiosInstance.defaults.headers['Authorization'] = 'JWT ' + response.data.access;
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);

            return response;
        } catch (error) {
            throw error;
        }
    }

    render() {
        return (
            <form
                className={styles.container}
                onSubmit={this.handleSubmit}>
                <label className={styles.formTitle}>
                    Log In
                </label>

                <label className={styles.formInputLabel}>
                    Email
                </label>
                <input
                    name="email"
                    type="email"
                    className={styles.formInput}
                    value={this.state.email}
                    onChange={this.handleChange} />

                <label className={styles.formInputLabel}>
                    Password
                </label>
                <input
                    name="password"
                    type="password"
                    className={passwordStyling}
                    value={this.state.password}
                    onChange={this.handleChange} />

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
