import React from 'react';
import EmployeeCard from '../../components/features/Employee/EmployeeCard';
import CEOCard from '../../components/features/Employee/CEOCard';
import Background from '../../components/features/Background/Background';
import TextBox from '../../components/layout/Box/TextBox';

import narutoImage from '../../assets/images/naruto.jpg';
import laMadre from '../../assets/TransportersBranding/SEXIO/Editadas/laMadre.jpg';
import letiziaImage from '../../assets/images/letizia.png';
import roshiImage from '../../assets/images/roshi.png';
import marisaImage from '../../assets/images/marisa.png';
import employees from '../../data/employees';

const Team = () => {
    return (
        <div id='Equipo' >
            <h1 className='alinearEnColumna'>El talento detrás de nuestros logros</h1>
            <div className='alinearEnColumna'>
                <div className='enLinea'>
                    <div className="izquierda text-red">
                        <CEOCard
                            name="Paz Fernández Lozano"
                            position="CEO"
                            imageUrl={laMadre}
                        />
                    </div>
                    <div className="derecha text-red">
                        <CEOCard
                            name="Jesús Tomás Almansa"
                            position="Apoyo incondicional"
                            imageUrl={narutoImage}
                        />
                    </div>
                </div>
            </div>
            <div className='alinearEnColumna'>
                <h1>De estudiante de derecho a empresaria</h1>
                <div className='enLinea'>
                    <TextBox className="text-box text-box-Equipo-CEO">
                        Paz, natural de Villarrobledo (Albacete), es una empreseria con más de 40 años de experiencia en el sector del transporte. Cogió las riendas del negocio y de su familia desde muy joven, a los 18 años. Desde entonces, ha conseguido llevar la empresa a lo más alto, con esfuerzo y dedicación, en una industria tan competitiva como es el transporte de mercancías.
                    </TextBox>
                </div>
                <TextBox className="text-box text-box-Equipo-CEO">
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

                    <br /><br />

                    El equipo de Transportes Fernández es más que un grupo de trabajo; somos una familia. A lo largo de los años, hemos crecido juntos, acompañados por empleados que han estado con nosotros desde nuestros inicios. Su esfuerzo, dedicación y compromiso han sido la base sobre la que hemos construido nuestra evolución, pasando de ser una empresa local a consolidarnos como un referente a nivel nacional.

                    Cada miembro de nuestro equipo aporta algo único, y juntos hemos creado un ambiente de confianza y colaboración que define quiénes somos. En Transportes Fernández valoramos a las personas que forman parte de esta familia y trabajamos codo a codo para superar los desafíos, celebrando cada logro como un triunfo compartido. Es este espíritu el que nos impulsa a seguir creciendo y mejorando cada día.
                </TextBox>
            </Background>

            <h1 className='alinearEnColumna'>Fundadores de la empresa</h1>
            <div className='alinearEnColumna'>
                <div className='enLinea'>
                    <div className="izquierda text-red">
                        <CEOCard
                            name="José María Fernández"
                            position="Fundador"
                            imageUrl={roshiImage}
                        />
                    </div>
                    <div className="derecha text-red">
                        <CEOCard
                            name="María Asunción Lozano"
                            position="Fundadora"
                            imageUrl={marisaImage}
                        />
                    </div>
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