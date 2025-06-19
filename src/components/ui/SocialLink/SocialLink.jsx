import styles from './SocialLink.module.scss';


export const SocialLink = ({ text, icon}) =>{
    return(
        <>
            <a href="#" className={`${styles["footer-link"]}`}><img src={icon} alt={text}/>{text}</a>
        </>
    );
}

export const SocialDefault = ({ text, icon}) =>{
    return(
        <>
            <div className={`${styles["footer-link"]}`}><img src={icon} alt={text}/>{text}</div>
        </>
    );
}