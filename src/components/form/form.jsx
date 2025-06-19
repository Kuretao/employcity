import styles from './form.module.scss'
import {useState} from "react";
import {Input} from "../ui/Input/Input.jsx";
import {Dropdown} from "../ui/dropdown/dropdown.jsx";
import file from "./../../assets/icons/file.svg";
import {useAtom} from "jotai";
import {fileNameAtom, progressAtom} from "../../store/storeAtoms.js";

const OrderFormFirstStep = ({children}) => {
    return (
        <div className={styles["form-step-main"]}>
            {children}
        </div>
    )
}

const OrderFormSecondStep = () => {
    const [progress, setProgress] = useAtom(progressAtom);
    const [fileName, setFileName] = useAtom(fileNameAtom);

    const handleRangeChange = (e) => {
        setProgress(Number(e.target.value));
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        setFileName(file ? file.name : '');
    };

    return (
        <div className={styles["order-form__step2"]}>
            <div className={styles["order-form__progress"]}>
                <div className={styles["order-form__progress-row"]}>
                <span
                    className={styles["order-form__progress-label"]}>Sed ut perspiciatis, unde omnis iste natus.</span>
                    <span className={styles["order-form__progress-value"]}>{progress}%</span>
                </div>
                <input
                    type="range"
                    min={0}
                    max={100}
                    value={progress}
                    onChange={handleRangeChange}
                    className={styles["order-form__range"]}
                />
            </div>

            <div className={styles["order-form__file-wrapper"]}>
                <label className={styles["order-form__file-label"]}>
                    <input
                        type="file"
                        className={styles["order-form__file-input"]}
                        onChange={handleFileChange}
                    />
                    {fileName || <><img src={file} alt={file}/>прикрепить файл</>}
                </label>
            </div>
        </div>
    );
};

export const Form = () => {
    return (
        <form className={styles["form"]}>
        <OrderFormFirstStep>
                <Dropdown list={[{id: 1, title: "lorem"}, {id: 2, title: "lorem"}]} text="lorem"/>
                <Input type={'email'} white required={true} placeholder={"Введите Email"}/>
                <Input type={'text'} white required={true} placeholder={"Введи имя"}/>
            </OrderFormFirstStep>
            <OrderFormSecondStep/>
        </form>
    )
}

