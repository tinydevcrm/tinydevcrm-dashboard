// HTTP 401 (Unauthorized) page.

import React from 'react';
import {
    Row,
    Col
} from 'antd';

import styles from './_401.module.scss';

const DemoBox = (props) => (
    <p className={`height-${props.value}`}>
        {props.children}
    </p>
);


const _401 = () => (
    <div className={styles.container}>
        <p className={styles.tag}>Align Center</p>
        <Row type="flex" justify="space-around" align="middle" className={styles.row}>
            <Col span={4} className={styles.col}>
                <DemoBox value={100}>
                    col-4
                </DemoBox>
            </Col>
        </Row>
    </div>
);

export default _401;
