import { Container, Row, Col } from "react-bootstrap";
import {useState, useEffect} from "react";
import {ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0); 
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Software Engineer", "Rust Developer", "UI/UX Developer", "Java Developer",];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(400 - Math.random() * 100); 
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
            return;
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
                    <Col xs={12} >
                    <span className ="tagline">{text}</span>
                        <h1> Hi, I'm Osvaldo Canales</h1>
                        <p>
                            I am currently a student at UCCS pursuing a B.S in Computer Science. I live in Colorado 
                            Springs working as a junior software engineer at Parsons Corporations. My projects include UX design, UI animations 
                            and manipulating data. I am always working on new projects to sharpen my skills and learn new things. In my spare time I like 
                            to work out, play video games and watch anime. I'm always down to hear about new projects, so feel free to drop me a line. 
                        </p>
                        <button onClick={() => {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                            }
                            }}> Send me a message <ArrowRightCircle size = {25} /></button>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}