import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';


let Contact = () => {
    return (
        <section className="contact-section" id="contact-section" style={{marginTop:"-50px", marginBottom:"-30px",paddingBottom:"-40px",paddingTop:"-40px"}}>
            <div className="container">
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                    <h3>Contact Me</h3>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                    <p>Feel
                        free to message me and I'll try to get back to you as soon as I can.</p>
                    <form action="https://formspree.io/f/myyvrvql" method="POST" className="email-form">
                        <div className="form-group">
                            <label htmlFor="name-input">Name:</label>
                            <input type="text" className="form-control" id="name-input" placeholder="Name" name="user_name" required />
                        </div>
                        <div id="contact-email" className="form-group">
                            <label htmlFor="email-input">Email:</label>
                            <input type="email" className="form-control" id="email-input" placeholder="Email" name="user_mail" required />
                        </div>
                        <div id="contact-phone" className="form-group">
                            <label htmlFor="message-input">Message</label>
                            <textarea type="text" className="form-control" id="message-input" placeholder="Message" name="user_message"
                                rows="3" required></textarea>
                        </div>
                        <div className="email-btn-wrapper">
                            <button className="btn email-submit-btn" type="submit">Send <i className="fa-solid fa-paper-plane"></i></button>
                        </div>
                    </form>
                </AnimationOnScroll>
            </div>
        </section>
    )
}

export default Contact;