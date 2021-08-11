import React, {useState} from 'react';
import ProductList from './component/ProductList/ProductList';
import Main from './component/Main/Main';


const App = (props) => {

    const [productState, setProductState] = useState({
        products : [
            {id: 1, title:'test1', price:'100'},
            {id: 2, title:'test2', price:'101'},
            {id: 3, title:'test3', price:'99'}
        ]
    });

    const [showHideState, setShowHideState] = useState({
        toggleShow : false
    });

    const [showHideMainState, setShowHideMainState] = useState({
        toggleMainShow : true
    });

    const changeTextHandler = (event, id) => {
        const productIndex = productState.products.findIndex((item) => {
            return item.id = id;
        });
        console.log(id);

        const selectProduct = {
            ...productState.products[productIndex]
        };

        selectProduct.title = event.target.value;

        const newProducts = [...productState.products];
        newProducts[productIndex] = selectProduct;

        setProductState({products : newProducts});
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
                <ProductList
                    products={productState.products}
                    changeText={changeTextHandler}
                />
            </div>
        )
    } else {
        showProducts = null;
    }

    let showMain = null;

    if(showHideMainState.toggleMainShow){
        showMain = (
            <div>
                <Main
                    toggleShowHide={toggleShowHideHandler}
                    products={showProducts}
                />
            </div>
        )
    } else {
        showMain = null;
    }

    const removeMainHandler = () => {
        setShowHideMainState({
            toggleMainShow : false
        })
    }

    return (
        <div>
            <button onClick={removeMainHandler} >Remove Main</button>
            {showMain}
        </div>
    );
}

export default App;