import React from 'react';
import PropTypes from 'prop-types';
import './CEOCard.css';

const CEOCard = ({ name, position, imageUrl }) => {
    return (
        <div className="ceo-card">
            <img src={imageUrl} alt={`${name}`} className="ceo-image" />
            <div>
                <h3 className="ceo-name">{name}</h3>
                <p className="ceo-position">{position}</p>
            </div>
        </div>
    );
};


CEOCard.propTypes = {
    name: PropTypes.string.isRequired, // Nombre requerido
    position: PropTypes.string.isRequired, // Posición requerida
    imageUrl: PropTypes.string.isRequired, // URL de la imagen requerida
};

export default CEOCard;
