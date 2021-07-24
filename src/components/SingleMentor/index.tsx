import {useEffect, useState, useRef} from 'react';

import styles from './styles.module.scss';

type MyProps = {
    firstName: string;
    lastName: string;
    description: string;
    profile: string;
};

function SingleMentor(props:MyProps) {

    /*DEPRECATED (but not really): The div automatically flips over if you scroll to it.
    This makes it easier to read. While this makes the most sense on a mobile device, it still isn't 
    that helpful because users don't want to read every bio.

    I am keeping this here for reference in future projects.

    Source: https://dev.to/producthackers/intersection-observer-using-react-49ko

    */

    //DEPRECATED
    // const [shouldFlip, setFlip] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);

    //DEPRECATED
    // const callbackFunction = (entries: any) => {
    //     const [entry] = entries;
    //     setFlip(entry.isIntersecting)
    // }

    // const options = {
    //     root: null,
    //     rootMargin: "0px",
    //     threshold: 1
    // }

    // useEffect(() => {
    //     //Using the IntersectionObserver API: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    //     const observer = new IntersectionObserver(callbackFunction, options);

    //     if(containerRef.current) {
    //         observer.observe(containerRef.current);
    //     }

    //     return () => {
    //         if(containerRef.current) observer.unobserve(containerRef.current);
    //     }

    // }, [containerRef])

    let fullName = props.firstName + " " + props.lastName;

    //Sets the background of a div to the profile picture
    let fullStyle = {
        backgroundImage: "url('" + props.profile + "')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
    }

    /*Sets the font size of the description text to fill most of its container.
    The formula for calculating this is dependent on text length, and found using exponential regression.
    */
    let descriptionLength = props.description.length;

    let mentorStyle = {
        fontSize: Math.round(22.8669 * Math.pow(0.9988, descriptionLength)) + "px",
    }

    let flipStyle = {};

    //DEPRECATED
    // if(shouldFlip) {
    //     flipStyle = {
    //         transform: 'rotateY(180deg)', /* part of flipping animation */
    //     }
    // }



  return(

        <div ref = {containerRef} className = {styles.singleMentor}>
            <div style = {flipStyle} className = {styles.singleMentorInner}>
                <div style = {fullStyle} className = {styles.singleMentorFront}>
                <div className = {styles.mentorName}>
                    {fullName}
                </div>
                </div>
                <div className = {styles.singleMentorBack}>
                    <p style = {mentorStyle} className = {styles.mentorDescription}> 
                        {props.description}
                    </p>
                </div>
            </div>
            </div>
    )
}

export default SingleMentor;