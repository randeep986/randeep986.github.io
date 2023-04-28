import React from "react";
import profilePhoto from '../assets/images/profile-img.png';

import { AnimationOnScroll } from 'react-animation-on-scroll';

let About = () => {
    return (
        <section className="about-section" id="about-section" style={{maginTop: "-10px"}}>
            <div className="container" >
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                    <h3 id="user-detail-name">About Me</h3>
                </AnimationOnScroll>
                <div className="about-grid">
                    {/* //in img tag please replace the classname with "profile-photo"  */}
                    <img src={profilePhoto} alt="profile" className="home-img" style={{borderRadius:"80%",width: "300px"}} />
                    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                        <p id="user-detail-into" className="about-info" style={{textAlign:"justify"}}>
                        Result-oriented and Enthusiastic Full Stack Web Developer proficient in tech Stacks like JavaScript, React Js, Node Js, Redux and MongoDB. Love to make Interactive UI's. I am a problem-solver and a quick learner who is constantly seeking new challenges and opportunities to grow and develop my skills. I am a highly motivated Full Stack Developer with good technical skills and a passion for creating innovative and effective solutions.
                        </p>
                        <p className="about-info" style={{marginTop: "-20px",textAlign:"justify"}}>
                        I am passionate about solving technical problems, researching and developing new sites and technologies. I undertake and challenge myself to always improve, by being proactive, diligent, responsible, and committed to finding the perfect solution to any problem.
                        </p>
                        
                    </AnimationOnScroll>
                </div>
            </div>
        </section>
    )
}

export default About;