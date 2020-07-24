import React from 'react';
import withClass from './hoc/withClass';

function MyComponent(props){
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>Hello from my component</h3>
        </div>
    );
}

export default withClass(MyComponent,'solidBorder');