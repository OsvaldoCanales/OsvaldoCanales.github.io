import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import colorSharp2 from "../assets/img/color-sharp2.png";


export const Projects = () => {
    const projects = [
        {
            title: "Project Title1",
            description: "Default Image",
            imgUrl: projImg1,
           
        },
        {
            title: "Project Title2",
            description: "Default Image",
            imgUrl: projImg2,

          
        },
        {
            title: "Project Title3",
            description: "Default Image",
            imgUrl: projImg3,

            
        },
    
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>My Recent Work</h2>
                    <p>Here a few projects I've worked on recently. Site is in progress!</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                        <Nav.Link eventKey="first">React Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Django Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">Other works!</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return ( 
                                           <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second"> Second Tab Pane</Tab.Pane>
                        <Tab.Pane eventKey="third"> Third Tab Pane</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>

    )

}