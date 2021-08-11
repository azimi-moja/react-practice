import React, {useEffect} from 'react';


const Main = (props) => {

    useEffect(() => {
        console.log("useeffect in Main");
    });

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
        <div>
            <div id='main' className='container'>
                <button style={btnStyle} onClick={props.toggleShowHide}>
                    Click!!!
                </button>
                {props.products}
                </div>
        </div>
    );
};

export default Main;