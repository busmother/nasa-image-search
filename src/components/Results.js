import React from 'react';

const Results = (props) => {
    return (
        <div>
            {props.images.map(image => <img key={image.url} src={image.url} alt="image" />)} 
        </div>
    )
}

export default Results