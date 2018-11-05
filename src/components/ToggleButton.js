import React from 'react';

const ToggleButton=props=>(
    <button className="toggle-btn" onClick={props.click}>
        <div className="toggle-btn-line" />
        <div className="toggle-btn-line" />
        <div className="toggle-btn-line" />
    </button>
);

export default ToggleButton