
import resumeImage from "../assets/img/Osvaldo_Resume (2)-1.png";


export const Resume = () => { 
    return ( 
        <div className="resume-page">
            <a href={resumeImage} download="Osvaldo_Canales_Resume" className="download-link">
                Download Resume
            </a>
            <img src={resumeImage} alt="Resume" className="resume-image"></img>
        </div>
    );
};