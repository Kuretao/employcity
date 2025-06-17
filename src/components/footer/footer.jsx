import styles from './footer.module.scss'
import {Nav} from "../ui/nav/nav.jsx";
import {SocialLink} from "../ui/SocialLink/SocialLink.jsx";


export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles["footer__copyright"]}>
                © 2018 «LoremIpsum.net» Все права защищены.
            </p>
            <hr className={styles["footer__divider"]}/>
            <Nav className={styles["footer__nav"]}>
                <SocialLink text={"QIWI wallet"} className={styles["footer__social-link"]}/>
                <SocialLink text={"Yandex Money"} className={styles["footer__social-link"]}/>
                <SocialLink text={"Web Money"} className={styles["footer__social-link"]}/>
            </Nav>
            <hr className={styles["footer__divider"]}/>
            <Nav className={styles["footer__nav"]}>
                <SocialLink text={"info@ipsum228.com"} className={styles["footer__social-link"]}/>
                <SocialLink text={"Мы вконтакте"} className={styles["footer__social-link"]}/>
            </Nav>
        </footer>

    )
}