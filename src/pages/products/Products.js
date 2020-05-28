import React, { Component } from "react";
import ProductsInfo from './Products.json';
// import './Products.css';
import Product from '../../components/product/Product';
import PriceFilter from '../../components/priceFilter/PriceFilter';

//create a component for products *live in component folder
//element for filter for, price.
//Drop down brand filter.
//double text price filter. 
//Filter needs to update state.
//handle filter change method.




export default class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredProducts: []
    }
    this.filterPrice = this.filterPrice.bind(this);
  }

  componentDidMount() {
    this.filterPrice();
  }

  filterPrice(high, low) {
    this.setState({
      filteredProducts: ProductsInfo.filter((product) => {
        // is product less than high and greater than low.
        if (product.price > high) {
          return false;
        } else if (product.price < low) {
          return false;
        }
        return true;
      })
    })
  };

  render() {
    return (
      <div>
        <PriceFilter onFilter={this.filterPrice} />
        <div className="grid-container">
          {this.state.filteredProducts.map((productInfo, index) => {
            return <Product product={productInfo} />
          })}
        </div>
      </div>
    );
  }
};
