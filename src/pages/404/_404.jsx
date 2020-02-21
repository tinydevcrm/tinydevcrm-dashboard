// HTTP 404 (Not Found) page.

import React from 'react';

import PartialErrorPage from 'pages/PartialErrorPage/PartialErrorPage.jsx';


const _404 = () => (
    <PartialErrorPage
        errorCode={'404'}
        primaryText={'Oops.. You just found an error page..'}
        secondaryText={'We are sorry but our service is currently not available..'} />
);

export default _404;
