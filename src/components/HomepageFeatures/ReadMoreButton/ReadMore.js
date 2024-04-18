// ReadMoreButton.js

import React from 'react';
import styles from './styles.module.css';

const ReadMoreButton = ({ href }) => {
    return (
        <div className={`${styles.myButtons} ${styles.myButton}`}>
            <a href={href}>
                <svg>
                    <rect className={styles.myRect} x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>
                Click to read
            </a>
        </div>
    );
};

export default ReadMoreButton;
