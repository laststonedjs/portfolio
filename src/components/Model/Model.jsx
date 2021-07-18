import React from 'react';
import ReactDOM from 'react-dom';
import './Model.css';

const Model = (props) => {
    return ReactDOM.createPortal(
        <div className="model-overlay">
            <h1>I am the model!</h1>
        </div>,
        document.getElementById('model')
        
    );
};

export default Model;
