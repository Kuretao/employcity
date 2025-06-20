import {Logo} from "../ui/Logotype/Logo.jsx";
import {Nav} from "../ui/nav/nav.jsx";
import styles from "./header.module.scss"
import {useAtom} from "jotai";
import {TabletAtom} from "../../store/storeAtoms.js";
import {useEffect} from "react";
import {BurgerMenu} from "../burgerMenu/burgerMenu.jsx";

export const Header = () => {
    const [isNarrow, setIsNarrow] = useAtom(TabletAtom);

    useEffect(() => {
        const handleResize = () => {
            setIsNarrow(window.innerWidth < 860);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className={styles.header}>
            <Logo/>

            {isNarrow ? (
                    <BurgerMenu>
                        <a href="#" className={styles["header-link"]}>бизнес</a>
                        <a href="#" className={styles["header-link"]}>о нас</a>
                        <a href="#" className={styles["header-link"]}>цены</a>
                        <a href="#" className={styles["header-link"]}>оформить заказ</a>
                    </BurgerMenu>

            ) : (
                <Nav>
                    <a href="#" className={styles["header-link"]}>бизнес</a>
                    <a href="#" className={styles["header-link"]}>о нас</a>
                    <a href="#" className={styles["header-link"]}>цены</a>
                    <a href="#" className={styles["header-link"]}>оформить заказ</a>
                </Nav>
            )}
        </header>
    )
}