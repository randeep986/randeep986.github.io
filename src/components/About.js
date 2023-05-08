import React from "react";
import profilePhoto from '../assets/images/profile-img.png';

import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Button } from "@chakra-ui/react";

let About = () => {
    const abouts = {
        title: "Full Stack Web Developer",
        description:
          "Result-oriented and Enthusiastic Full Stack Web Developer proficient in tech Stacks like JavaScript, React Js, Node Js, Redux and MongoDB. Love to make Interactive UI's. I am a problem-solver and a quick learner who is constantly seeking new challenges and opportunities to grow and develop my skills. I am a highly motivated Full Stack Developer with good technical skills and a passion for creating innovative and effective solutions.",
      };
      const handleClick = () =>{
        // window.open("https://drive.google.com/file/d/1wLKSqsMPdEiT2pu2W3PvENyISGSuTtwj/view?usp=sharing")
        // window.location.href='https://drive.google.com/uc?export=download&id=1wLKSqsMPdEiT2pu2W3PvENyISGSuTtwj'
        window.open("https://drive.google.com/file/d/1IvwRAj-3hldcDAgkUlGL7KP3FmoBySuv/view?usp=sharing")
        window.location.href='https://drive.google.com/uc?export=download&id=1IvwRAj-3hldcDAgkUlGL7KP3FmoBySuv'
      }
      

    return (
      <div className="about_container about section" id="about">
      <h2 className="head-text">
        About<span> Me</span>
      </h2>
      <div className="app__profiles">
        <div className="app__profile-item">
          <div className="app__profile-subitem">
            <img src={images.about01} alt={abouts.title} />
          </div>
          <div className="app__profile-description">
            <p className="p-text" style={{ marginTop: 10 }} id="user-detail-intro">
            {abouts.description}
            </p>
            <Button
              onClick={handleClick}
              download
              className="button-5"
              id='resume-button-2'
            >
              Resume     
            </Button>
          </div>
        </div>
      </div>
    </div>
    //     <section className="about-section" id="about-section" style={{maginTop: "-10px"}}>
    //         <div className="container" >
    //             <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
    //                 <h3 id="user-detail-name">About Me</h3>
    //             </AnimationOnScroll>
    //             <div className="about-grid">
    //                 {/* //in img tag please replace the classname with "profile-photo"  */}
    //                 <img src={profilePhoto} alt="profile" className="home-img" style={{borderRadius:"80%",width: "300px"}} />
    //                 <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>

    // <div className="about_container about section" id="about">
    //   <div className="app__profiles">
    //     <div className="app__profile-item">
    //       <div className="app__profile-description">
    //         <p className="p-text" style={{ marginTop: 10 }} id="user-detail-intro">
    //         {abouts.description}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
      
    //   <Button
    //           onClick={handleClick}
    //           download
    //           className="button-5"
    //           id='resume-button-2'
    //         >
    //           Resume     
    //         </Button>
    // </div>
  

                        
    //                 </AnimationOnScroll>
    //             </div>
    //         </div>
    //     </section>
    
    )
}

export default About;