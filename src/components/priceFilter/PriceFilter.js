import React, { Component } from 'react';
import './PriceFilter.css';

export default class PriceFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            high: 20,
            low: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        if (event.target.name === "price-low") {
            this.setState({
                high: this.state.high,
                low: event.target.value
            })
        }
        else if (event.target.name === "price-high") {
            this.setState({
                high: event.target.value,
                low: this.state.low
            })
        }
        // fire prop onFilter 
        this.props.onFilter(this.state.high, this.state.low);
    }

    render() {
        return (
            <div className="filter-price">
                <h4>Price</h4>
                <label htmlFor="price-low">$</label>
                <input id="price-low" type="text" name="price-low" value={this.state.low} onChange={this.handleChange} />
                <span> to </span>
                <label htmlFor="price-high">$</label>
                <input id="price-high" type="text" name="price-high" value={this.state.high} onChange={this.handleChange} />
            </div>
        )
    }
};
