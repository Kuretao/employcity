import styles from './button.module.scss';


export const Button = ({additionalClass, text, maxWidth}) =>{
    let btnClass;
    switch(additionalClass){
        case "accent":
            btnClass = styles["button--accent"];
            break;
        case "accent-small":
            btnClass = styles["button--accent-small"];
            break;
        default:
            btnClass = '';
    }
    return(
        <>
            <button className={`${styles.btn} ${btnClass}`} style={{maxWidth}}>{text}</button>
        </>
    );
}