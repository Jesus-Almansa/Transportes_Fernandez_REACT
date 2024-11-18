import React from 'react';
import EmployeeCard from '../components/features/Employee/EmployeeCard';
import narutoImage from '../assets/images/naruto.jpg';
import employees from '../data/employees';
import founders from '../data/founders';
import Background from '../components/features/Background/Background';
import TextBox from '../components/layout/Box/TextBox';


const Team = () => {
    return (
        <div>
            <h1>Equipo actual</h1>
            <div className='ceo-container'>
                <EmployeeCard
                    className='ceo-card'
                    name="Paz Fernández Lozano"
                    position="CEO"
                    imageUrl={narutoImage}>
                </EmployeeCard>
            </div>
            <div id='Fundadores' className='alinearEnColumna'>
                <h1>De estudiante de derecho a empresaria</h1>
                <div className='enLinea'>
                    <TextBox className="text-box-Home-Resumen">
                        José y Asunción fueron los socios fundadores de la empresa. Comenzaron con un pequeño camión y con el tiempo han ido creciendo hasta tener una flota de camiones y empleados. La empresa ha crecido mucho y ha pasado de ser una empresa local a una empresa nacional.
                    </TextBox>
                </div>
            </div>

            <Background color="#ab273c">
                <div className='text-white'>
                    <h1>Trabajadores</h1>
                </div>

                <div className="employees-container">
                    {employees.map((employee, index) => (
                        <EmployeeCard
                            key={employee.id}
                            name={employee.name}
                            position={employee.position}
                            imageUrl={employee.imageUrl}
                            className={`employee-card ${index % 2 === 0 ? 'highlight' : ''}`}
                        />
                    ))}
                </div>
            </Background>


            <h1>Fundadores de la empresa</h1>
            <div className="ceo-container">
                {founders.map((founder, index) => (
                    <EmployeeCard
                        key={founder.id}
                        name={founder.name}
                        position={founder.position}
                        imageUrl={founder.imageUrl}
                        className={`ceo-card ${index % 2 === 0 ? 'highlight' : ''}`}
                    />
                ))}
            </div>
            <div id='Fundadores' className='alinearEnColumna'>
                <h1>Su historia</h1>
                <div className='enLinea'>
                    <TextBox className="text-box-Home-Resumen">
                        José y Asunción fueron los socios fundadores de la empresa. Comenzaron con un pequeño camión y con el tiempo han ido creciendo hasta tener una flota de camiones y empleados. La empresa ha crecido mucho y ha pasado de ser una empresa local a una empresa nacional.
                    </TextBox>
                </div>
            </div>
        </div>

    );
};

export default Team;