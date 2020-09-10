import React, { useState } from 'react'

import SlideContent from './slideContent';
import '../../App.css'

export default function Slider() {

    let sliderArr = [<SlideContent title="Slide 1" />, <SlideContent title="Slide 2" />, <SlideContent title="Slide 3" />, <SlideContent title="Slide 4" />, <SlideContent title="Slide 5" />]
    const [x, setX] = useState(0)
    const goUp = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    }

    const goDown = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100)

    }

    const goTo = (event) => {
        setX((1 - (event.target.value)) * 100);
    }


    return (
        <div className="slider">
            {
                sliderArr.map((item, index) => {
                    return (
                        <div className="slide" style={{
                            transform: `translateY(${x}%)`
                        }}>
                            <br />
                            {item}
                        </div>
                    )
                })
            }
            <button id="go-up" onClick={goUp}>Up</button>
            <button id="go-down" onClick={goDown}>Down</button>
            <div id="slide-count">
                <button onClick={goTo} value={1} >1</button>
                <button onClick={goTo} value={2}>2</button>
                <button onClick={goTo} value={3}>3</button>
                <button onClick={goTo} value={4}>4</button>
                <button onClick={goTo} value={5}>5</button>
            </div>

        </div>
    )
}