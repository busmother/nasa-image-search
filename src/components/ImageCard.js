import React, { Component } from 'react';

class ImageCard extends React.Component {
    constructor() {
        super();
        this.state = {
            liked: false
        }
    }
    
    render(){
        return (
            <ul id={this.props.key} className="image-card" >
                <img className="image" key={this.props.key} src={this.props.src} alt="image" />
                <h3 className="title">{this.props.title}</h3>
                <h4 className="date">{this.props.date}</h4>
                <h4 className="copyright">{this.props.copyright}</h4>
                <div className="like"></div>
                <h5 className="explanation">{this.props.explanation}</h5>
            </ul>
        )
    }
}

export default ImageCard