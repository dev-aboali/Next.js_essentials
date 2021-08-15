import Link from 'next/Link'
import styles  from '../styles/Nav.module.css'


const Nav = () => {
    return (
        <div className={styles.nav}>
            <ul>
                <li>
                    <Link href='/' id="home">Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
