// Import Screens (Pages)
import Inicio from '../screens/mainNavigation/Inicio';
import Empresa from '../screens/mainNavigation/Empresa';
import Contacto from '../screens/mainNavigation/Contacto';
import Servicios from '../screens/mainNavigation/Servicios';
import Equipo from '../screens/mainNavigation/Equipo';

const navi_routes = [
    { label: 'Inicio', path: '/', component: Inicio },
    { label: 'Empresa', path: '/empresa', component: Empresa },
    { label: 'Servicios', path: '/servicios', component: Servicios },
    { label: 'Equipo', path: '/equipo', component: Equipo },
    { label: 'Contacto', path: '/contacto', component: Contacto },
];

export default navi_routes;
