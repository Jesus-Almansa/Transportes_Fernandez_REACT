import React from 'react';
import BoxList from '../components/layout/Box/BoxList';

const Services = () => {
    return (
        <div>
            <BoxList title="Servicios">
                <ul>
                    <li>Regional</li>
                    <li>Nacional</li>
                    <li>Internacional</li>
                    <li>Espacial</li>
                </ul>
                </BoxList>
        </div>
    );
};

export default Services;