import styles from './nav.module.scss'

export const Nav = ({children}) => {
    return (
        <nav className={styles.nav}>
            {children}
        </nav>
    )
}