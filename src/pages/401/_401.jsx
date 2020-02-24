// HTTP 401 (Unauthorized) page.

import React from 'react';

import PartialErrorPage from 'pages/PartialErrorPage/PartialErrorPage.jsx';


const _401 = () => (
    <PartialErrorPage
        errorCode={'401'}
        primaryText={'You are not authorized to access this page.'}
        secondaryText={'Please log in or contact the site administrator.'} />
);

export default _401;
