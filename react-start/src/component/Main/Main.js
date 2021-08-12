import React, { useEffect, useRef } from 'react';
import './Main.css';
import Wrapper from '../../hoc/Wrapper';


const Main = (props) => {

    const btnRef = useRef(null);

    useEffect(() => {
        console.log("useEffect in Main");

        btnRef.current.click();

        //retun function for cleanup 
        return () => {
            console.log("cleanup Main!!!");
        }
    }, [props.products]); //if use [] just run one in load component  

    const btnStyle = {
        backgroundColor: '#7b1fa2',
        color: '#ffffff',
        font: 'inherit',
        borderRadius: '3px',
        padding: '0.6 rem',
        margin: '0.6 rem auto',
        outline: 'none'
    }

    return (
        <React.Fragment>
            <div id='main' className='container'>
                <button
                    ref = {btnRef}
                    style={btnStyle}
                    onClick={props.toggleShowHide}
                >
                    Click!!!
                </button>
                {props.products}
            </div>
        </React.Fragment>
    );
};

export default Wrapper(Main, 'container');