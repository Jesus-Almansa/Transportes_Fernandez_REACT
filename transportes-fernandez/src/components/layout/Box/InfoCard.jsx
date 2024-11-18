import React from 'react';
import PropTypes from 'prop-types';
import './Box.css';
import TextBox from './TextBox';
import './InfoCard.css';

const InfoCard = ({ title, imageUrl, children, className, colorClass }) => {
    return (
        <div className="enLinea">
            <div className='izquierda'>
                <img src={imageUrl} alt={title || 'Imagen'} className="infoCardImage" />
            </div>
            <div className={`derecha infoCard ${colorClass}`}>
                <TextBox className={className}>
                    {children}
                </TextBox>
            </div>
        </div>
    );
};

InfoCard.propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    children: PropTypes.node,
    colorClass: PropTypes.string // Nueva prop para determinar la clase de fondo
};

export default InfoCard;