// Card with form to enable human user-agent to sign up for TinyDevCRM.

import React from 'react';
import {
    Button
} from 'antd';
import classnames from 'classnames';

import 'antd/dist/antd.css';
import styles from './SignupForm.module.scss';
import axiosInstance from 'api/axios';


const passwordStyling = classnames(
    styles.formInput,
    styles.formPasswordInput
)

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            fullName: "",
            password: "",
            passwordConfirm: ""
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
                '/user/create/',
                {
                    // TODO: Change username to 'fullName' in the backend, in
                    // order to match fields properly.
                    username: this.state.fullName,
                    email: this.state.email,
                    password: this.state.password
                }
            );
            return response;
        } catch (error) {
            console.log(error.stack);
        }
    }

    render() {
        return (
            <form
                className={styles.container}
                onSubmit={this.handleSubmit}>
                <label className={styles.formTitle}>
                    Sign Up
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
                    Full Name
                </label>
                <input
                    name="fullName"
                    type="text"
                    className={styles.formInput}
                    value={this.state.fullName}
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

                <label className={styles.formInputLabel}>
                    Confirm Password
                </label>
                <input
                    name="passwordConfirm"
                    type="password"
                    className={passwordStyling}
                    value={this.state.passwordConfirm}
                    onChange={this.handleChange} />

                <div className={styles.centered}>
                    <Button
                        htmlType={"submit"}
                        type="primary"
                        className={styles.submitButton}
                        size={"large"}>
                            Sign Up
                    </Button>
                </div>
            </form>
        )
    }
}

export default SignupForm;
