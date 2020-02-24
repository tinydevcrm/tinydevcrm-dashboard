// HTTP 404 (Not Found) page.

import React from 'react';

import PartialErrorPage from 'pages/PartialErrorPage/PartialErrorPage.jsx';


const _404 = () => (
    <PartialErrorPage
        errorCode={'404'}
        primaryText={'The page you requested cannot be found.'}
        secondaryText={'The URL may be misspelled or the page you are looking for is no longer available.'} />
);

export default _404;
