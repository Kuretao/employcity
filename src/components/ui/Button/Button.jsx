import styles from './button.module.scss';


export const Button = ({additionalClass, text, maxWidth}) =>{
    let btnClass;
    switch(additionalClass){
        case "transparent":
            btnClass = styles["button--transparent"];
            break;
            case "dark":
                btnClass = styles["button--dark"];
                break;
                case "white":
                    btnClass = styles["button--white"];
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