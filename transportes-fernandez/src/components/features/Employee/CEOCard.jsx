import React from 'react';
import PropTypes from 'prop-types';
import './CEOCard.css';

const CEOCard = ({ name, position, imageUrl, number, mail, hoverable = true }) => {
    return (
        <div className={`ceo-card ${!hoverable ? 'no-hover' : ''}`}>
            <img src={imageUrl} alt={`${name}`} className="ceo-image" />
            <div>
                <h3 className="ceo-name">{name}</h3>
                <p className="ceo-position">{position}</p>
                <p className="ceo-number">{number}</p>
                <p className="ceo-mail">{mail}</p>
            </div>
        </div>
    );
};

CEOCard.propTypes = {
    name: PropTypes.string.isRequired, // Required name prop
    position: PropTypes.string.isRequired, // Required position prop
    imageUrl: PropTypes.string.isRequired, // Required image URL prop
    number: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    hoverable: PropTypes.bool, // Optional prop to enable/disable hover
};

export default CEOCard;
