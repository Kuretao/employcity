import {Logo} from "../ui/Logotype/Logo.jsx";
import {Nav} from "../ui/nav/nav.jsx";
import styles from "./header.module.scss"

export const Header = () => {

    return (
        <header className={styles.header}>
            <Logo/>

            <Nav>
                <a href="#" className={styles["header-link"]}>бизнес</a>
                <a href="#" className={styles["header-link"]}>о нас</a>
                <a href="#" className={styles["header-link"]}>цены</a>
                <a href="#" className={styles["header-link"]}>оформить заказ</a>
            </Nav>
        </header>
    )
}