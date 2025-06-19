import styles from './footer.module.scss'
import {Nav} from "../ui/nav/nav.jsx";
import {SocialDefault, SocialLink} from "../ui/SocialLink/SocialLink.jsx";
import qiwi from './../../assets/icons/footer/Frame 19.svg'
import email from './../../assets/icons/footer/.svg'
import vk from './../../assets/icons/footer/В.svg'
import  wm from './../../assets/icons/footer/Combined Shape.svg'
import  ym from './../../assets/icons/footer/Vector.svg'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles["footer__copyright"]}>
                © 2018 «LoremIpsum.net» Все права защищены.
            </p>
            <hr className={styles["footer__divider"]}/>
            <Nav className={styles["footer__nav"]}>
                <SocialDefault text={"QIWI wallet"}  icon={qiwi}/>
                <SocialDefault text={"Yandex Money"}  icon={ym}/>
                <SocialDefault text={"Web Money"}  icon={wm}/>
            </Nav>
            <hr className={styles["footer__divider"]}/>
            <Nav className={styles["footer__nav"]}>
                <SocialLink text={"info@ipsum228.com"} icon={email}/>
                <SocialLink text={"Мы вконтакте"} icon={vk}/>
            </Nav>
        </footer>

    )
}