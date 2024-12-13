// Import Screens (Pages)
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import Services from '../screens/Services';
import Team from '../screens/Team';

const routes = [
    { label: 'Inicio', path: '/', component: Home },
    { label: 'Empresa', path: '/about', component: About },
    { label: 'Servicios', path: '/services', component: Services },
    { label: 'Equipo', path: '/team', component: Team },
    { label: 'Contacto', path: '/contact', component: Contact },
];

export default routes;
