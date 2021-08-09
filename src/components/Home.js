import React from 'react'
import Banner from './Banner'
import About from './About/About'
import Services from './Services'
import Clients from './Clients'
import Testimonials from './Testimonials'
import GetServices from './GetServices'
function Home() {
    window.scrollTo({top:0, behavior:"smooth"})
    return (
        <React.Fragment>
            <Banner/>
            <About />
            <Services />
            <Clients />
            <Testimonials />
            <GetServices />
        </React.Fragment>
    )
}

export default Home
