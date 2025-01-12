import { useInView } from "react-intersection-observer"
import sudoku from "../assets/img/Sudoku_solver.png";
import sentiment from "../assets/img/Sentiment_homepage.png";
import { ProjectCard } from './ProjectCard';

export const Projects = () => { 
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const projectList = [ 
        {
            id: "sudoku-solver",
            title: "Sudoku Solver", 
            description: " Application which is able to solve a sudoku puzzle step-by-step in real time.",
            imgSrc: sudoku,      
        },
        {
            id: "sentiment-analysis",
            title: "Sentiment Analysis",
            description: " Application that incorporates Panda and NLTK libraries to read thousands of reviewed comments and score them based on mood.",
            imgSrc: sentiment,

        }
    ];

    return ( 
        <section id="projects" className="projects-section">
            <div ref={ref} className={`project-card-container ${inView ? "visible": ""}`}>
                {projectList.map((project) => (
                    <ProjectCard
                        key = {project.id}
                        id = {project.id}
                        title = {project.title}
                        description = {project.description}
                        buttonLabel = "View Project"
                        imgSrc = {project.imgSrc}
                    />
                ))}
            </div>
        </section>
    )
}

