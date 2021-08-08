import React from 'react';
import Product from '../Product/Product';


const ProductList = (props) => {
    
    return(
        props.products.map((product) => {
            return <Product 
            price={product.price} 
            title={product.title}
            key={product.id}
            changeText={(event) => props.changeText(event, product.id)} />
        })
    );
}

export default ProductList;
