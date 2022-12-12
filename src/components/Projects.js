import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';

let Projects = () => {
    return (
        <section className="projects-section" id="projects-section">
            <div className="container">
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                    <h3>Projects I've worked on</h3>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                    <div className="projects-grid">
                        <a className="card-link" href="" target="_blank" rel="noreferrer">
                            <div className="projects-card">
                                <h4>Fitness Blender Clone</h4>
                                <p className="project-description">A website that gives provides cricket
scores, scorecard updates ,cricket news,
match schedule, predictions and more..</p>
                                <div className="technology-used">
                                    
                                   
                                    <span className="technology-used-item">ReactJs</span>
                                    <span className="technology-used-item">Bootstrap</span>
                                    <span className="technology-used-item">Rest API</span>
                                   
                                </div>
                            </div>
                        </a>
                       
                        
                       
                    </div>
                </AnimationOnScroll>
            </div>
        </section>
    )
}

export default Projects;