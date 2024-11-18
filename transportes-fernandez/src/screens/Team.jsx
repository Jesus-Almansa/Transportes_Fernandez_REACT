import React from 'react';
import EmployeeCard from '../components/features/Employee/EmployeeCard';
import narutoImage from '../assets/images/naruto.jpg';
import employees from '../data/employees';

const Team = () => {
    return (
        <div>
            <div className='ceo-container'>
            <EmployeeCard
                className='ceo-card'
                name="Paz Fernández Lozano"
                position="CEO"
                imageUrl={narutoImage}>
            </EmployeeCard>
            </div>
            <div className="employees-container">
                {employees.map((employee, index) => (
                    <EmployeeCard
                        key={employee.id}
                        name={employee.name}
                        position={employee.position}
                        imageUrl={employee.imageUrl}
                        className={`employee-card ${index % 2 === 0 ? 'highlight' : ''}`} // Ejemplo con clase condicional
                    />
                ))}
            </div>
        </div>

    );
};

export default Team;