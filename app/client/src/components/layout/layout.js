import React from 'react';
import styles from './layout.module.scss';
import ScreenTracker from '../screen_tracker/screenTracker';


const Layout = props => {
    return (
        <div className={styles.layoutContainer}>
            <ScreenTracker />
            <div className={styles.pageContainer}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;