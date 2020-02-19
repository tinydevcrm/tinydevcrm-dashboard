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

// import SignupForm from 'components/SignupForm/SignupForm.jsx';

const RouteManager = () => (
    <Switch>
        <Route exact path='/' component={Dummy} />
    </Switch>
);

const Dummy = () => (
    <h1>hi</h1>
);


export default RouteManager;
