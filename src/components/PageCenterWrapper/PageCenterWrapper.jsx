// This "page center wrapper" is a "wrapper" (higher order component) to center
// some content both horizontally and vertically in a given viewport.
//
// This involves using 'Row' and 'Col' components of the Ant Design library, and
// applying custom offsets for mobile responsiveness.
//
// This component may be used by error and authentication pages / workflows.

import React from 'react';
import {
    Row,
    Col
} from 'antd';
import classnames from 'classnames';

import 'antd/dist/antd.css';
import styles from './PageCenterWrapper.module.scss';


// There's no way to add mobile responsiveness with offset, even though the
// direct classes exist. If you add an offset with the offset prop, the offset
// will remain constant throughout different mobile experiences. Therefore,
// combine classes for React.js components using the 'classnames' package.
// Relevant Stack Overflow post: https://stackoverflow.com/a/38383564/1497211
const columnWithResponsiveOffsets = classnames(
    styles.col,
    'ant-col-xs-offset-2',
    'ant-col-sm-offset-4',
    'ant-col-md-offset-5',
    'ant-col-lg-offset-6',
    'ant-col-xl-offset-7',
    'ant-col-xxl-offset-8'
);

const PageCenterWrapper = (props) => (
    <div className={styles.container}>
        <Row>
            <Col
                xs={20}
                sm={16}
                md={14}
                lg={12}
                xl={10}
                xxl={8}
                className={columnWithResponsiveOffsets}>
                    {props.children}
            </Col>
        </Row>
    </div>
)


export default PageCenterWrapper;
