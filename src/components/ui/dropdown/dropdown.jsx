import styles from "./dropdown.module.scss";
import arrow from './../../../assets/icons/arrow.svg'

export const Dropdown = (props) => {
    return (
        <div className={styles.dropdown}>
            <div className={styles["dropdown-body"]}>
                <span>{props.text}</span> <img src={arrow} alt="arrow" />
            </div>

            {
                props.true && (
                    <ul>
                        {props.list.map((typeItem) => (
                            <li key={typeItem.id}>{typeItem.title}</li>
                        ))}
                    </ul>
                )
            }
        </div>
    );
};
