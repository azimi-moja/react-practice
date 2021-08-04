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

//comment because use class
// const App =() => {
//     return (
//         <div id='main' className='container'>
//             Hello JSX!!!
//             <Product />        
//         </div>
//         );
// }

class App extends React.Component {
    render() {
        return (
            <div id='main' className='container'>
                Hello Class Compeont!!!
                <Product />        
            </div>
        );
    }
}

export default App;