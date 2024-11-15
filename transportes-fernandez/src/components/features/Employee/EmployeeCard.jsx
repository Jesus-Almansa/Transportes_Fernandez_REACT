import React from 'react';
import PropTypes from 'prop-types';
import './EmployeeCard.css'; // Asegúrate de crear este archivo CSS para estilos personalizados

const EmployeeCard = ({ name, position, imageUrl, className }) => {
    return (
        <div className={className}>
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