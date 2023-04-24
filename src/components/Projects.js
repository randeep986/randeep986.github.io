import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {AiFillGithub} from 'react-icons/ai'
import {BiLinkExternal} from 'react-icons/bi'
import photo from '../components/staticData/coolmart.png'
import image from '../components/staticData/fitnessBlender.png'
import pic from '../components/staticData/ideaKart.png'
import picc from '../components/staticData/cricket.png'
import {Image} from '@chakra-ui/react'
// import GitHubCalender from "react-github-calender"
let Projects = () => {
    return (
        <>
        <section className="projects-section" id="projects-section" style={{marginTop:"-80px", marginBottom:"-30px",paddingBottom:"-40px"}}>
            <div className="container">
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                    <h3>Projects I've worked on</h3>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                    <div className="projects-grid">
                        
                           
                              
                             <div className="project-card" style={{border: "1px solid red", height:"auto"}} >
                              <Image src={photo}  width="100%" padding="20px"/>
                                
                                <h4 className="project-title">Coolmart (Modsense Clone)</h4>
                                <p className="project-description" style={{ fontSize:"15px",textAlign:"justify"}}>Coolmart is your fashion shopping assistant, with Coolmart, you can view a product's availability, price and much more</p>
                                <div className="project-tech-stack" >

                                    <span className="technology-used-item">ReactJs</span>
                                    <span className="technology-used-item">Bootstrap</span>
                                    <span className="technology-used-item">Rest API</span>
                                    <span className="technology-used-item">Fire Base</span>
                                    <span className="technology-used-item">Redux</span>

                                </div >
                                <div style={{display: "flex", gap: "30px", marginBottom:"10px"}}>
                                <a className="project-deployed-link" href="https://coolmart-modesens-clone.netlify.app/"><AiFillGithub size="30"></AiFillGithub></a>
                                    <a  className="project-github-link" href="https://github.com/Surendrakumar878/hissing-love-5128"><BiLinkExternal size="30" color="black"></BiLinkExternal></a>
                                </div>
                            </div>
                            <div className="project-card" style={{border: "1px solid red", height:"auto"}} >
                              <Image src={image}  width="100%" padding="20px"/>
                                
                                <h4 className="project-title">FitnessBlender Clone</h4>
                                <p className="project-description" style={{ fontSize:"15px",textAlign:"justify"}}>Fitness Blender provides free full length workout videos, workout routines, healthy recipes and more</p>
                                <div className="project-tech-stack" >

                                    <span className="technology-used-item">ReactJs</span>
                                    <span className="technology-used-item">Axios</span>
                                    <span className="technology-used-item">Rest API</span>
                                    <span className="technology-used-item">JSON Server</span>
                                    <span className="technology-used-item">Redux</span>

                                </div >
                                <div style={{display: "flex", gap: "30px", marginBottom:"10px"}}>
                                <a className="project-github-link" href="https://github.com/randeep986/fitness_blender_Clone"><AiFillGithub size="30"></AiFillGithub></a>
                                    <a className="project-deployed-link" href="https://transcendent-cajeta-545735.netlify.app/"><BiLinkExternal size="30" color="black"></BiLinkExternal></a>
                                </div>
                            </div>
                            <div className="project-card" style={{border: "1px solid red", height:"auto"}} >
                              <Image src={picc}  width="100%" padding="20px"/>
                                
                                <h4 className="project-title">Cricket.com Clone</h4>
                                <p className="project-description" style={{ fontSize:"15px",textAlign:"justify"}}>It provides live cricket scores, updates, predictions, results, latest news & videos of all domestic & T20 series and much more</p>
                                <div className="project-tech-stack">

                                    <span className="technology-used-item">HTML</span>
                                    <span className="technology-used-item">Advanced JS </span>
                                    <span className="technology-used-item">Rest API</span>
                                    <span className="technology-used-item">JSON server</span>
                                    <span className="technology-used-item">CSS</span>

                                </div >
                                <div style={{display: "flex", gap: "30px", marginBottom:"10px"}}>
                                <a className="project-github-link" href="https://github.com/Khajamoinoddin/selective-spark-9795"><AiFillGithub size="30"></AiFillGithub></a>
                                    <a className="project-deployed-link" href="https://sweet-blancmange-3c6ad0.netlify.app/"><BiLinkExternal size="30" color="black"></BiLinkExternal></a>
                                </div>
                            </div>
                            <div className="project-card" style={{border: "1px solid red", height:"auto"}} >
                              <Image src={pic}  width="100%" padding="20px"/>
                                
                                <h4 className="project-title">IdeaKart Clone</h4>
                                <p className="project-description" style={{ fontSize:"15px",textAlign:"justify"}}>Ideakart is an e-commerce shopping assitant, with Ideakart you can view product's availability, prices, reviews and mush more</p>
                                <div className="project-tech-stack">

                                    <span className="technology-used-item">HTML</span>
                                    <span className="technology-used-item">Advanced JS </span>
                                    <span className="technology-used-item">Rest API</span>
                                    <span className="technology-used-item">JSON server</span>
                                    <span className="technology-used-item">CSS</span>

                                </div >
                                <div style={{display: "flex", gap: "30px", marginBottom:"10px"}}>
                                <a className="project-github-link" href="https://github.com/abhiamber/fabulous-vest-203-"><AiFillGithub size="30"></AiFillGithub></a>
                                    <a className="project-deployed-link" href="https://fabulous-vest-203.vercel.app/"><BiLinkExternal size="30" color="black"></BiLinkExternal></a>
                                </div>
                            </div>



                    </div>
                </AnimationOnScroll>
                
            </div>
       
        </section>
        {/* <GitHubCalender username="randeep986" blockSize={15} 
        blockMargin={5} color="#f5d10d"
        fontSize={16}/> */}
        </>

    )
}

export default Projects;