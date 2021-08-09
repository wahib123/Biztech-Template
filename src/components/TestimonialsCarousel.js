import React from 'react'
import OwlCarousel from 'react-owl-carousel'
function TestimonialsCarousel() {
    const testi = [{ id: 0, name: "Larry Hanson", posi: "Investor" },
    { id: 1, name: "Mrio James", posi: "CEO & Founder" },
    { id: 2, name: "Finten Gofnes", posi: "CTO" },
    { id: 3, name: "Marcus Kell", posi: "Marketting" },
    { id: 4, name: "Williams Belly", posi: "Accounts" },
    ].map((item) => {
        return (
            <div className="testimonial-items" key={item.id}>
            <p>
                    Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore
            </p>
            <h3>{item.name}</h3>
            <h4>{item.posi}</h4>
            </div>
        )
    })
    return (
        <OwlCarousel  items={3} className="owl-theme" loop={true}  autoplay={true} autoplayTimeout={3000}>
            {testi}
        </OwlCarousel>
    )
}

export default TestimonialsCarousel
