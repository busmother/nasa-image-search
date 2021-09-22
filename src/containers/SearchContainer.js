import React, { Component } from 'react'
import { Button } from 'reactstrap';
import ImageCard from '../components/ImageCard'


class SearchContainer extends Component {
    constructor() {
        super();
        this.state = {
            images: []
        }
    }

    fetchImages = () => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=VodNvDXzlgg3cT0dgOn9JuFzkcQLdDhEhfbwinEI&count=10`)
        .then(response => {
            if(!response.ok) {
                throw Error("Error fetching the space pictures ;(");
            }
            return response.json()
            .then(allImages => {
                this.setState({ images: allImages });
            })
            .catch(err => { 
                throw Error(err.message);
            });
        });
    }

    componentDidMount() {
        this.fetchImages()
    }

    render(){
        return (
            <div>
                <div className="button-container">
                    <Button onClick={this.fetchImages}>Load new images</Button>
                </div>
                <div className="search-container">
                    <div className="grid-container">
                        {this.state.images.map(
                            image => <ImageCard 
                            key={image.url} 
                            src={image.url} 
                            title={image.title} 
                            date={image.date} 
                            copyright={image.copyright} 
                            explanation={image.explanation}/>
                        )} 
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchContainer