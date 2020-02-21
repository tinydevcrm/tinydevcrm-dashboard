// Partial (generic) error page (mostly for HTTP errors).
//
// Props include:
// - errorCode
// - primaryText
// - secondaryText

import React from 'react';
import {
    Button,
    Icon
} from 'antd';

import PageCenterWrapper from 'components/PageCenterWrapper/PageCenterWrapper.jsx';

import 'antd/dist/antd.css';
import styles from './PartialErrorPage.module.scss';


const PartialErrorPage = (props) => (
    <PageCenterWrapper>
        <div className={styles.errorCode}>
            {props.errorCode}
        </div>
        <div className={styles.primaryText}>
            {props.primaryText}
        </div>
        <div className={styles.secondaryText}>
            {props.secondaryText}
        </div>
        <Button type="primary" size={"large"}>
            <Icon type="home" />
            Home
        </Button>
    </PageCenterWrapper>
);

export default PartialErrorPage;
