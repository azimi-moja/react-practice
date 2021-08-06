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

    const btnStyle = {
        backgroundColor: '#7b1fa2',
        color: '#ffffff',
        font: 'inherit',
        borderRadius: '3px',
        padding: '0.6 rem',
        margin: '0.6 rem auto',
        outline: 'none'
    }

    const [productState, setProductState] = useState({
        products : [
            {title:'test1', price:'100'},
            {title:'test2', price:'101'},
            {title:'test3', price:'99'}
        ]
    });

    const [showHideState, setShowHideState] = useState({
        toggleShow : false
    });

    const changeTextHandler = (event) => {
        setProductState({
            products : [
                {title: 'tets1', price: '115'},
                {title: event.target.value, price: '121'},
                {title: 'test3', price: '131'}
            ]   
        })
    }

    const changePriceHandler = (newTitle) => {
        setProductState({
            products : [
                {title: newTitle, price:'115'},
                {title:'test2', price:'121'},
                {title:'test3', price:'131'}
            ]   
        })
    }

    let showProducts = null;

    const toggleShowHideHandler = () => {
        setShowHideState({
            toggleShow : !(showHideState.toggleShow)
        })
    }

    if(showHideState.toggleShow){
        showProducts = (
            <div>
                <Product
                title={productState.products[0].title}
                price={productState.products[0].price}
                clickPrice={() => changePriceHandler("change title")}
                />
                <Product 
                title={productState.products[1].title}
                price={productState.products[1].price}
                changeText={changeTextHandler}
                >
                    <p>test of props children</p>
                </Product>
                <Product 
                title={productState.products[2].title}
                price={productState.products[2].price}
                clickPrice={changePriceHandler.bind(this, "new Title2")}
                />
            </div>
        )
    } else {
        showProducts = null;
    }

    return (
    <div id='main' className='container'>
        <button style={btnStyle} onClick={toggleShowHideHandler}>
            Click!!!
        </button>
        {showProducts}
    </div>
    );
}

export default App;