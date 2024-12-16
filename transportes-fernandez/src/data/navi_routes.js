// Import Screens (Pages)
import Inicio from '../screens/Navigation/Inicio';
import Empresa from '../screens/Navigation/Empresa';
import Contacto from '../screens/Navigation/Contacto';
import Servicios from '../screens/Navigation/Servicios';
import Equipo from '../screens/Navigation/Equipo';

const navi_routes = [
    { label: 'Inicio', path: '/', component: Inicio },
    { label: 'Empresa', path: '/empresa', component: Empresa },
    { label: 'Servicios', path: '/servicios', component: Servicios },
    { label: 'Equipo', path: '/equipo', component: Equipo },
    { label: 'Contacto', path: '/contacto', component: Contacto },
];

export default navi_routes;
