import React from 'react';
import './Background.css';

const Background = ({ color, children }) => {
    return (
        <div style={{ backgroundColor: color }} className="section-background">
            {children}
        </div>
        
    );
};

export default Background;
