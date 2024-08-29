import { Container, Row, Col } from "react-bootstrap";
import {useState, useEffect} from "react";
import {ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '..//assets/img/header-img.svg';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0); //Loop through toRotate phrases
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Front/End Developer", "Software Engineer", "UI/UX Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(400 - Math.random() * 100); //Set speed for each letter
    const period = 2000; //Time Passed between each word

    // Responsible for typing and deleting 
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta )
        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length; 
        let fullText = toRotate[i];

        //If word is being deleted then subtract a letter 
        //If word is being added then add a letter 
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        //If text is deleting then set increase speed
        if (isDeleting) { 
            setDelta(prevDelta => prevDelta /2)
        }
        //If Text is not deleting and text reaches full, then start deleting text
        if (!isDeleting && updatedText === fullText ) {
            setIsDeleting(true);
            setDelta(period)
            //If it is deleting and reaches end of text, then stop deleting and move to next word
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            //setIndex(1);
            setDelta(500);
        }
    }

    return ( 
        <section className= "banner" id ="home" >
            <Container>
                <Row className ="align-items-center">
                    <Col xs={12} md={6} xl={7} >
                        <span className ="tagline">Welcome to my Portfolio</span>
                        <h1>{"" }<span className="wrap"> {text} </span></h1>
                        <p>Hi. I'm Osvaldo Canales and I am currently a third year at UCCS based in Colorado Springs, Colorado with a passion to design and code beautiful simple things, and I love what I do.</p>
                        <button onClick={() => console.log('connect')}>Lets Connect <ArrowRightCircle size = {25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}