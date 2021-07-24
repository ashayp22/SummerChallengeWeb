import {useEffect, useState} from 'react';
import {getData} from '../../Requests'
import SingleMentor from '../SingleMentor'

import LOGO from '../../assets/logo.svg' 
import styles from './styles.module.scss';
import ReactLoading from 'react-loading'; 


interface MentorData extends JSON {
  description: string;
  firstName: string;
  lastName: string;
  profile: string;
}


function MentorPage () {

  const [mentorData, setMentorData] = useState<Array<MentorData>>([]);

  useEffect(() => {
    
    /*When component is mounted, get data from the API*/
    getData("upload/blobstore/mentors/", "GET", {}, (d: any) => {

      /*This next piece organizes the mentors such that those with the default image are at the end.
      */
      let defaultImage = "https://hackillinois-upload.s3.amazonaws.com/photos/mentors/default.png"; //hard-coded, would need to change in production

      let allMentors = d.data;
      let end = allMentors.length;

      for(let i = 0; i < end; i++) {
        if(allMentors[i].profile && allMentors[i].profile === defaultImage) {
          allMentors.push(allMentors.splice(i, 1)[0]);
          i -= 1;
          end -= 1;
        }
      }

      /*Update state*/
      setMentorData(allMentors);    
    })

  }, []) //Doesn't rerun after state change

 


  return(

    <div className = {styles.mentorPage}>
      <div className = {styles.mentorPageHeader}>
        <img src={LOGO} alt="HackIllinois Logo" className={styles.logo} />
        <h1 className = {styles.rightTitle}>Mentors</h1>
      </div>
        <hr></hr>
        <br/>

        {/* Shows loading sign if data hasn't been returned from API */}
        {mentorData.length === 0
        ?
        <ReactLoading className = {styles.loading} type={"spin"} color={"white"} height='200px' width='200px'/>
        :
        <div className = {styles.mentorList}>
          {mentorData.map((mentor, id) => (
              <SingleMentor key = {id} firstName = {mentor.firstName} lastName = {mentor.lastName} description = {mentor.description} profile = {mentor.profile}/>
            ))}
        </div> 
        }


        
        <br/>
    </div>

    
  )
}

export default MentorPage;