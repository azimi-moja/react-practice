import React from 'react';



const Wrapper = (WrappedComponent, styleClass) => {
    return (props) => (
        <div styleclass={styleClass}>
            <WrappedComponent  {...props} />
        </div>
    );
}

export default Wrapper;