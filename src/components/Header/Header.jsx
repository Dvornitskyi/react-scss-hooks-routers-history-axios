import React from "react"
import logoImage from '../../assets/img/logo.svg'
import { menu } from './menu'
import styles from './Header.module.scss'
import { Link, useHistory } from "react-router-dom"

const Header = () => {
    const history = useHistory()
    return <div className={styles.header}>
        <div className={styles.logo}>
            <Link to={'/'}><img src={logoImage} alt="logoImage" height='35'/></Link>
        </div>
        <div className={styles.wrapper}>
            <ul className={styles.menu}>
                {menu.map((item, idx) => (
                    <li key={`menu item ${idx}`}>
                        <Link to={item.link}>{item.title}</Link>
                    </li>
                ))}
                
            </ul>
            <div className={styles.buttons}>
                <button className={styles['login-button']} onClick={() => history.replace('/about')}>Login</button>
                <button className={styles['sign-up-button']}>Sign up</button>
            </div>
        </div>
    </div>
}

export default Header
