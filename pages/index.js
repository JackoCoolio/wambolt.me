import Head from 'next/head'

import Banner from '../public/banner';
import MainPage from '../public/main-page';

import styles from '../styles/home.module.scss';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Jackson Wambolt</title>
            </Head>
            <Banner buttons={[
                {
                    text: 'About',
                    link: '/'
                }
            ]}/>
            <MainPage/>
        </div >
    )
}
