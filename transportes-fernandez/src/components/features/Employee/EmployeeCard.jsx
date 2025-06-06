import React from 'react';
import PropTypes from 'prop-types';
import './EmployeeCard.css';

const EmployeeCard = ({ name, position, imageUrl, number, mail, hoverable = true }) => {
    return (
        <div className={`employee-card ${!hoverable ? 'no-hover' : ''}`}>
            <img src={imageUrl} alt={`${name}`} className="employee-image" />
            <div>
                <h3 className="employee-name">{name}</h3>
                <p className="employee-position">{position}</p>
                <p className="employee-number">{number}</p>
                <p className="employee-mail">{mail}</p>
            </div>
        </div>
    );
};

EmployeeCard.propTypes = {
    name: PropTypes.string.isRequired, // Required name prop
    position: PropTypes.string.isRequired, // Required position prop
    imageUrl: PropTypes.string.isRequired, // Required image URL prop
    number: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    hoverable: PropTypes.bool, // Optional prop to enable/disable hover
};

export default EmployeeCard;
