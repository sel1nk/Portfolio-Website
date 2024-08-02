import { useState } from "react"
import { Container, Col, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-me-1.png"
import TrackVisibility from "react-on-screen";

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }
    const handleSubmit = () => {

    }
    return (
        <center>
            <section className="contact" id="connect" >
                <Container fluid className="contact-container">
                    <Row style={{
                        display: 'flex', textAlign: 'center',
                        position: 'relative', margin: 'auto', alignItems: 'center'
                    }}>
                        <Col xs={12} md={6} xl={7} style={{ margin: '0 10% 0 0%' }} className="get-in-touch">
                            <h2  >Get in Touch</h2>
                            <form onSubmit={handleSubmit} >
                                <Col sm={3} className="px-1" >
                                    <input className="input-val" /*style={{ margin: '20px 30px' }}*/ type="text" value={formDetails.firstName} placeholder="First name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                    <input className="input-val" type="text" value={formDetails.lastName} placeholder="Last name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={3}  >
                                    <input className="input-val" /*style={{ margin: '20px 30px' }}*/type="text" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                    <input className="input-val" type="text" value={formDetails.phone} placeholder="Phone" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col sm={3} >
                                    <input className="message" type="text" value={formDetails.message} placeholder="Message..." onChange={(e) => onFormUpdate('message', e.target.value)} />
                                </Col>
                                <Col sm={3} >
                                    <button style={{ margin: '20px' }} type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}></p>
                                    </Col>
                                }

                            </form>
                        </Col>

                        <Col xs={12} md={6} xl={7} className="contact-img" >
                            <TrackVisibility>
                                {({ isVisible }) => <div className={isVisible ? "animate__animated animate__pulse" : ""}>
                                    <img src={contactImg} alt="contact me" style={{ width: '32rem', height: '24rem', marginRight:'30%' }} />
                                </div>}

                            </TrackVisibility>
                        </Col>

                        {/* <Col style={{  padding: '40px'}}>
                        <img src={contactImg} alt="contact me" style={{ width: '20%' }} />
                        </Col> */}


                    </Row>


                    <TrackVisibility>
                        {({ isVisible }) => <div className={isVisible ? "animate__animated animate__pulse" : ""}>
                            <img src={contactImg} alt="contact me" id="media-contact-image" />
                        </div>}

                    </TrackVisibility>


                </Container>

            </section></center>
    )
}