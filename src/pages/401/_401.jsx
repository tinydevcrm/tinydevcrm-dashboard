// HTTP 401 (Unauthorized) page.

import React from 'react';

import PartialErrorPage from 'pages/PartialErrorPage/PartialErrorPage.jsx';


const _401 = () => (
    <PartialErrorPage
        errorCode={'401'}
        primaryText={'Oops.. You just found an error page..'}
        secondaryText={'We are sorry but our service is currently not available..'} />
);

export default _401;
