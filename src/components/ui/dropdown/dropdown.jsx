import styles from "./dropdown.module.scss";
import arrow from './../../../assets/icons/arrow.svg'
import {DropdownAtoms} from "../../../store/dropdownAtoms.js";
import {useAtom} from "jotai";


export const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useAtom(DropdownAtoms);
    return (
        <div className={styles.dropdown} onClick={() => setIsOpen(!isOpen)}>
            <div className={styles["dropdown-body"]}>
                <span>{props.text}</span> <img src={arrow} alt="arrow" />
            </div>

            {
                isOpen && (
                    <ul className={styles["dropdown-content"]}>
                        {props.list.map((typeItem) => (
                            <li key={typeItem.id}>{typeItem.title}</li>
                        ))}
                    </ul>
                )
            }
        </div>
    );
};
