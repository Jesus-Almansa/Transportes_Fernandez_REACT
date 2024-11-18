import React from 'react';
import EmployeeCard from '../components/features/Employee/EmployeeCard';
import narutoImage from '../assets/images/naruto.jpg';

const Team = () => {
    return (
        <div>
            <EmployeeCard
                className='ceo-card'
                name="Paz Fernández Lozano"
                position="CEO"
                imageUrl={narutoImage}>
            </EmployeeCard>
        </div>
    );
};

export default Team;