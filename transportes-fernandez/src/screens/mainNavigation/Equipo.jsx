import React from 'react';
import { Link } from "react-router-dom";

// Componentes
import EmployeeCard from '../../components/features/Employee/EmployeeCard';
import CEOCard from '../../components/features/Employee/CEOCard';
import Background from '../../components/features/Background/Background';
import TextBox from '../../components/layout/Box/TextBox';
import MediaPicture from '../../components/features/MediaPicture/MediaPicture';

// Imágenes
import cubo from '../../assets_prod/Equipo/infinitecube.jpg';
import laMadre from '../../assets_prod/Equipo/_DSC7783.jpg';
import padre from '../../assets_prod/Equipo/_DSC7786.jpg';
import employees from '../../data/employees';
import yaya from '../../assets_prod/Equipo/yaya.jpg';
import JoseMariaJoven from '../../assets_prod/Equipo/joseMaria_Joven.jpg';
import pa from '../../assets_prod/Equipo/pa.jpg';
import elPa from '../../assets_prod/Equipo/elPa.jpg';
import equipo from '../../assets_prod/Equipo/equipo.jpg';

// Rutas
import { getPathByLabel } from '../../data/routes';

const Equipo = () => {
    return (
        <div id='Equipo' >

            <div className='alinearEnColumna'>

                <div className='padding-vertical-1' ></div>

                <h1 className='large-text-title text-box-Equipo-title text-red'>EL TALENTO DETRÁS DE NUESTROS LOGROS</h1>

                <div className='padding-vertical-1' ></div>

                <div className='alinearEnColumna'>
                    <div className='enLinea'>
                        <div className=" text-red text-body">
                            <CEOCard
                                name="Paz Fernández Lozano"
                                position="CEO"
                                imageUrl={laMadre}
                                number="+34 669 354 145"
                                mail="paz@transportesfernandez.es"
                                hoverable={true}
                            />
                        </div>
                        <div className=" text-red text-body">
                            <CEOCard
                                name="Jesús Almansa"
                                position="Apoyo incondicional"
                                imageUrl={elPa}
                                hoverable={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='alinearEnColumna'>
                <div className='padding-vertical-1' ></div>
                <h1 className='text-red text-title'>DE ESTUDIANTE DE DERECHO A EMPRESARIA</h1>
                <div className='enLinea'>
                    <TextBox className="text-box text-box-Equipo text-body">
                        Paz, natural de Villarrobledo (Albacete), es una empreseria con más de 40 años de experiencia en el sector del transporte. Cogió las riendas del negocio y de su familia desde muy joven, a los 18 años. Desde entonces, ha conseguido llevar la empresa a lo más alto, con esfuerzo y dedicación, en una industria tan competitiva como es el transporte de mercancías.

                        <div className='padding-vertical-1'></div>

                        Jesús, marido de Paz y eventualmente informático, administrador, repartidor, conductor, mecánico, y cualquier otra cosa que se le ocurra a la jefa. Él es el apoyo incondicional de Paz y siempre está dispuesto a ayudar a su esposa en lo que haga falta.
                    </TextBox>
                </div>
            </div>

            <div className='padding-vertical-1' ></div>

            <Background color="#ab273c">

                <h1 className='text-white padding-vertical-up-3 text-title'>TRABAJADORES</h1>

                <div className='text-white padding-vertical-down-3'></div>

                <div className="employees-container text-body">
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
                </TextBox>

                <MediaPicture
                    src={equipo}
                    alt="Equipo al completo"
                    className="picture-container picture-Equipo-Hoy"
                />


                <TextBox className="text-box text-box-Equipo text-body text-white padding-vertical-3">
                    El equipo de Transportes Fernández es más que un grupo de trabajo; somos una familia. A lo largo de los años, hemos crecido juntos, acompañados por empleados que han estado con nosotros desde nuestros inicios. Su esfuerzo, dedicación y compromiso han sido la base sobre la que hemos construido nuestra evolución, pasando de ser una empresa local a consolidarnos como un referente a nivel nacional.

                    <div className='padding-vertical-1'></div>

                    Cada miembro de nuestro equipo aporta algo único, y juntos hemos creado un ambiente de confianza y colaboración que define quiénes somos. En Transportes Fernández valoramos a las personas que forman parte de esta familia y trabajamos codo a codo para superar los desafíos, celebrando cada logro como un triunfo compartido. Es este espíritu el que nos impulsa a seguir creciendo y mejorando cada día.
                </TextBox>

            </Background>


            <div className='alinearEnColumna'>
                <h1 className='padding-vertical-3 text-red text-title'>FUNDADORES DE LA EMPRESA</h1>
                <div className='enLinea'>
                    <div className="text-red text-body">
                        <CEOCard
                            name="José María Fernández López"
                            position="Fundador"
                            imageUrl={JoseMariaJoven}
                            hoverable={false}
                        />
                    </div>
                    <div className="text-red text-body">
                        <CEOCard
                            name="María Asunción Lozano López-Gil"
                            position="Fundadora"
                            imageUrl={yaya}
                            hoverable={false}
                        />
                    </div>
                </div>
            </div>



            <div className='alinearEnColumna'>
                <h1 className='padding-vertical-up-2 text-red text-title'>
                    <Link to={getPathByLabel('fundadores')} className="text-red no-underline">
                        <strong>SU HISTORIA</strong>
                    </Link>
                </h1>
                <div className='enLinea'>
                    <TextBox className="text-box text-box-Equipo text-body">
                        <Link to={getPathByLabel('fundadores')} className="text-red no-underline">
                            <strong>José María</strong>
                        </Link> y
                        <Link to={getPathByLabel('fundadores')} className="text-red no-underline">
                            <strong> Asunción </strong>
                        </Link>
                        fueron los socios fundadores de la empresa. Comenzaron con un pequeño camión y con el tiempo han ido creciendo hasta tener una flota de camiones y empleados. La empresa ha crecido mucho y ha pasado de ser una empresa local a una empresa nacional.
                    </TextBox>
                </div>
            </div>
        </div>

    );
};

export default Equipo;