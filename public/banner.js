import React from 'react';
import styles from '../styles/banner.module.scss';

class Banner extends React.Component {

    render() {
        return (
            <div id={styles.banner}>
                <ul id={styles.bannerMenu}>
                    <li className={styles.bannerElement}>
                        <div id={styles.portrait}></div>
                    </li>
                    <li className={styles.bannerElement}>
                        <h1>Jackson Wambolt</h1>
                    </li>
                    <li className={`${styles.bannerElement} ${styles.bannerDivider}`}/>
                </ul>
            </div>
        );
    }

}

export default Banner;