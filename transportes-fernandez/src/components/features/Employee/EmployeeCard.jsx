import React from 'react';
import PropTypes from 'prop-types';
import './EmployeeCard.css';

const EmployeeCard = ({ name, position, imageUrl }) => {
    return (
        <div className="employee-card">
            <img src={imageUrl} alt={`${name}`} className="employee-image" />
            <div>
                <h3 className="employee-name">{name}</h3>
                <p className="employee-position">{position}</p>
            </div>
        </div>
    );
};

EmployeeCard.propTypes = {
    name: PropTypes.string.isRequired, // Required name prop
    position: PropTypes.string.isRequired, // Required position prop
    imageUrl: PropTypes.string.isRequired, // Required image URL prop
};

export default EmployeeCard;
