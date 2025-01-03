import React from 'react';
import EmployeeCard from '../../components/features/Employee/EmployeeCard';
import CEOCard from '../../components/features/Employee/CEOCard';
import Background from '../../components/features/Background/Background';
import TextBox from '../../components/layout/Box/TextBox';

import narutoImage from '../../assets/images/naruto.jpg';
import laMadre from '../../assets/TransportersBranding/SEXIO/Editadas/laMadre.jpg';
import laMadre2 from '../../assets/TransportersBranding/SEXIO/Editadas/_DSC7783.jpg';
import letiziaImage from '../../assets/images/letizia.png';
import roshiImage from '../../assets/images/roshi.png';
import marisaImage from '../../assets/images/marisa.png';
import employees from '../../data/employees';

const Equipo = () => {
    return (
        <div id='Equipo' >

            <div className='alinearEnColumna'>

                <div className='padding-vertical-1' ></div>

                <h1 className='large-text-title text-box-Equipo-title'>EL TALENTO DETRÁS DE NUESTROS LOGROS</h1>

                <div className='padding-vertical-1' ></div>

                <div className='enLinea'>
                    <div className="izquierda text-red">
                        <CEOCard
                            name="Paz Fernández Lozano"
                            position="CEO"
                            imageUrl={laMadre}
                            number="+34 669 354 145"
                            mail="paz@transportesfernandez.es"
                        />
                    </div>
                    <div className="derecha text-red">
                        <CEOCard
                            name="Jesús Tomás Almansa"
                            position="Apoyo incondicional"
                            imageUrl={laMadre2}
                            hoverable={false}
                        />
                    </div>
                </div>
            </div>
            <div className='alinearEnColumna'>
                <div className='padding-vertical-1' ></div>
                <h1 className='text-red text-title'>DE ESTUDIANTE DE DERECHO A EMPRESARIA</h1>
                <div className='padding-vertical-1' ></div>
                <div className='enLinea'>
                    <TextBox className="text-box text-box-Equipo text-body">
                        Paz, natural de Villarrobledo (Albacete), es una empreseria con más de 40 años de experiencia en el sector del transporte. Cogió las riendas del negocio y de su familia desde muy joven, a los 18 años. Desde entonces, ha conseguido llevar la empresa a lo más alto, con esfuerzo y dedicación, en una industria tan competitiva como es el transporte de mercancías.
                    </TextBox>
                </div>
                <TextBox className="text-box text-box-Equipo text-body">
                    Jesús, marido de Paz y eventualmente informático, administrador, repartidor, conductor, mecánico, y cualquier otra cosa que se le ocurra a la jefa. Él es el apoyo incondicional de Paz y siempre está dispuesto a ayudar a su esposa en lo que haga falta.
                </TextBox>
            </div>

            <div className='padding-vertical-1' ></div>

            <Background color="#ab273c">

                <h1 className='text-white padding-vertical-up-3 text-title'>TRABAJADORES</h1>

                <div className='text-white padding-vertical-down-3'></div>

                <div className="employees-container">
                    {employees.map((employee, index) => (
                        <EmployeeCard
                            key={employee.id}
                            name={employee.name}
                            position={employee.position}
                            imageUrl={employee.imageUrl}
                            number={employee.number}
                            mail={employee.mail}
                            className={`employee-card ${index % 2 === 0 ? 'highlight' : ''}`} // Ejemplo con clase condicional
                        />
                    ))}
                </div>

                <TextBox className="text-box text-box-Equipo text-body text-white padding-vertical-3">
                    El equipo de Transportes Fernández es una familia. Nos caracterizamos por haber crecido junto a nuestros empleados de toda la vida. La empresa ha pasado de ser una empresa local a una empresa nacional gracias al esfuerzo y dedicación de todos los trabajadores.

                    <br /><br />

                    El equipo de Transportes Fernández es más que un grupo de trabajo; somos una familia. A lo largo de los años, hemos crecido juntos, acompañados por empleados que han estado con nosotros desde nuestros inicios. Su esfuerzo, dedicación y compromiso han sido la base sobre la que hemos construido nuestra evolución, pasando de ser una empresa local a consolidarnos como un referente a nivel nacional.

                    Cada miembro de nuestro equipo aporta algo único, y juntos hemos creado un ambiente de confianza y colaboración que define quiénes somos. En Transportes Fernández valoramos a las personas que forman parte de esta familia y trabajamos codo a codo para superar los desafíos, celebrando cada logro como un triunfo compartido. Es este espíritu el que nos impulsa a seguir creciendo y mejorando cada día.
                </TextBox>

            </Background>


            <div className='alinearEnColumna'>
                <h1 className='padding-vertical-3 text-red text-title'>FUNDADORES DE LA EMPRESA</h1>
                <div className='enLinea'>
                    <div className="izquierda text-red">
                        <CEOCard
                            name="José María Fernández"
                            position="Fundador"
                            imageUrl={roshiImage}
                            hoverable={false}
                        />
                    </div>
                    <div className="derecha text-red">
                        <CEOCard
                            name="María Asunción Lozano"
                            position="Fundadora"
                            imageUrl={marisaImage}
                            hoverable={false}
                        />
                    </div>
                </div>
            </div>



            <div className='alinearEnColumna'>
                <h1 className='alinearEnColumna padding-vertical-3 text-red text-title'>SU HISTORIA</h1>
                <div className='enLinea'>
                    <TextBox className="text-box text-box-Equipo text-body padding-vertical-down-3">
                        José y Asunción fueron los socios fundadores de la empresa. Comenzaron con un pequeño camión y con el tiempo han ido creciendo hasta tener una flota de camiones y empleados. La empresa ha crecido mucho y ha pasado de ser una empresa local a una empresa nacional.
                    </TextBox>
                </div>
            </div>
        </div>

    );
};

export default Equipo;