import React from 'react';
import EmployeeCard from '../../components/features/Employee/EmployeeCard';
import Background from '../../components/features/Background/Background';
import TextBox from '../../components/layout/Box/TextBox';

import narutoImage from '../../assets/images/naruto.jpg';
import letiziaImage from '../../assets/images/letizia.png';
import roshiImage from '../../assets/images/roshi.png';
import marisaImage from '../../assets/images/marisa.png';
import employees from '../../data/employees';



const Team = () => {
    return (
        <div>
            <h1>El talento detrás de nuestros logros</h1>
            <div className='ceo-container'>
                <div className='enLinea'>
                    <EmployeeCard
                        className='ceo-card'
                        name="Paz Fernández Lozano"
                        position="CEO"
                        imageUrl={letiziaImage}>
                    </EmployeeCard>
                    <EmployeeCard
                        className='ceo-card'
                        name="Jesús Tomás Almansa Ortega"
                        position="Apoyo incondicional"
                        imageUrl={narutoImage}>
                    </EmployeeCard>
                </div>
            </div>
            <div id='Fundadores' className='alinearEnColumna'>
                <h1>De estudiante de derecho a empresaria</h1>
                <div className='enLinea'>
                    <TextBox className="text-box text-box-Home-Resumen">
                        Paz, natural de Villarrobledo (Albacete), es una empreseria con más de 40 años de experiencia en el sector del transporte. Cogió las riendas del negocio y de su familia desde muy joven, a los 18 años. Desde entonces, ha conseguido llevar la empresa a lo más alto, con esfuerzo y dedicación, en una industria tan competitiva como es el transporte de mercancías.
                    </TextBox>
                </div>
                <TextBox className="text-box text-box-Home-Resumen">
                    Jesús, marido de Paz y eventualmente informático, administrador, repartidor, conductor, mecánico, y cualquier otra cosa que se le ocurra a la jefa. Él es el apoyo incondicional de Paz y siempre está dispuesto a ayudar a su esposa en lo que haga falta.
                </TextBox>
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
                <TextBox className="text-box text-box-Equipo text-white">
                    El equipo de Transportes Fernández es una familia. Nos caracterizamos por haber crecido junto a nuestros empleados de toda la vida. La empresa ha pasado de ser una empresa local a una empresa nacional gracias al esfuerzo y dedicación de todos los trabajadores.
                </TextBox>
            </Background>

            <h1>Fundadores de la empresa</h1>
            <div id='Fundadores' className='ceo-container'>
                <div className='enLinea'>
                    <EmployeeCard
                        className='ceo-card'
                        name="José María Fernández"
                        position="Fundador"
                        imageUrl={roshiImage}>
                    </EmployeeCard>
                    <EmployeeCard
                        className='ceo-card'
                        name="Asunción Lozano"
                        position="Fundadora"
                        imageUrl={marisaImage}>
                    </EmployeeCard>
                </div>
            </div>
            <div className='alinearEnColumna'>
                <h1>Su historia</h1>
                <div className='enLinea'>
                    <TextBox className="text-box text-box-Home-Resumen">
                        José y Asunción fueron los socios fundadores de la empresa. Comenzaron con un pequeño camión y con el tiempo han ido creciendo hasta tener una flota de camiones y empleados. La empresa ha crecido mucho y ha pasado de ser una empresa local a una empresa nacional.
                    </TextBox>
                </div>
            </div>
        </div>

    );
};

export default Team;