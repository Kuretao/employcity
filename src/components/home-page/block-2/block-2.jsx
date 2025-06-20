import styles from './style.module.scss';
import {Steps} from "../../steps/steps.jsx";

import {Button} from "../../ui/Button/Button.jsx";
import {Form} from "../../form/form.jsx";

export const OrderBlock = () =>{
    return (
        <section className={styles.order}>
            <div className={styles["order-header"]}>
                <h2 className={styles["order-header__title"]}>
                    Оформление <span className={styles["order-header__title-accent"]}>заказа</span>
                </h2>
                <p className={styles["order-header__description"]}>
                    Перед заполнением формы ознакомьтесь с нашей схемой работы!
                </p>
            </div>

            <Steps/>
            <Form/>
        </section>

    )
}