import Head from 'next/head'

import Banner from '../public/banner';

import styles from '../styles/home.module.scss';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Jackson Wambolt | Home</title>
            </Head>
            <Banner></Banner>
        </div >
    )
}
