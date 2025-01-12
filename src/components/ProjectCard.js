import { Link } from "react-router-dom";


export const ProjectCard = ({ id, title, description, buttonLabel, imgSrc}) => { 
    return(
        <div className="project-card">
            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={`/projects/${id}`} className = "view-project" > 
                    {buttonLabel} &rarr;
                
                </Link>
            </div>
            <div className="project-image">
                <img src={imgSrc} alt={title}/> 
            </div>
        </div>
    );
};