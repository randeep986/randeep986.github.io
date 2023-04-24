import React, { useState } from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { SiRedux } from 'react-icons/si'
import { DiMongodb } from "react-icons/di"

let Skills = () => {
    const [isHover, setIsHover] = useState(false)
    const [isHoverMongo, setIsHoverMongo] = useState(false)

    const handleMouseEnter = () => {
        setIsHover(true)
    }
    const handleMouseLeave = () => {
        setIsHover(false)
    }
    const handleMouseEnterMongo=()=>{
        
        setIsHoverMongo(true)
    }
    const handleMouseLeaveMongo=()=>{
        
        setIsHoverMongo(false)
    }
    const boxStyle = {

        color: isHover ? "blue" : "black",
        TextEncoder:  isHover ? "Redux": null


    }
    const boxStyleMongo = {
        color: isHoverMongo ? "lightgreen"  : "black"

    }
    return (
        <section className="skills-section" id="skills-section">
            <div className="skills-card">
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                    <h3>Some technologies I've used:</h3>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                    <div className="skill-logos-container skills-card-img ">
                        <i className="skill-logo fa fa-html5 skills-card-name"></i>
                        <i className="skill-logo fa fa-css3 skills-card-name"></i>
                        <i className="skill-logo fab fa-js skills-card-name"></i>
                        <i className="skill-logo fab fa-bootstrap skills-card-name"></i>
                        <i className="skill-logo fab skills-card-name " style={boxStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ><SiRedux  /> </i>
                        <i className="skill-logo fab skills-card-name " style={boxStyleMongo} onMouseEnter={handleMouseEnterMongo} onMouseLeave={handleMouseLeaveMongo} ><DiMongodb /></i>
                        <i className="skill-logo fab fa-react skills-card-name"></i>
                        <i className="skill-logo fab fa-node skills-card-name"></i>
                        <i className="skill-logo fab fa-git-alt skills-card-name"></i>

                    </div>
                </AnimationOnScroll>
            </div>
        </section>
    )
}

export default Skills;