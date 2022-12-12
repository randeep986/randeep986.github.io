import React from "react";

let currentYear = new Date().getFullYear();

let Footer = () => {
    return (
        <footer>
            <section className="footer">
                <div className="footer-container">
                    <div className="social-icon-wrapper">
                        <a className="footer-link" href="https://www.linkedin.com/in/rndp-singh/" target="_blank"
                             aria-label="linkedin-logo" rel="noreferrer"><i className="fa-brands fa-linkedin social-icon"></i></a>
                        <a className="footer-link" href="https://github.com/randeep986" target="_blank" aria-label="linkedin-logo" rel="noreferrer"><i
                            className="fa-brands fa-github social-icon"></i></a>
                      
                    </div>
                    <p className="copyright">&copy; Randeep Singh <span id="year">{currentYear}</span></p>
            </div>
        </section>
  </footer>
    )
}

export default Footer;