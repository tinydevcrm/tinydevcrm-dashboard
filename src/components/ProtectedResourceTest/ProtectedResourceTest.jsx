// Test for front-end to protect resources using JWT tokens in localStorage.

import React from 'react';

import axiosInstance from 'api/axios.js';
import DashboardBase from 'components/DashboardBase/DashboardBase.jsx';


class ProtectedResourceTest extends React.Component {
    render() {
        return (
            <DashboardBase>
                <h1>hello</h1>
            </DashboardBase>
        )
    }
}


export default ProtectedResourceTest;
