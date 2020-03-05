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

    async handleLogout() {
        try {
            const response = await axiosInstance.post(
                '/blacklist/',
                {
                    'refresh_token': localStorage.getItem('refresh_token')
                }
            );
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            axiosInstance.defaults.headers['Authorization'] = null;
            return response
        } catch (error) {
            console.log(error);
        }
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
