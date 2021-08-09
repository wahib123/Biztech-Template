import React from 'react'
import BannerHeading from './Banner-Heading'
import ContactForm from './ContactForm'
import Text from './Text'
import { Container } from 'react-bootstrap'

function ContactPage() {
    window.scrollTo({top:0, behavior:"smooth"})
    return (
        <>
        <BannerHeading heading="Contact"/>
        <Container className="testimonials">
        <Text />
        <ContactForm />
        </Container>
        </>
    )
}

export default ContactPage
