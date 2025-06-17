import styles from './form.module.scss'
import {useState} from "react";
import {Input} from "../ui/Input/Input.jsx";
import {Dropdown} from "../ui/dropdown/dropdown.jsx";

const OrderFormFirstStep = ({children}) => {
    return (
        <div className={styles["form-step-main"]}>
            {children}
        </div>
    )
}

const OrderFormSecondStep = () => {
    const [progress, setProgress] = useState(75); // Пример стартового значения
    const [fileName, setFileName] = useState('');

    const handleRangeChange = (e) => {
        setProgress(Number(e.target.value));
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        setFileName(file ? file.name : '');
    };

    return (
        <div className={styles["order-form__step2"]}>
            <div className={styles["order-form__progress-row"]}>
        <span className={styles["order-form__progress-label"]}>
          Sed ut perspiciatis, unde omnis iste natus.
        </span>
                <span className={styles["order-form__progress-value"]}>
          {progress}%
        </span>
                <div className={styles["order-form__file-wrapper"]}>
                    <label className={styles["order-form__file-label"]}>
                        <input
                            type="file"
                            className={styles["order-form__file-input"]}
                            onChange={handleFileChange}
                        />
                        {fileName || "прикрепить файл"}
                    </label>
                </div>
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
    );
};

export const Form = () => {
    return (
        <form>
            <OrderFormFirstStep>
                <Dropdown/>
                <Input type={'email'} required={true}/>
                <Input type={'text'} required={true}/>
            </OrderFormFirstStep>
            <OrderFormSecondStep />
        </form>
    )
}

