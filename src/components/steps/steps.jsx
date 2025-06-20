import styles from './steps.module.scss';
import firstStep from './../../assets/icons/steps/vect.svg'
import secondStep from './../../assets/icons/steps/vecto.svg'
import thridStep from '../../assets/icons/steps/ve.svg'
import fourStep from './../../assets/icons/steps/vector.svg'
import fiveStep from './../../assets/icons/steps/vec.svg'
import React, {useRef, useEffect, useState} from 'react';

const Dots = () => {
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
    const stepsRef = useRef(null);
    const isPaused = useRef(false);
    const scrollSpeed = useRef(0);
    let requestId = useRef(null);

    const items = [
        { img: firstStep, description: "Lorem ipsum dolorsit amet" },
        { img: secondStep, description: "Lorem ipsum dolorsit amet" },
        { img: thridStep, description: "Lorem ipsum dolorsit amet" },
        { img: fourStep, description: "Lorem ipsum dolorsit amet" },
        { img: fiveStep, description: "Lorem ipsum dolorsit amet" },
    ];

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const itemsToRender = windowWidth < 1800 ? [...items, ...items] : items;

    const scrollStep = () => {
        if (!stepsRef.current) return;

        if (!isPaused.current && windowWidth < 1800) {
            scrollSpeed.current += 0.3;
            if (scrollSpeed.current >= stepsRef.current.scrollWidth / 2) {
                scrollSpeed.current = 0;
                stepsRef.current.scrollLeft = 0;
            } else {
                stepsRef.current.scrollLeft = scrollSpeed.current;
            }
        }
        requestId.current = requestAnimationFrame(scrollStep);
    };

    useEffect(() => {
        if (windowWidth < 1800) {
            requestId.current = requestAnimationFrame(scrollStep);
        } else if (requestId.current) {
            cancelAnimationFrame(requestId.current);
            requestId.current = null;
            if (stepsRef.current) stepsRef.current.scrollLeft = 0;
        }
    }, [windowWidth]);

    const handleMouseDown = () => {
        isPaused.current = true;
    };

    const handleMouseUp = () => {
        isPaused.current = false;
    };

    const handleMouseLeave = () => {
        isPaused.current = false;
    };

    return (
        <div
            className={styles.steps}
            ref={stepsRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseLeave}
        >
            {itemsToRender.map(({ img, description }, index) => (
                <React.Fragment key={index}>
                    <StepsItem img={img} description={description} />
                    {index !== itemsToRender.length - 1 && <Dots />}
                </React.Fragment>
            ))}
        </div>
    );
};