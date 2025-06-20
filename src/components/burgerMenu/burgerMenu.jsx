import styles from './burgerMenu.module.scss';
import {useAtom} from "jotai";
import {burgerAtom} from "../../store/storeAtoms.js";
import {Nav} from "../ui/nav/nav.jsx";
import {SocialDefault, SocialLink} from "../ui/SocialLink/SocialLink.jsx";
import qiwi from "../../assets/icons/footer/Frame 19.svg";
import ym from "../../assets/icons/footer/Vector.svg";
import wm from "../../assets/icons/footer/Combined Shape.svg";
import email from "../../assets/icons/footer/v.svg";
import vk from "../../assets/icons/footer/В.svg";

export const BurgerMenu = ({ children }) => {
    const [isOpen, setIsOpen] = useAtom(burgerAtom);

    const toggleMenu = () => setIsOpen(prev => !prev);

    return (
        <>
            <button
                className={`${styles.burgerButton} ${isOpen ? styles.open : ''}`}
                onClick={toggleMenu}
            >
                <span />
                <span />
                <span />
            </button>

            <nav className={`${styles.fullScreenNav} ${isOpen ? styles.open : ''}`}>
                <div className={styles.menuContent}>
                    {children}
                </div>

                <div className={styles["menu-footer"]}>
                    <Nav className={styles["footer__nav"]}>
                        <SocialDefault text={"QIWI wallet"} icon={qiwi}/>
                        <SocialDefault text={"Yandex Money"} icon={ym}/>
                        <SocialDefault  text={"Web Money"}  icon={wm}/>
                    </Nav>
                    <Nav className={styles["footer__nav"]}>
                        <SocialLink
                            text={"info@ipsum228.com"}
                            icon={email}
                        />
                        <SocialLink
                            text={"Мы вконтакте"}
                            icon={vk}
                        />
                    </Nav>
                </div>
            </nav>

            {isOpen && <div className={styles.overlay} onClick={toggleMenu} />}
        </>
    );
};
