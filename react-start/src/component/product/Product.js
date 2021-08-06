import React from 'react';
import './Product.css'

const Product = (props) => {
    return (
    <div id='main-product' className='product'>
        <p>title : {props.title}</p>
        <p>Price : {props.price}</p>
        <p>{props.children}</p>
        <br />
    </div>
    );
};


export default Product;