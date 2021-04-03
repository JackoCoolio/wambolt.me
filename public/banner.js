import React from 'react';
import styles from '../styles/banner.module.scss';
import containerStyles from '../styles/container.module.scss';

import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'

class Banner extends React.Component {

    render() {

        let array = [];
        for (let button of this.props.buttons) {
            array.push(
                <li key={button.text} className={styles.bannerElement}>

                    <div className={`${styles.bannerLink}`}>
                        {
                            button.link ?
                            <Link href={button.link}><h1>{button.text}</h1></Link>
                            :
                            <ScrollLink activeClass="test" to={button.section} smooth="easeInOutQuad" duration={1000} containerId={containerStyles.main}><h1>{button.text}</h1></ScrollLink>
                        }
                    </div>
                </li>
            );
        }

        return (
            <div id={styles.banner}>
                <ul id={styles.bannerMenu}>
                    <li className={styles.bannerElement}>
                        <div id={styles.portrait}></div>
                    </li>
                    <li className={styles.bannerElement}>
                        <h1 style={{fontFamily: 'Lemon Milk Bold'}}>{process.env.NODE_ENV === 'production' ? 'Jackson Wambolt' : 'Development'}</h1>
                    </li>
                    {array}
                </ul>
            </div>
        );
    }

}

export default Banner;