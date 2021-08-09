import React, { useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
function ImageGallery() {
    const [photoIndex, setphotoIndex] = useState(0)
    const [isOpen, setOpen] =useState(false)
    let images = [require('../css/img/1.jpg'),
    require('../css/img/2.jpg'),
    require('../css/img/3.jpg'),
    require('../css/img/4.jpg'),
    require('../css/img/5.jpg'),
    require('../css/img/6.jpg'),
    require('../css/img/7.jpg'),
    require('../css/img/8.jpg') 
    ]
    const showGallery = (id) => {
        setphotoIndex(id)
        setOpen(true)
    } 
    const images2 = images.map((image,id) => {
        return (
            <Col key={id} lg={3} className="img-container" style={{ padding: "0px", overflow: "hidden" }}>
                    <Image src={image} alt="asd" className="image-gallery" onClick={() => showGallery(id)}/>
                </Col>
        )
    })
    return (
        <Container style={{ position: "relative" }}>
            <Row>
                {images2}
            </Row>
            {isOpen && (    
            <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setOpen(false)}
            onMovePrevRequest={() =>
              setphotoIndex( (photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setphotoIndex((photoIndex + 1) % images.length)
            }
          />)}
        </Container>
    )
}

export default ImageGallery
