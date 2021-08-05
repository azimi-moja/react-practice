import React from 'react';


const Product = (props) => {
    return (
    <div id='main-product'>
        <p>title : {props.title}</p>
        <p>Price : {props.price}</p>
        <br />
    </div>
    );
};


export default Product;