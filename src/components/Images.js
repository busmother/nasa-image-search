import React from 'react';
import ImageCard from './ImageCard'

const Images = (props) => {
    return (
        <div className="grid-container">
            {props.images.map(
                image => <ImageCard 
                key={image.url} 
                src={image.url} 
                title={image.title} 
                date={image.date} 
                copyright={image.copyright} 
                explanation={image.explanation}/>
            )} 
        </div>
    )
}

export default Images