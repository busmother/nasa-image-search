import React, { Component } from 'react'
import ImageSearch from '../components/ImageSearch'
import { Button } from 'reactstrap';
import Images from '../components/Images'


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
                <span className="search-tools">
                    <ImageSearch fetchImages={this.fetchImages} />
                    <Button variant="outline-success" onClick={this.fetchImages}>Search</Button>
                </span>
                <Images images={this.state.images} />
            </div>
        )
    }
}

export default SearchContainer