// Import Screens (Pages)
import Home from '../screens/Navigation/Home';
import About from '../screens/Navigation/About';
import Contact from '../screens/Navigation/Contact';
import Services from '../screens/Navigation/Services';
import Team from '../screens/Navigation/Team';

const navi_routes = [
    { label: 'Inicio', path: '/', component: Home },
    { label: 'Empresa', path: '/about', component: About },
    { label: 'Servicios', path: '/services', component: Services },
    { label: 'Equipo', path: '/team', component: Team },
    { label: 'Contacto', path: '/contact', component: Contact },
];

export default navi_routes;
