import React, { Component } from "react";
import './Home.css';


export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0
        }
        this.carouselImages = ['image1.jpeg', 'image4.jpg', 'image5.jpg'];
        this.slideInterval = 5000;
        this.moveForward = this.moveForward.bind(this);
        this.startPlayback = this.startPlayback.bind(this);
    }
    moveForward() {
        if (this.state.currentSlide === this.carouselImages.length - 1) {
            this.setState({
                currentSlide: 0
            });
        } else {
            this.setState({
                currentSlide: this.state.currentSlide + 1
            });
        }

    }
    startPlayback() {
        setInterval(this.moveForward, this.slideInterval);
    }

    componentDidMount() {
        this.startPlayback();
    }
    render() {
        return <div>
            <div id="carousel">
                <figure className="visible">
                    <img className="slideshow" src={"./img/"+this.carouselImages[this.state.currentSlide]} alt="img" />
                </figure>
            </div>

        </div>

    }
}
