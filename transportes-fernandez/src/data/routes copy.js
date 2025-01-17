// Navigation routes
import Inicio from '../screens/mainNavigation/Inicio';
import Empresa from '../screens/mainNavigation/Empresa';
import Contacto from '../screens/mainNavigation/Contacto';
import Servicios from '../screens/mainNavigation/Servicios';
import Equipo from '../screens/mainNavigation/Equipo';

// Endpoints
import Aniversario from '../screens/Endpoints/Aniversario';
import Regional from '../screens/Endpoints/Regional';
import Nacional from '../screens/Endpoints/Nacional';
import Internacional from '../screens/Endpoints/Internacional';
import Industrial from '../screens/Endpoints/Industrial';
import Parques from '../screens/Endpoints/Parques';
import Especiales from '../screens/Endpoints/Especiales';

const routes = [
  
  { label: 'inicio', path: '/', component: Inicio },
  { label: 'empresa', path: '/empresa', component: Empresa },
  { label: 'contacto', path: '/contacto', component: Contacto },
  { label: 'servicios', path: '/servicios', component: Servicios },
  { label: 'equipo', path: '/equipo', component: Equipo },

  { label: 'aniversario', path: '/aniversario', component: Aniversario },

  { label: 'regional', path: '/regional', component: Regional },
  { label: 'nacional', path: '/nacional', component: Nacional },
  { label: 'internacional', path: '/internacional', component: Internacional },
  
  { label: 'especiales', path: '/especiales', component: Especiales },
  { label: 'industrial', path: '/industrial', component: Industrial },
  { label: 'parques', path: '/parques', component: Parques },
  
];

export const findRouteByLabel = (label) =>
  routes.find((route) => route.label === label);

export const getPathByLabel = (label) => {
  const route = findRouteByLabel(label);
  return route ? route.path : '/';
};

export default routes;