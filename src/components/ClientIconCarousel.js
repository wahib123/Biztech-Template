import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Image } from 'react-bootstrap'
import client1 from '../css/img/client1.png'
import client2 from '../css/img/client-2.png'
import client3 from '../css/img/client-3.png'
import client4 from '../css/img/client-4.png'
import client5 from '../css/img/client-5.png'
import client6 from '../css/img/client-6.png'
function ClientIconCarousel() {
    let icons = [client1, client2, client3, client4, client5, client6]
    icons = icons.map((icon, id) => {
        return (
                <Image key={id} src={icon} alt="client-icon" className="client-icons" />
        )
    })
    return (
        <OwlCarousel items={6} className="owl-theme" loop={true} dots={false} margin={8} autoplay={true} autoplayTimeout={3000} >
            {icons}
        </OwlCarousel>   
    )
}

export default ClientIconCarousel
