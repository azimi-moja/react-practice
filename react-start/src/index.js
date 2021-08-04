import React from 'react';
import ReactDOM from 'react-dom';

const container = React.createElement(
'div',
{id: 'main', className : 'container'},
'Hello World!!' 
);

ReactDOM.render(container, document.getElementById('root'));

