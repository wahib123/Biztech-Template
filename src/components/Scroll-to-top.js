import React,{useState,useEffect} from 'react'
import {FaChevronUp} from 'react-icons/fa'

function Scrolltotop() {
    const [scrolled, setScrolled] = useState(false)
useEffect(() => {
    window.addEventListener('scroll',() =>{
        const isTop = window.scrollY <=100
        if(isTop !== true){
            setScrolled(true)
        }
        else{
            setScrolled(false)
        } 
    })
    return () => {
        window.removeEventListener('scroll')
    }
}, [])
    const scrollToTop = () => window.scrollTo({top:0, behavior:"smooth"})
    return (
        <div className="scroll-to-top" onClick={scrollToTop} style={scrolled ? {opacity:1,display:"inline"} : {opacity:0,pointerEvents:"none"}}>
            <FaChevronUp/>
        </div>
    )
}

export default Scrolltotop