import React from 'react';
import './Background.css';

const Background = ({ color }) => {
    return (
        <div className="background" style={{ backgroundColor: color }}>
            {/* Aquí puedes agregar el contenido de la sección */}
        </div>
    );
};

export default Background;