import React from 'react';
import PropTypes from 'prop-types';
import './Box.css';
import TextBox from './TextBox';

const infoCard = ({ title, imageUrl, children, colorClass }) => {
    return (
        <div className="enLinea">
            <div className={`infoCard ${colorClass}`}>
                <img src={imageUrl} alt={title || 'Imagen'} className="infoCardImage" />
                <TextBox className=''>
                    {children}
                </TextBox>
            </div>
        </div>
    );
};

infoCard.propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    children: PropTypes.node,
    colorClass: PropTypes.string // Nueva prop para determinar la clase de fondo
};

export default infoCard;
