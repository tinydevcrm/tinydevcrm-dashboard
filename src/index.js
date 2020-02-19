import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter
} from 'react-router-dom';

import './index.scss';

import App from './core/App/App.jsx';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ),
    document.getElementById('root')
);
