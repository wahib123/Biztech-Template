import React from 'react'
import {Image} from 'react-bootstrap'
import image from '../../css/img/about.svg'
function AboutImage({img}) {
    return (
        <Image src = {img ? img : image} alt="about-image" className="about-image"/>
    )
}

export default AboutImage
