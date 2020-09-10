import React from 'react';


export default function SlideContent(props) {
    let Background = process.env.PUBLIC_URL + '/img/first_slide_1.png'
    return (
        <div className="container">
            <h1 className="slide-content-title">{props.title}</h1>
            <p className="slide-content-text">Cras ac mi diam. Donec condimentum eget
            egestas. Nam diam eros, convallis quis justo in,
            pellentesque arcu convallis quis justo in, dictum.
Aenean vehicula accumsan rhoncus. as </p>
            <div className="slide-content-image" style={{ backgroundImage: `url(${Background})` }}>

            </div>
        </div>
    )
}