import React from 'react'
import { Container,  Row, Col, Form, Button } from 'react-bootstrap'
import { GoLocation } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
function ContactForm() {
    return (
        <>
    <Container >
        <Container className="contact-form">
        <Row>
            <Col lg={5}>
            <div className="contact-address">
                <GoLocation />
                <h3>Address</h3>
                <address>MN-12 Lincon Street, NewYork 12356, USA</address>
            </div>
            <div className="contact-address">
                <FaPhoneAlt />
                <h3>PHONE NUMBER</h3>
                <p>+1 2345 67890 12</p>
            </div>
            <div className="contact-address">
                <IoIosMail />
                <h3>Address</h3>
                <p>name@website.com</p>
            </div>
            </Col>
            <Col>
                <Form>
                    <Form.Group>
                        <Form.Control type="text" size="md" placeholder="FULL NAME"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="email" size="md" placeholder="EMAIL"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as="textarea" rows="10" placeholder="MESSAGE"/>
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" size="md" className="form-btn">Send</Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Container>
    <Container className="map">
    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d387191.33750346623!2d-73.979681!3d40.6974881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1541477355474" width="100%" height="350" frameBorder="0" allowFullScreen=""></iframe>
    </Container>
    </Container>
    </>
    )
}

export default ContactForm
