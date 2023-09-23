import React from 'react';
import styles from '../styles/Loading.module.css';

// Loading component that displays a loading spinner
const Loading = () => {
    return (
        <div className={styles.loading__container}>
            {/* Display loading spinner */}
            <div className={styles.loading__spinner}></div>
            {/* Display loading text */}
            <div>Loading...</div>
        </div>
    );
};

export default Loading;
