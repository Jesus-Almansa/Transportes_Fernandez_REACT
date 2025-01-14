import React from 'react';
import './Background.css';

const hexToRgba = (hex, transparency = 1) => {
    const cleanHex = hex.replace('#', '');
    const bigint = parseInt(cleanHex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${transparency})`;
};

const Background = ({ color = "#1a2a36", transparency = 1, imageUrl = null, children }) => {
    const style = {
        backgroundColor: hexToRgba(color, transparency), // Use transparency for RGBA
        backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div style={style} className="section-background">
            <div className="background-content">{children}</div>
        </div>
    );
};

export default Background;
