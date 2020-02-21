// HTTP 401 (Unauthorized) page.

import React from 'react';
import {
    Row,
    Col
} from 'antd';
import classnames from 'classnames';

import 'antd/dist/antd.css';
import styles from './_401.module.scss';


const DemoBox = (props) => (
    <p className={`height-${props.value}`}>
        {props.children}
    </p>
);

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

const _401 = () => (
    <div className={styles.container}>
        <Row type="flex" align="middle">
            <Col
                xs={20}
                sm={16}
                md={14}
                lg={12}
                xl={10}
                xxl={8}
                className={columnWithResponsiveOffsets}>
                col-6 with custom responsive offsets
            </Col>
        </Row>
    </div>
);

export default _401;
