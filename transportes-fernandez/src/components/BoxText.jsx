import React from 'react';
import PropTypes from 'prop-types';
import './BoxText.css';
import image from '../assets/images/truck.png';

const BoxText = ({ title, logo, children }) => {
    return (
        <div className="enLinea">
            <div className="boxText fondoAzul"> {/* Cambiado de <p> a <div> */}
                <img src={image} alt={title || 'Imagen'} className="boxTextImage" />
                {children}
            </div>
        </div>
    );
};


BoxText.propTypes = {
    title: PropTypes.string, // Ahora es opcional
    imageUrl: PropTypes.string,
    children: PropTypes.node
};

export default BoxText;
