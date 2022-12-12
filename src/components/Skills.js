import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';


let Skills = () => {
    return (
        <section className="skills-section" id="skills-section">
            <div className="container">
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                    <h3>Some technologies I've used:</h3>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                    <div className="skill-logos-container">
                        <i className="skill-logo fa fa-html5"></i>
                        <i className="skill-logo fa fa-css3"></i>
                        <i className="skill-logo fab fa-js"></i>
                        <i className="skill-logo fab fa-bootstrap"></i>
                        <i className="skill-logo fab fa-angular"></i>
                        <i className="skill-logo fab fa-react"></i>
                        <i className="skill-logo fab fa-node"></i>
                        <i className="skill-logo fab fa-java"></i>
                        <i className="skill-logo fab fa-git-alt"></i>
                        <i className="skill-logo fa-brands fa-figma"></i>
                    </div>
                </AnimationOnScroll>
            </div>
        </section>
    )
}

export default Skills;