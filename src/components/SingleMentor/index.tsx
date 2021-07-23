import React from 'react';
import styles from './styles.module.scss';

type MyProps = {
    firstName: string;
    lastName: string;
    description: string;
    profile: string;
};

function SingleMentor(props:MyProps) {

    let fullName = props.firstName + " " + props.lastName;

  return(

        <div className = {styles.singleMentor}>
            <div className = {styles.singleMentorInner}>
                <div className = {styles.singleMentorFront}>
                <img
                    className = {styles.mentorImage}
                    src={props.profile}
                    alt={fullName}
                />
                <p className = {styles.mentorName}>{fullName}</p>
                </div>
                <div className = {styles.singleMentorBack}>
                    <p className = {styles.mentorDescription}> 
                        {props.description}
                    </p>
                </div>
            </div>
            </div>
  )
}

export default SingleMentor;