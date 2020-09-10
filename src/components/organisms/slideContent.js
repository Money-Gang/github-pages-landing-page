import React from 'react';

export default function SlideContent(props) {
    return (
        <div className="container">
            <h1 className="slide-content-title">{props.title}</h1>
            <p className="slide-content-text">Cras ac mi diam. Donec condimentum eget
            egestas. Nam diam eros, convallis quis justo in,
            pellentesque arcu convallis quis justo in, dictum.
Aenean vehicula accumsan rhoncus. </p>
            <div className="slide-content-image">
                <p>IMAGE HERE</p>
            </div>
        </div>
    )
}