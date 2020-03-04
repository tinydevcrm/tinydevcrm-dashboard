// This component manages all client-side routing for 'tinydevcrm-dashboard'.
//
// I'm not sure whether this is necessarily the same as <App />. If it is, then
// this component duplicates functionality. If it doesn't, then this component
// successfully serves to separate concerns.
//
// According to this blog post
// (https://blog.pshrmn.com/simple-react-router-v4-tutorial/), current "best
// practice" is to separate out <App /> and <RouteManager /> concerns.

import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import DashboardBase from 'components/DashboardBase/DashboardBase.jsx';
import _401 from 'pages/401/_401.jsx';
import _404 from 'pages/404/_404.jsx';
import Signup from 'pages/Signup/Signup.jsx';
import DefaultLogo from 'components/DefaultLogo/DefaultLogo.jsx';
import Login from 'pages/Login/Login.jsx';

import ProtectedResourceTest from 'components/ProtectedResourceTest/ProtectedResourceTest.jsx';

const RouteManager = () => (
    <Switch>
        {/* TODO: Redirect from base route should be done based on authentication. If the user is not logged in, they should be redirected to the login page. If the user is logged in, they should be redirected to the dashboard. */}
        <Route exact path='/'>
            <Redirect to="/login" />
        </Route>
        <Route exact path='/logo' component={DefaultLogo} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={DashboardBase} />
        <Route exact path='/401' component={_401} />
        <Route exact path='/404' component={_404} />
        <Route exact path='/dummy' component={ProtectedResourceTest} />
    </Switch>
);

export default RouteManager;
