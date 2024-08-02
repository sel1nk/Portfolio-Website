import { Container, Row, Col } from "react-bootstrap"
import img1 from "../assets/img/ed1.png";
import img2 from "../assets/img/ed2.png";
import img3 from "../assets/img/ed3.png";
import colorsharp from "../assets/img/color-sharp.png"
import TrackVisibility from "react-on-screen";
export const Experience = () => {
    return (
        <section className="other" id="experience">
             
            {/* <center><h2 >Education</h2></center>
            <hr></hr>
            <Container fluid className="other-container container-fluid">
                <Row className="align-items-center education">
                    <Col xs={12} md={6} xl={7} >
                        <h1>Işık University</h1>
                        <p>Software Engineering Major</p>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <h1>Işık University</h1>
                        <p>Mechatronics Engineering Minor</p>
                    </Col>
                    <Col xs={12} md={6} xl={7} >
                        <h1>Malardalens University</h1>
                        <p>Software Engineering Erasmus</p>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <h1>Terakki Tepeören High School</h1>
                        <p>High School</p>
                    </Col>
                </Row>
            </Container> */}

            <TrackVisibility>{({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__pulse" : ""}>
                    <center>
                        <h2>Experience</h2>
                    </center>
                </div>}
            </TrackVisibility>

            <hr></hr>

            <Container className="other-container">
                <Row className="align-items-center experience head">
                    <Col xs={12} md={6} xl={7} >
                        <h1>Panasonic Electric Works</h1>
                        <p>Intern</p>
                        <img src={img1} alt="Img" />
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <h1>Işık University</h1>
                        <p>Student Assistant</p>
                        <img src={img2} alt="Img" />
                    </Col>
                    <Col xs={12} md={6} xl={7} >
                        <h1>Siemens AG</h1>
                        <p>Intern</p>
                        <img src={img3} alt="Img" />
                    </Col>
                </Row>
            </Container>




        </section>
    )
}