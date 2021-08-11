import React from 'react';



const Wrapper = (WrappedComponent, styleClass) => {
    return (props) => (
        <div style={styleClass}>
            <WrappedComponent />
        </div>
    );
}

export default Wrapper;