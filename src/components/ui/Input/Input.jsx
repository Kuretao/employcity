import styles from "./input.module.scss";


export const Input = (props) => {
    return (
        <>
            <input className={`${styles.input} ${props.white ? styles['input--white'] : ''}`} {...props} />
        </>
    )
}