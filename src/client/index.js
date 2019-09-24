import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => {
    return (
        <div>
            <div>Hello World!</div>
            <button
                onClick={() => {
                    alert('Hello World!');
                }}
            >
                点我
            </button>
        </div>
    );
};

ReactDOM.hydrate(<HelloWorld />, document.getElementById('root'));
