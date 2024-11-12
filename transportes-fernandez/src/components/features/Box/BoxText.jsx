import React from 'react';
import PropTypes from 'prop-types';
import './BoxText.css';

const BoxText = ({ title, imageUrl, children, colorClass }) => {
    return (
        <div className="enLinea">
            <div className={`boxText ${colorClass}`}>
                <img src={imageUrl} alt={title || 'Imagen'} className="boxTextImage" />
                {children}
            </div>
        </div>
    );
};

BoxText.propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    children: PropTypes.node,
    colorClass: PropTypes.string // Nueva prop para determinar la clase de fondo
};

export default BoxText;
