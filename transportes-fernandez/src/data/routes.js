import Empresa from '../screens/mainNavigation/Empresa';
import Contacto from '../screens/mainNavigation/Contacto';
import Servicios from '../screens/mainNavigation/Servicios';
import Equipo from '../screens/mainNavigation/Equipo';


// Endpoints
import Aniversario from '../screens/Endpoints/Aniversario';
import Industrial from '../screens/Endpoints/Industrial';
import Parques from '../screens/Endpoints/Parques';
import Especiales from '../screens/Endpoints/Especiales';

const routes = [
  { label: 'aniversario', path: '/aniversario', component: Aniversario },
  { label: 'empresa', path: '/empresa', component: Empresa },
  { label: 'contacto', path: '/contacto', component: Contacto },
  { label: 'servicios', path: '/servicios', component: Servicios },
  { label: 'equipo', path: '/equipo', component: Equipo },
  { label: 'industrial', path: '/industrial', component: Industrial },
  { label: 'parques', path: '/parques', component: Parques },
  { label: 'especiales', path: '/especiales', component: Especiales },
  
];

export const findRouteByLabel = (label) =>
  routes.find((route) => route.label === label);

export const getPathByLabel = (label) => {
  const route = findRouteByLabel(label);
  return route ? route.path : '/';
};

export default routes;