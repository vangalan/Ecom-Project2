import React from 'react';
import './Product.css';




export default function Product(props) {
    return (
        <div className="grid-container">
            <div className="grid-item">
                <img src={props.product.img} alt={props.product.title} />
                <h3>{props.product.title}</h3>
                <p>{props.product.description}</p>
                <h4>$ {props.product.price}</h4>
            </div>
        </div>
    )
};

