import React from "react";
import styles from "./home.module.css";

function Home(props) {
  return (
    <div className={styles.home}>
      <div className={styles.date}>
        <span>Date:28-Feb-22</span>
        <br />
        <span>Day Order:3 </span>
      </div>
      <p className={styles.symptoms}>
        <span>Early symptoms of Covid-19 - </span> Sore throat, dry cough,
        fever, cold, loss of smell, loss of taste etc. If any of the above
        symptoms are noticed contact emergency helpline.
      </p>
      <div className={styles.contact}>
        <p>
          Emergency Contact :- <span>044 - 2 7 4 5 2 7 2 7</span>
        </p>
        <p>
          Mobile: :- <span>9 7 8 9 8 8 8 4 5 3 / 9 9 4 0 0 9 6 0 1 2</span>
        </p>
      </div>
      <div>
        <img
          src="https://creator.zohopublic.com/srm_university/academia-academic-services/Image_Sourses_Report/2727643000229985225/Image/image-download/5YzR0Wf3yxnuA2p2008wCne7Gud8VAFTMfY3w2nDuStF9UzJWVjpghPXeThO09w2AMmmgX0mFmyFRKJX2fQAHZeRjqANQqGty7tS/1631332744442_academia-new.jpg"
          alt="Academia"
        />
        <p className={styles.srm}>
          &nbsp;&nbsp;&nbsp;SRM Academia is the Official Student/Parent Portal of SRM's Faculty of
          Engineering and Technology which aims at providing a better experience
          to the students to access the academic web services. The portal is a
          gateway to your academic information such as attendance, internal
          marks, timetable, etc.
        </p>
        <img
          src="https://academia.srmist.edu.in/49910842/academia-academic-services/downloadPortalImage?type=3&imageName=1512045054267_Untitled-1.png"
          alt="SRM Application Development Centre"
        />
      </div>
    </div>
  );
}

export default Home;
