import React from 'react';
import PropTypes from 'prop-types';
import './EmployeeCard.css';
import './CEOCard.css';

const EmployeeCard = ({ name, position, imageUrl, className }) => {
    // Combina la clase predeterminada `employee-card` con cualquier clase adicional proporcionada
    const classes = `employee-card ${className || ''}`.trim();

    return (
        <div className={classes}>
            <img src={imageUrl} alt={`${name}`} className="employee-image" />
            <div className="employee-info">
                <h3>{name}</h3>
                <p>{position}</p>
            </div>
        </div>
    );
};

EmployeeCard.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default EmployeeCard;