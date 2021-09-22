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
            <div id={this.props.key} className="image-card" >
                <img className="image" key={this.props.key} src={this.props.src} alt="image" />
                <div className="title">{this.props.title}`</div>
                <div className="date">{this.props.date}</div>
                <div className="copyright">{this.props.copyright}</div>
                <div className="like"></div>
                <div className="explanation">{this.props.explanation}</div>
            </div>
        )
    }
}

export default ImageCard