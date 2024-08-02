import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-image.png";
import { useEffect, useState } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "Software Engineer"];
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text])


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);

        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
            // 37.08
        }

    }

    return (
        <div className="bg">
        <section className="banner" id="home">
            <span>
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7} >
                                    <span className="tagline"><p>Welcome to my Portfolio!</p></span>
                                    <h1>{"Hi, I'm webcoded"} <div> <span className="wrap">{text}</span></div></h1>
                                    <p className="banner-p">I am Selin. I am here to present you my past works along with the technologies I have used, the products I have gathered
                                    and the skills I have learnt. I wanted to gather everything to take a look, present and make use of-especially for the future
                                    projects of mine. I like to think of this website as a second resume, in which I show my efforts and take pride in it no matter
                                    how easy or challenging it is. I can now move forward thanks to them.  </p>
                                    {/* <button onClick = {() => console.log('connect')}> Let's connect<ArrowRightCircle size={25}/></button> */}
                            
                        </Col>
                        <Col xs={12} md={6} xl={5} >
                            <img className="img-header" src={headerImg} alt="Header Img" />
                        </Col>
                    </Row>
                </Container>
            </span>
        </section></div>
    )
}