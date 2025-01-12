
import { useParams } from "react-router-dom"
import sudokuMainPage from "../assets/img/Sudoku_main.png";
import backTrackingAlg from "../assets/img/backtracking1.png";
import sudokuSolve from "../assets/img/Sudoku_solve.png";
import sentiment from "../assets/img/Sentiment_Analysis.png";
import nltk_process from "../assets/img/nltk_process.png";
import amazon_foods from "../assets/img/Amazon_Food.png";
import amazon_sheets from "../assets/img/Amazon_sheets.png";
import { useInView } from "react-intersection-observer"
import { useEffect } from "react";

export const ProjectDetails = () => { 
    const { id } = useParams();

    // Scroll to the top on page load
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []); // Runs once when the component is mounted

    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    
    const projectData = { 
        "sudoku-solver": { 
            title: "Sudoku Solver",
            description: "This project demonstrates the implementation of a Sudoku game using Python, featuring an interactive GUI and an algorithm to automatically solve puzzles.",
            imgSrc: sudokuMainPage,
            details: " ",
            sections: [
                {
                    type: "link",
                    label: "Visit Github Repo",
                    href: "https://github.com/OsvaldoCanales/Sudoku_Project"
                },
                {
                    type: "list",
                    items: ["Python", "PyGame Library", "Backtracking Algorithm"],
                },
                {
                    type: "text",
                    title: "Implementing GUI using PyGame ",
                    content: 
                          "The graphical user interface (GUI) for the Sudoku Solver was built using PyGame, a library that enables developers to create games and interactive graphics in Python. Through this interface, players can interact with the Sudoku grid by filling in numbers. Each interaction dynamically updates the board, providing a visual and user-friendly experience."
                },
                {
                    type: "image",
                    imgSrc: backTrackingAlg,
                },
                {
                    type: "text",
                    title: "Using a Backtracking Algorithm",
                    content: 
                        "The core of the Sudoku Solver relies on a backtracking algorithm. This algorithm systematically explores all possibilities for filling in the grid by trying each number, backtracking when invalid configurations are found, and eventually solving the puzzle. The backtracking process is made visible to the player, showing each step and decision."
                },
                { 
                    type: "image",
                    imgSrc: sudokuSolve,

                },
                {
                    type: "text",
                    title: "Project Outcome",
                    content: 
                         "The project successfully implemented an interactive Sudoku Solver with a single puzzle board. Players can either solve the puzzle themselves or use the backtracking algorithm by pressing SPACE during the game to see the solution being applied step-by-step. Future plans include adding a variety of Sudoku boards for players to choose from."
                }
            ]
        },
        "sentiment-analysis": { 
            title: "Sentiment Analysis",
            description: "This project demonstrates a Sentiment Analysis classifier built using Python, " +
                            "NLTK's VADER, and HuggingFace's Roberta transformers to classify the sentiment " +
                            "of Amazon customer reviews. The project compares results between the two models " +
                            "to highlight the advantages and challenges of each approach.",
            imgSrc: amazon_foods,
            details: "Sentiment analysis is a crucial NLP tool for analyzing text data and extracting " +
                    "emotions or attitudes from written content. I focused on classifying " +
                    "Amazon product reviews into positive, negative, or neutral sentiments using " +
                    "state-of-the-art models. The VADER model provides an efficient, rule-based " +
                    "approach, while HuggingFace's Roberta model leverages deep learning to understand " +
                    "nuanced language, such as sarcasm and context.",
            sections: [ 
                {
                    type: "link",
                    label: "Visit Github Repo",
                    href: "https://github.com/OsvaldoCanales/Sentiment_Project"
                },
                {
                    type: "list",
                    items: ["Python", "HuggingFace Pipeline", "VADER", "Roberta Pretrained Model"],
                },
                {
                    type: "image",
                    imgSrc: nltk_process,
                },
                {
                    type: "text",
                    title: "Using NLTK's Sentiment Analyzer ",
                    content: 
                    "NLTK's SentimentIntensityAnalyzer (VADER) was utilized to generate polarity scores " +
                    "(positive, neutral, negative, and compound) for the text. The compound score provides " +
                    "an overall sentiment rating for a given review. VADER, being rule-based, is faster " +
                    "and works well for simple text analysis but struggles with complex context, sarcasm, " +
                    "and word relationships.",
                },
                {
                    type: "image",
                    imgSrc: sentiment,
                },
                {
                    type: "text",
                    title: "Roberta Pretrained Model",
                    content: 
                          "The HuggingFace Roberta model was implemented for its superior understanding of " +
                "natural language nuances, such as sarcasm, context, and relationships between " +
                "words. Roberta provides three output probabilities: negative, neutral, and positive. " +
                "It uses transformers and a tokenization mechanism to process the text efficiently. " +
                "This project utilizes the 'cardiffnlp/twitter-roberta-base-sentiment-latest' model, " +
                "trained on a vast dataset of tweets.",
                },
                {
                    type: "image",
                    imgSrc: amazon_sheets,
                },
                {
                    type: "text",
                    title: "Project Outcome",
                    content: "The comparison between VADER and Roberta models highlights the trade-offs between " +
                "rule-based and deep-learning approaches. VADER is faster for simple applications, " +
                "while Roberta excels in handling complex sentiment scenarios. The project results " +
                "were saved in Excel and visualized using Seaborn to analyze sentiment scores across " +
                "thousands of Amazon reviews. This project demonstrates the importance of model " +
                "selection in NLP tasks, depending on the complexity of the text and required insights.",
                }

            ]
        },
    };

    const project = projectData[id];

    if (!project) { 
        return<p> Project not found. </p>
    }

    return ( 
        <div className="project-details">
            <h1>{project.title}</h1>
            <p>{project.description}</p>

             {/* Main Image  */}
            <div
                ref={ref}
                className={`fade-in-container ${inView ? "visible" : ""}`}
            >
                <img src={project.imgSrc} alt={project.title} className="hover-effect" />
            </div>

            <p> {project.details}</p>


            {/* Render Dynamic Sections */}
            {project.sections && 
                project.sections.map((section, index) => {
                    if (section.type === "link") { 
                        return ( 
                            <a
                                key = {index}
                                href = {section.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                {section.label}
                            </a>
                        );
                    }
                    if (section.type === "list") { 
                        return ( 
                            <ul key={index} className={`project-list fade-in-container" ${inView ? "visible": ""}`}>
                                {section.items.map((item, idx) => (
                                    <li key={idx} className={inView ? "visible": ""}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        );
                    }
                    if (section.type === "text") { 
                        return ( 
                            <div key={index} className={`project-section-text fade-in-container ${inView ? "visible": ""}` }> 
                                {<h2>{section.title}</h2>}
                                <p>{section.content}</p>
                            </div>
                        );
                    }
                    if (section.type === "image") { 
                        return (
                            <div
                              key={index}
                              className={`fade-in-container ${inView ? "visible" : ""}`}
                              ref={ref}
                            >
                              <img src={section.imgSrc} alt={`Section ${index}`} className="hover-effect" />
                            </div>
                          );
                    }
                    return null;
                })}
        </div>
    );
};