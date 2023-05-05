import React, {useState, useEffect} from "react";
import 'animate.css';
import image from '../assets/images/beach.jpg';
import file from '../static/Randeep_Singh_Resume.pdf';
import { Button } from "@chakra-ui/react";

let currentDate = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ;
let currentHour = new Date().getHours();

let morningColor =  "#ffe9a6" ;
let afternoonColor =  "#FFB37B" ;
let eveningColor = "#FF8866" ;

let Hero = () => {
    let [greetingText, setGreetingText] = useState("");
    let [greetingTextColor, setGreetingTextColor] = useState("");
    const handleClick = () =>{
        window.open("https://drive.google.com/file/d/1wLKSqsMPdEiT2pu2W3PvENyISGSuTtwj/view")
        window.location.href='https://drive.google.com/uc?export=download&id=1wLKSqsMPdEiT2pu2W3PvENyISGSuTtwj'
      }
      

    useEffect(() => {
        if (currentHour >= 1 && currentHour <= 12) {
            setGreetingText('Good Morning');
            setGreetingTextColor(morningColor);
        } else if (currentHour >= 12 && currentHour <= 18) {
            setGreetingText('Good Afternoon');
            setGreetingTextColor(afternoonColor);
        } else {
            setGreetingText('Good Evening');
            setGreetingTextColor(eveningColor);
        }
    }, []);

    return (
        <section className="hero-section" id="hero-section">
            <div style={{ backgroundImage:`url(${image})` }} id="user-detail-intro" className="hero-container">
                <div  className="hero-text-wrapper">
                    <h1 className="animate__animated animate__fadeInDown hero-title"><span style={{color: greetingTextColor}}>{greetingText}</span>,<br />I'm Randeep!</h1>
                    <h1 className="animate__animated animate__fadeInDown hero-title"><span style={{color: greetingTextColor}}></span><div style={{fontSize: "30px"}} >Full Stack Web Developer</div></h1>
                    <h2 className="animate__animated animate__fadeInRight hero-date"><span id="date">{currentDate}</span></h2>
                    
            <Button
              onClick={handleClick}
              download
              className="button-5"
              id='resume-button-2'
            >
              Resume     
            </Button>
                </div>
                <a className="down-arrow" href="#about-section" aria-label="down-arrow"><i
                    className="fa-solid fa-angle-down animate__animated animate__fadeInDown"></i></a>
            </div>
        </section>
    )
}

export default Hero;