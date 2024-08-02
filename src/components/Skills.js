import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container, Row, Col} from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png"
import TrackVisibility from "react-on-screen";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className="skill" id="skill">
            <Container>
              <Row className="inline">
                <Col>
                  <div className="skill" id="skills">
                    <TrackVisibility> 
                    {({isVisible}) =><div className={isVisible ? "animate__animated animate__pulse" : ""}>
                    <h2>
                      Skills
                    </h2>
                    <p>
                    The industry contains various technologies & languages within. These are the ones that I have managed to have an experience in -for now.
                   </p>
                    </div>
                    }
                    </TrackVisibility>
                   <Carousel responsive={responsive} infinite={true} className="skill-slider">
                    <div className = "item">
                      <img  src={meter1} alt="Image"/>
                      <h5>Web Development</h5>
                    </div>
                    <div className = "item">
                      <img  src={meter3} alt="Image"/>
                      <h5>Frontend Development</h5>
                    </div>
                    <div className = "item">
                      <img  src={meter2} alt="Image"/>
                      <h5>JavaScript, HTML, CSS</h5>
                    </div>
                    <div className = "item">
                      <img  src={meter2} alt="Image"/>
                      <h5>React</h5>
                    </div>
                    <div className = "item">
                      <img  src={meter1} alt="Image"/>
                      <h5>Backend Development</h5>
                    </div>
                    <div className = "item">
                      <img  src={meter3} alt="Image"/>
                      <h5>Python</h5>
                    </div>
                    <div className = "item">
                      <img  src={meter3} alt="Image"/>
                      <h5>Java</h5>
                    </div>
                    <div className = "item">
                      <img  src={meter1} alt="Image"/>
                      <h5>Flask</h5>
                    </div>
                    <div className = "item">
                      <img  src={meter1} alt="Image"/>
                      <h5>C#</h5>
                    </div>
                    <div className = "item">
                      <img  src={meter2} alt="Image"/>
                      <h5>.NET</h5>
                    </div>
                   </Carousel>
                  </div>
                </Col>
              </Row>
            </Container>
            < img className="background-image-left" src={colorSharp} />
        </section>

      )
}