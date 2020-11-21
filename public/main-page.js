import styles from '../styles/main-page.module.scss';

import React from 'react';

import Typing from '../public/typing';
import Cursor from '../public/cursor';

class MainPage extends React.Component {

    render() {

        return (

            <div id={styles.main}>

                <div className={styles.section}>
                    <h1>About Me</h1>
                    <div style={{ fontFamily: 'Fira Code', textAlign: 'center', fontSize: '18px' }}>
                        I am a<Typing text={[' Programmer.', 'n Artist.', ' Musician.']} cycle='true' delay='2000' /><Cursor />
                    </div>

                    <div className={styles.sectionBody}>
                        <span>Hi! My name is Jackson, and I'm currently studying at the University of Wisconsin - Madison, where I plan to major in Computer Science with a certificate in Mathematics.
                        Programming has been a passion of mine ever since elementary school, when I was first introduced to Scratch.
                    </span>
                    </div>
                </div>
            </div>

        );

    }

}

export default MainPage;