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
                <Product title='test1' price='100' />
                <Product title='test2' price='101' />
                <Product title='test3' price='99' />
            </div>
        );
    }
}

export default App;