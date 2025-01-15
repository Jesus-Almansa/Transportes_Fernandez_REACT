// Import Screens (Pages)
import Inicio from '../screens/mainNavigation/Inicio';
import Empresa from '../screens/mainNavigation/Empresa';
import Contacto from '../screens/mainNavigation/Contacto';
import Servicios from '../screens/mainNavigation/Servicios';
import Equipo from '../screens/mainNavigation/Equipo';

const navi_routes = [
    { label: 'INICIO', path: '/', component: Inicio },
    { label: 'EMPRESA', path: '/empresa', component: Empresa },
    { label: 'SERVICIOS', path: '/servicios', component: Servicios },
    { label: 'EQUIPO', path: '/equipo', component: Equipo },
    { label: 'CONTACTO', path: '/contacto', component: Contacto },
];

export default navi_routes;
