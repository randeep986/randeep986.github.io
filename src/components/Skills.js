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
                        <i className="skill-logo fab " style={boxStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ><SiRedux  /> </i>
                        <i className="skill-logo fab " style={boxStyleMongo} onMouseEnter={handleMouseEnterMongo} onMouseLeave={handleMouseLeaveMongo} ><DiMongodb /></i>
                        <i className="skill-logo fab fa-react"></i>
                        <i className="skill-logo fab fa-node"></i>
                        <i className="skill-logo fab fa-git-alt"></i>

                    </div>
                    <div style={{visibility:"hidden", display:"none"}}>
                        <div className="skills-card">
                            <img className="skills-card-img" src="" alt=""/>
                            <p className="skils-card-name">h</p>
                        </div>
                        <div className="skills-card">
                            <img className="skills-card-img" src="" alt=""/>
                            <p className="skils-card-name">h</p>
                        </div>                        <div className="skills-card">
                            <img className="skills-card-img" src="" alt=""/>
                            <p className="skils-card-name">h</p>
                        </div>                        <div className="skills-card">
                            <img className="skills-card-img" src="" alt=""/>
                            <p className="skils-card-name">h</p>
                        </div>                        <div className="skills-card">
                            <img className="skills-card-img" src="" alt=""/>
                            <p className="skils-card-name">h</p>
                        </div>
                    </div>
                </AnimationOnScroll>
            </div>
        </section>
    )
}

export default Skills;