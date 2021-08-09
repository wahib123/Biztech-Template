import React from 'react'
import BannerHeading from './Banner-Heading'
import ImageGallery from './ImageGallery'
function PortfolioPage() {
    window.scrollTo({top:0, behavior:"smooth"})
    return (
        <>
            <BannerHeading heading="Portfolio"/>
            <ImageGallery />
        </>
    )
}

export default PortfolioPage
