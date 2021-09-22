import React from 'react';

const ImageCard = (props) => {
    return (
        <div id={props.key} className="image-card" >
            <img className="image" key={props.key} src={props.src} alt="image" />
        </div>
    )
}

export default ImageCard