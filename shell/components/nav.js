import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => (
  <div className={styles.nav}>
    <Link href="/remoteApp1">Load RemoteApp1</Link>
    <Link href="/">Home</Link>
    <Link href="/remoteApp2">Load RemoteApp2</Link>
  </div>
)

export default Nav
