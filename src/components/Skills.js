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
    const skills = [
        
    ]    
    return (
        <section className="skills-section" id="skills-section">
            <div className="container" >
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                    <h3>Some technologies I've used:</h3>
                </AnimationOnScroll>
                
    <div id="skills">
      <h2 className="head-text">
        My <span>Skills</span>
      </h2>

      <div className="app__skills-container" >
        <div className="app__skills-list">
          
            <div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex skills-card"
              key={skills}
            >
              <div className="app__flex">
                <img
                  whileHover={{ scale: [1, 1.2] }}
                  src={skills}
                  alt={skills}
                  className="skills-card-img"
                />
              </div>
              <p className="p-text  skills-card-name">{skills}</p>
            </div>
          
        </div>
      </div>
    </div>
  


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
                </AnimationOnScroll>
            </div>
        </section>
    )
    
}



export default Skills;