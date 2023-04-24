import React, {useState} from 'react';


let Navbar = () => {
    let [colorChange, setColorChange] = useState(false);

    let changeNavbarColor = () => {
        if(window.scrollY >= 60) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    }
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <div>
            <nav id='nav-menu' className={colorChange ? 'navbar fixed-top navbar-expand-lg colorChange' : 'navbar fixed-top navbar-expand-lg'} >
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#hero-section"><img className="logo" src={Logo} alt="brand" /></a> */}
                    <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="toggler-icon top-bar"></span>
                        <span className="toggler-icon middle-bar"></span>
                        <span className="toggler-icon bottom-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                        <li className="nav-item" id='home'>
                                <a className="nav-link home" href="#hero-section">Home</a>
                            </li>
                            <li id='about' className="nav-item about section">
                                <a className="nav-link about" href="#about-section">About</a>

                            </li>
                            
                            <li id='projects' className="nav-item">
                                <a className="nav-link projects" href="#projects-section">Projects</a>
                            </li>
                            <li id='skills' className="nav-item">
                                <a className="nav-link skills" href="#skills-section">Skills</a>
                            </li>
                            <li id='contact' className="nav-item">
                                <a className="nav-link contact" href="#contact-section">Contact</a>
                            </li>
                            <li  className="nav-item">
                                <a className="nav-link resume" href="https://drive.google.com/file/d/1wLKSqsMPdEiT2pu2W3PvENyISGSuTtwj/view?usp=share_link"  target="blank"> <button >Resume</button> </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;