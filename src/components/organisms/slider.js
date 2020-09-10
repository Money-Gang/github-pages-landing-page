import React, { useState } from 'react'

import SlideContent from './slideContent';
import SlideContent2 from './slideContent2';
import '../../App.css'

export default function Slider() {

    let sliderArr = [<SlideContent title="Hype Mapper: the new way to resell" path="/img/first_slide_1.png" />, <SlideContent2 title="Slide 2" path="/img/first_slide_2.png" />, <SlideContent2 title="Slide 3" path="/img/first_slide_3.png" />, <SlideContent title="Slide 4" path="/img/first_slide_4.png" />, <SlideContent title="Slide 5" path="/img/first_slide_5.png" />]
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