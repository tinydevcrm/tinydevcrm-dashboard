// HTTP 401 (Unauthorized) page.

import React from 'react';

import _ErrorPage from 'pages/_ErrorPage/_ErrorPage.jsx';


const _401 = () => (
    <_ErrorPage
        errorCode={'401'}
        primaryText={'Oops.. You just found an error page..'}
        secondaryText={'We are sorry but our service is currently not available..'} />
);

export default _401;
