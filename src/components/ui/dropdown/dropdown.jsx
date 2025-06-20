import styles from "./dropdown.module.scss";
import arrow from './../../../assets/icons/arrow.svg'
import {DropdownAtoms} from "../../../store/storeAtoms.js";
import {useAtom} from "jotai";


export const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useAtom(DropdownAtoms);
    return (
        <div className={styles.dropdown} onClick={() => setIsOpen(!isOpen)}>
            <div className={styles["dropdown-body"]} style={isOpen ? {borderRadius: "3px 3px 0px 0px"} : null}>
                <span>{props.text}</span> <img style={isOpen ? {rotate: "180deg"} : null} src={arrow} alt="arrow" />
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
