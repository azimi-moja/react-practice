import React, {useEffect} from 'react';
import './Product.css'

const Product = (props) => {

    let inputRef = React.createRef();

    useEffect(() => {
        inputRef.current.focus();
    });

    return (
    <div id='main-product' className='product'>
        <p>title : {props.title}</p>
        <p onClick={props.clickPrice}>Price : {props.price}</p>
        <p>{props.children}</p>
        <input
            ref= {inputRef} 
            type='text' 
            onChange={props.changeText} 
            value={props.title} />
    </div>
    );
};


export default Product;