import styles from './style.module.scss';
import {Steps} from "../../steps/steps.jsx";

import {Button} from "../../ui/Button/Button.jsx";
import {Form} from "../../form/form.jsx";

export const OrderBlock = () =>{
    return (
        <section className={styles.order}>
            <h2 className={styles["order__title"]}>
                Оформление <span className={styles["order__title-accent"]}>заказа</span>
            </h2>
            <p className={styles["order__description"]}>
                Перед заполнением формы ознакомьтесь с нашей схемой работы!
            </p>

            <Steps/>
            <Form/>
            <Button text={'Отправить'}/>
        </section>

    )
}