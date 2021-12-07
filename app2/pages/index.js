import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Component2 from "../components/component2";


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Microfrontend Demo App 2</title>
            </Head>
            <Component2/>
        </div>
    )
}
