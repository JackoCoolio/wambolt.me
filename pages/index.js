import Head from 'next/head'

import Banner from '../public/banner';
import { Container, Section } from '../public/container';
import Typing from '../public/typing';
import Link from 'next/link';
import Cursor from '../public/cursor';

import styles from '../styles/home.module.scss';

export default function Home() {
    return (
        <>
            <Head>
                <title>Jackson Wambolt</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="Hi!" />
                <meta name="author" content="Jackson Wambolt" />
            </Head>
            <Banner buttons={[
                {
                    text: 'About Me',
                    link: '/'
                },
                {
                    text: 'Projects',
                    link: '/'
                }
            ]} />
            <Container>
                <Section title="About Me">
                    <div className={styles.gallery}>
                        <div className={styles.galleryColumn}>
                            <div className={styles.galleryElement}>
                                <div id={styles.aboutMePicture} />
                            </div>
                        </div>
                        <div className={styles.galleryColumn}>
                            <div className={styles.galleryElement}>
                                <div style={{ fontFamily: 'Fira Code', textAlign: 'center', fontSize: '18px' }}>
                                    I am a<Typing text={[' Programmer.', 'n Artist.', ' Musician.']} cycle='true' delay='2000' /><Cursor />
                                </div>

                                <div id={styles.aboutMeBody}>
                                    <p>
                                        Hi! My name is Jackson, and I'm currently studying at the University of Wisconsin - Madison,
                                        where I plan to major in Computer Science with a certificate in Mathematics.
                                        Programming has been a passion of mine ever since elementary school, and I've followed that passion for the past
                                        seven years.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </Section>
                <Section title="Projects">
                    <div className={styles.gallery}>
                        <div className={styles.galleryColumn}>
                            <div className={`${styles.galleryElement} ${styles.projectElement}`}>
                                <h2 className={styles.galleryTitle}><Link href="https://github.com/JackoCoolio/harmony_v2" passHref><a>Harmony Engine</a></Link> (Jan 2020 - Present)</h2>
                                <h3 className={styles.gallerySubtitle}>An OpenGL game engine written in C++.</h3>
                                <p>After three (four?) unsuccessful iterations of this project, I've landed on one that I think is sustainable.
                                Unimportant boilerplate and technical code is abstracted away from the developer, so they only have to worry
                                about making a good game.
                                </p>
                            </div>
                            <div className={`${styles.galleryElement} ${styles.projectElement}`}>
                                <h2 className={styles.galleryTitle}><Link href="/" passHref><a>Starboard</a></Link> (Feb 2020)</h2>
                                <h3 className={styles.gallerySubtitle}>A Node.js Discord bot.</h3>
                                <p>Reacting to a message with a star emoji puts the message in a designated "starboard" channel. I'm currently running this bot on a
                                Raspberry Pi for a personal Discord server.
                                </p>
                            </div>
                        </div>
                        <div className={styles.galleryColumn}>
                            <div className={`${styles.galleryElement} ${styles.projectElement}`}>
                                <h2 className={styles.galleryTitle}><Link href="https://github.com/JackoCoolio/wambolt.me" passHref><a>Personal Website</a></Link> (Nov 2020 - Present)</h2>
                                <h3 className={styles.gallerySubtitle}>A website built with Next.js.</h3>
                                <p>I finally bit the bullet and decided to learn web development.</p>
                            </div>
                        </div>
                    </div>
                </Section>
                <div id={styles.footer}>
                    <h1>© 2020, Jackson Wambolt</h1>
                </div>
            </Container>
        </>
    )
}
