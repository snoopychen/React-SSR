import React from 'react';

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

export default HelloWorld;
