import styles from './style.module.scss';
import {Button} from "../../ui/Button/Button.jsx";
import background from './../../../assets/images/back.webp'

export const HomeWelcomeBlock = () =>{
    return (
        <section className={styles["home-welcome"]}>
            <h1 className={styles["home-welcome__title"]}>
                <span className={styles["home-welcome__title-accent"]}>Lorem ipsum </span>
                dolor sit <br/> amet consectetur
                <span className={styles["home-welcome__title-accent"]}> adipiscing</span>
            </h1>

            <div className={styles["home-welcome__features"]}>
                <p className={styles["home-welcome__description"]}>
                    At vero eos et accusamus et iusto odio dignissimos ducimus!
                </p>
                <ul className={styles["home-welcome__list"]}>
                    <li className={styles["home-welcome__item"]}>Totam rem aperiam eaque ipsa</li>
                    <li className={styles["home-welcome__item"]}>Sit voluptatem accusantium doloremque laudantium</li>
                    <li className={styles["home-welcome__item"]}>Sed ut perspiciatis, unde omnis iste natus error</li>
                </ul>
            </div>

            <div className={styles["home-welcome__buttons"]}>
                <Button text={'Заказать'} additionalClass={'accent-small'}/>
                <Button text={'Подробнее'}/>
            </div>

            <img src={background} alt=""/>
        </section>

    )
}