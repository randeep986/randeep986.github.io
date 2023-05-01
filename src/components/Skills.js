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
                </AnimationOnScroll>
            </div>
        </section>
    )
}

  const skills = [
    {
      name: "Html 5",
      icon: images.html,
    },
    {
      name: "CSS 3",
      icon: images.css,
    },
    {
      name: "JavaScript",
      icon: images.javascript,
    },
    {
      name: "TypeScript",
      icon: images.typescript,
    },
    {
      name: "React Js",
      icon: images.react,
    },
    {
      name: "Redux",
      icon: images.redux,
    },
    {
      name: "Node Js",
      icon: images.node,
    },
    {
      name: "Express",
      icon: images.express,
    },
    {
      name: "Sass",
      icon: images.sass,
    },
    {
      name: "Mongo DB",
      icon: images.mongodb,
    },
    {
      name: "Github",
      icon: images.github,
    },
    {
      name: "Chakra UI",
      icon: images.chakra,
    },
    {
      name: "Next Js",
      icon: images.next,
    },
  ];

  
    <div id="skills">
      <h2 className="head-text">
        My <span>Skills</span>
      </h2>

      <div className="app__skills-container" >
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex skills-card"
              key={skill.name}
            >
              <div className="app__flex">
                <motion.img
                  whileHover={{ scale: [1, 1.2] }}
                  src={skill.icon}
                  alt={skill.name}
                  className="skills-card-img"
                />
              </div>
              <p className="p-text  skills-card-name">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  



export default Skills;