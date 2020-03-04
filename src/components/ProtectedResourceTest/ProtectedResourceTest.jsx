// Test for front-end to protect resources using JWT tokens in localStorage.

import React from 'react';

import axiosInstance from 'api/axios.js';
import DashboardBase from 'components/DashboardBase/DashboardBase.jsx';


class ProtectedResourceTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ''
        };

        this.getMessage = this.getMessage.bind(this);
    }

    async getMessage() {
        try {
            const response = await axiosInstance.get('/hello/');
            const message = response.data.hello;
            this.setState({
                message: message,
            });
            return response.data;
        } catch(error) {
            console.log('Error: ', JSON.stringify(error, null, 4));
            throw error;
        }
    }

    componentDidMount() {
        const messageData1 = this.getMessage();
        console.log('messageData1: ', JSON.stringify(messageData1, null, 4));
    }

    render() {
        return (
            <DashboardBase>
                <h1>{this.state.message}</h1>
            </DashboardBase>
        )
    }
}


export default ProtectedResourceTest;
