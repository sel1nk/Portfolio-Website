import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import projImg1 from "../assets/img/projImg1.jpg";
import projImg2 from "../assets/img/projImg2.jpg";
import projImg3 from "../assets/img/projImg3.jpg";
import projImg4 from "../assets/img/projImg4.jpg";
import projImg5 from "../assets/img/projImg5.jpg";
import projImg6 from "../assets/img/projImg6.jpg";
import projImg7 from "../assets/img/projImg7.jpg";
import projImg8 from "../assets/img/projImg8.jpg";
import colorsharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useState } from 'react';


export const Projects = () => {
    const [activeTab, setActiveTab] = useState("first");

    const projects = [
        {
            title: "Sunrise-Sunset Calculator",
            technologies: ".NET, Winforms, C#",
            imgUrl: projImg1,
        },
        {
            title: "Pet Adoption Website",
            technologies: "Flask, Node.js, SQL, Python",
            imgUrl: projImg2,
        },
        {
            title: "Spinning Wheel",
            technologies: "React, JavaScript",
            imgUrl: projImg3,
        },
        {
            title: "Hogwarts Newspaper",
            technologies: "HTML, CSS, Bootstrap",
            imgUrl: projImg4,
        },
    ]
    const projects2 = [
        {
            title: "Receipt",
            technologies: "HTML, CSS",
            imgUrl: projImg5,
        },
        {
            title: "Registration From",
            technologies: "HTML, CSS",
            imgUrl: projImg6,
        },

        {
            title: "Car Rental",
            technologies: "Java",
            imgUrl: projImg7,
        },
        {
            title: "Demo Website",
            technologies: "HTML, CSS",
            imgUrl: projImg8,
        },
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>{({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__pulse" : ""}>
                                <h2>Projects</h2>
                                    <p>
                                        These are some my projects from different stages of my software development journey.
                                        Some, I have implemented out of necessity and some, out of curiosity.
                                        Every one of each thought me something either small or big.
                                    </p>
                            </div>}
                        </TrackVisibility>

                        <Tab.Container id="projects-tabs" defaultActiveKey="first" onSelect={(k) => setActiveTab(k)}>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link className="f" eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content className="proj-card-span ">
                                <Tab.Pane eventKey="first" id="tab-projects-tabs-tab-first">
                                    <Row className="align-items-center-projects" style={{ display: activeTab === "first" ? "flex" : "none" }}>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second" id="projects-tabs-tab-second">
                                    <Row className="align-items-center-projects" style={{ display: activeTab === "second" ? "flex" : "none" }}>
                                        {
                                            projects2.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right " src={colorsharp} alt="Image"/>
      
    </section>
    )
}

