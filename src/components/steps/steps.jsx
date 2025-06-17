import styles from './steps.module.scss';
import firstStep from './../../assets/icons/steps/.svg'
import secondStep from './../../assets/icons/steps/.svg'
import thridStep from './../../assets/icons/steps/Subtract.svg'
import fourStep from './../../assets/icons/steps/.svg'
import fiveStep from './../../assets/icons/steps/.svg'

const Dots = ({count}) => {
    return (
        <div className={styles["steps-dots"]}>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
        </div>
    )
}

const StepsItem = ({img, description}) => (
    <div className={styles["steps-item"]}>
        <img src={img} alt={img}/>
        <p>{description}</p>
    </div>
)


export const Steps = () => {
    return (
        <div className={styles.steps}>
            <StepsItem img={firstStep} description={"Lorem ipsum dolor\n" +
                "sit amet"}/>
            <Dots/>
            <StepsItem img={secondStep} description={"Lorem ipsum dolor\n" +
                "sit amet"}/>
            <Dots/>
            <StepsItem img={thridStep} description={"Lorem ipsum dolor\n" +
                "sit amet"}/>
            <Dots/>
            <StepsItem img={fourStep} description={"Lorem ipsum dolor\n" +
                "sit amet"}/>
            <Dots/>
            <StepsItem img={fiveStep} description={"Lorem ipsum dolor\n" +
                "sit amet"}/>
        </div>
    )
}