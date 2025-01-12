
import {Navbar, Container, Nav} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import LinkedIn from '../assets/img/nav-icon1.svg'
import Github from '../assets/img/nav-icon2.svg'
import Instagram from '../assets/img/nav-icon3.svg'
import { useNavigate, useLocation } from 'react-router-dom';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false); 

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log('use Effect ran')
        //Function returns boolean true or false if user has scrolled
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } 
            else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll); //Invokes the onscroll function when user scrolls
        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    
    
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);

        if (location.pathname !== '/') { 
            navigate('/');
        }

        setTimeout( () => { 
            const section = document.getElementById(value);
            if (section) { 
                section.scrollIntoView({behavior: 'smooth'});
            }
        }, 100);
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className = "navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id = "basic-navbar-nav">
                    <Nav className = "ms-auto">
                        <Nav.Link 
                            onClick={() => onUpdateActiveLink('home')}
                            className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} > 
                            Home 
                        </Nav.Link>
                        <Nav.Link 
                            onClick={() => onUpdateActiveLink('projects')}
                            className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} > 
                            Projects 
                        </Nav.Link>
                        <Nav.Link 
                            onClick={() => navigate('/resume')}
                            className={activeLink === 'resume' ? 'active navbar-link': 'navbar-link'} > 
                            Resume 
                        </Nav.Link>
                    </Nav>
                    <span className = "navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/osvaldo-canales-18584726b/"><img src={LinkedIn} alt= "" /></a>
                            <a href="https://github.com/OsvaldoCanales"><img src={Github} alt= "" /></a>
                            <a href="https://www.instagram.com/o._.canales/?theme=dark"><img src={Instagram} alt= "" /></a>
                        </div>
                        <button
                            className="vvd"
                            onClick={() => onUpdateActiveLink('contact')}
                        >
                            <span>Let’s Connect</span>
                        </button>    
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}