import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Component1 from "../components/component1";


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Microfrontend App 1</title>
            </Head>
            <Component1/>
        </div>
    )
}
