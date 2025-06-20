import styles from './footer.module.scss'
import {Nav} from "../ui/nav/nav.jsx";
import {SocialDefault, SocialLink} from "../ui/SocialLink/SocialLink.jsx";
import qiwi from './../../assets/icons/footer/Frame 19.svg'
import email from './../../assets/icons/footer/v.svg'
import vk from './../../assets/icons/footer/В.svg'
import  wm from './../../assets/icons/footer/Combined Shape.svg'
import  ym from './../../assets/icons/footer/Vector.svg'
import {useAtom} from "jotai";
import {NarrowAtom} from "../../store/storeAtoms.js";
import {useEffect} from "react";

export const Footer = () => {
    const [isNarrow, setIsNarrow] = useAtom(NarrowAtom);

    useEffect(() => {
        const handleResize = () => {
            setIsNarrow(window.innerWidth < 1600) ;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <footer className={styles.footer}>
            <p className={styles["footer__copyright"]}>
                © 2018 «LoremIpsum.net» {(window.innerWidth > 860 && window.innerWidth < 1600) ? <br/> : ''} Все права защищены.
            </p>
            <hr className={styles["footer__divider"]}/>
            <Nav className={styles["footer__nav"]}>
                <SocialDefault text={isNarrow ? "QIWI" : "QIWI wallet"} icon={qiwi}/>
                <SocialDefault text={isNarrow ? "Y.Money" : "Yandex Money"} icon={ym}/>
                <SocialDefault  text={isNarrow ? "W.Money" : "Web Money"}  icon={wm}/>
            </Nav>
            <hr className={styles["footer__divider"]}/>
            <Nav className={styles["footer__nav"]}>
                <SocialLink
                    text={isNarrow ? "email" : "info@ipsum228.com"}
                    icon={email}
                />
                <SocialLink
                    text={isNarrow ? "ВК" : "Мы вконтакте"}
                    icon={vk}
                />
            </Nav>
        </footer>

    )
}