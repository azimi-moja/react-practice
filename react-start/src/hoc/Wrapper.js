import React from 'react';

const Wrapper = (props) => {
    const wrapperStyle = {
        margin: 'auto',
        textAlign: 'center'
    }
    return (
        <div style={wrapperStyle}>{props.children}</div>
    );
}

export default Wrapper;