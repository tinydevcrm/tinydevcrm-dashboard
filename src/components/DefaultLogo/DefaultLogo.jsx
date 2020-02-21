// Default logo.
//
// Since I can't afford to create a custom logo, a text-based logo will have to
// do for now.

import React from 'react';

import styles from './DefaultLogo.module.scss';


const DefaultLogo = () => (
    <div className={styles.defaultLogo}>
        TinyDevCRM
    </div>
);


export default DefaultLogo;
