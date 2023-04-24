import React from "react";
import profilePhoto from '../assets/images/profile-img.png';

import { AnimationOnScroll } from 'react-animation-on-scroll';

let About = () => {
    return (
        <section id="user-detail-intro" className="about-section"  style={{maginTop: "-10px"}}>
            <div 
            
            className="container">
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                    <h3>About Me</h3>
                </AnimationOnScroll>
                <div>
                    <img src={profilePhoto} alt="profile" style={{borderRadius:"80%",width: "300px"}} />
                    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                        <p className="about-info" style={{textAlign:"justify"}}>
                        I'm a Full-Stack Web Developer with the ability to learn and collaborate in rapidly changing environments and compositions. Worked through 1000+ hours of Bootcamp structure learning JavaScript, Node.Js, React.Js, MongoDB, Express, HTML5, and CSS3.
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