import { Container, Row, Col } from "react-bootstrap";


export const Projects = () => {
    const projects = [
        {
            title: "Project Title",
            description: "Project Description",
           
        },
        {
            title: "Project Title",
            description: "Project Description",
          
        },
        {
            title: "Project Title",
            description: "Project Description",
            
        },
    
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Project description</p>
                    </Col>
                </Row>
            </Container>
        </section>

    )

}