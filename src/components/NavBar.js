import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import useState from 'react-bootstrap';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');


    return (
        <NavBar expand = "lg">
            <Container>
                <NavBar.Brand href = '#home'>
                    <img src={''} alt = "logo" />
                </NavBar.Brand>
                <NavBar.Toggle aria-controls="basic-navbar-nav">
                    <span className = "navbar-toggler-icon"></span>
                </NavBar.Toggle>
                <NavBar.Collapse id = "basic-navbar-nav">
                    <Nav className = "me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                    </Nav>
                    <span className = "navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={} alt= "" /></a>
                            <a href="#"><img src={} alt= "" /></a>
                            <a href="#"><img src={} alt= "" /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                    </span>
                </NavBar.Collapse>
            </Container>
        


        </NavBar>
    )

}