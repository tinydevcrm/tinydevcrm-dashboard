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
            <div>hi</div>
        )
    }
}


export default LoginForm;
