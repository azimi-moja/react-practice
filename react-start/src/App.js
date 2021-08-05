import React, {useState} from 'react';
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

//comment for use hook
// class App extends React.Component {
//     state = {
//         products : [
//             {title:'test1', price:'100'},
//             {title:'test2', price:'101'},
//             {title:'test3', price:'99'}
//         ]
//     };

//     changePriceHandler = () => {
//         this.setState({
//             products : [
//                 {title:'test1', price:'120'},
//                 {title:'test2', price:'118'},
//                 {title:'test3', price:'115'}
//             ]
//         });
//     }

//     render() {
//         return (
//             <div id='main' className='container'>
//                 <Product 
//                 title={this.state.products[0].title}
//                 price={this.state.products[0].price}
//                 />
//                 <Product 
//                 title={this.state.products[1].title}
//                 price={this.state.products[1].price}
//                 >
//                     <p>test of props children</p>
//                 </Product>
//                 <Product 
//                 title={this.state.products[2].title}
//                 price={this.state.products[2].price}
//                 />
//                 <button onClick={this.changePriceHandler}>
//                     Click!!!
//                 </button>
//             </div>
//         );
//     }
// }


const App = (props) => {
    const [productState, setProductState] = useState({
        products : [
            {title:'test1', price:'100'},
            {title:'test2', price:'101'},
            {title:'test3', price:'99'}
        ]
    });

    const changePriceHandler = () => {
        setProductState({
            products : [
                {title:'test1', price:'115'},
                {title:'test2', price:'121'},
                {title:'test3', price:'131'}
            ]   
        })
    }

    return (
    <div id='main' className='container'>
        <Product
        title={productState.products[0].title}
        price={productState.products[0].price}
        />
        <Product 
        title={productState.products[1].title}
        price={productState.products[1].price}
        >
            <p>test of props children</p>
        </Product>
        <Product 
        title={productState.products[2].title}
        price={productState.products[2].price}
        />
        <button onClick={changePriceHandler}>
            Click!!!
        </button>
    </div>
    );
}

export default App;