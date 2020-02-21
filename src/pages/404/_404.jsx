// HTTP 404 (Not Found) page.

import React from 'react';

import _ErrorPage from 'pages/_ErrorPage/_ErrorPage.jsx';


const _404 = () => (
    <_ErrorPage
        errorCode={'404'}
        primaryText={'Oops.. You just found an error page..'}
        secondaryText={'We are sorry but our service is currently not available..'} />
);

export default _404;
