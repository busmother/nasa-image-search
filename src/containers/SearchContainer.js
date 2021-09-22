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

    fetchImages = (query = "moon", searchType = "concept_tags") => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=VodNvDXzlgg3cT0dgOn9JuFzkcQLdDhEhfbwinEI&count=5`)
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
            <div className="search-container">
                <Button onClick={this.fetchImages}>Search</Button>
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
        )
    }
}

export default SearchContainer