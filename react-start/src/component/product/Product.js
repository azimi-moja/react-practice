import React from 'react';
import './Product.css'

const Product = (props) => {
    return (
    <div id='main-product' className='product'>
        <p>title : {props.title}</p>
        <p onClick={props.clickPrice}>Price : {props.price}</p>
        <p>{props.children}</p>
        <input type='text' onChange={props.changeText} value={props.title} />
    </div>
    );
};


export default Product;