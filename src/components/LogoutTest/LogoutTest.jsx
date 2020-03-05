// Test for logout.

import React from 'react';
import {
    Button
} from 'antd';

import axiosInstance from 'api/axios.js';
import DashboardBase from 'components/DashboardBase/DashboardBase.jsx';


class LogoutTest extends React.Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        console.log('hi');
    }

    render() {
        return (
            <DashboardBase>
                <Button onClick={this.handleLogout}>
                    Logout
                </Button>
            </DashboardBase>
        )
    }
}


export default LogoutTest;
