import React from 'react'
import Title from './Title'
import Text from './Text'
import TestimonialsCorousel from './TestimonialsCarousel'
import {Container} from 'react-bootstrap'

function Testimonials() {
    return (
        <Container className="testimonials">
            <Title title="testimonials" />
            <Text />
            <TestimonialsCorousel />
        </Container>
    )
}

export default Testimonials
