import React from 'react'
import {IoIosCheckmarkCircleOutline} from 'react-icons/io'
function AboutText() {
    return (
        <div className="about-text-container">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
            <h3>Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus ovident</h3>
            <p >Consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. malis nulla duis fugiat</p>
            <ul>
                <li><IoIosCheckmarkCircleOutline className="text-icons"/> Dolores quae porro consequatur aliquam, incidunt fugiat culpa.</li>
                <li><IoIosCheckmarkCircleOutline className="text-icons"/> Dolores quae porro consequatur aliquam, culpa esse aute nulla.</li>
                <li><IoIosCheckmarkCircleOutline className="text-icons"/> Dolores quae porro esse aute nulla. malis nulla duis fugiat</li>
            </ul>
        </div>
    )
}

export default AboutText
