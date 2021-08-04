import React from 'react';
import Product from './component/product/Product.js'

//comment becuase use jsx
// const App = () => {
//     return React.createElement(
//         'div',
//         {id: 'main', className : 'container'},
//         'Hello World!!' 
//         );
// }

const App =() => {
    return (
        <div id='main' className='container'>
            Hello JSX!!!
            <Product />        
        </div>
        );
}

export default App;