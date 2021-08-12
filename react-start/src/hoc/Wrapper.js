import React from 'react';



const Wrapper = (WrappedComponent, styleClass) => {
    return (props) => (
        <div styleClass={styleClass}>
            <WrappedComponent  {...props} />
        </div>
    );
}

export default Wrapper;