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
    Route
} from 'react-router-dom';

import DashboardBase from 'components/DashboardBase/DashboardBase.jsx';
import SignupForm from 'components/SignupForm/SignupForm.jsx';
import _401 from 'pages/401/_401.jsx';
import _404 from 'pages/404/_404.jsx';


const RouteManager = () => (
    <Switch>
        <Route exact path='/' component={SignupForm} />
        <Route exact path='/dashboard' component={DashboardBase} />
        <Route exact path='/401' component={_401} />
        <Route exact path='/404' component={_404} />
    </Switch>
);

export default RouteManager;
