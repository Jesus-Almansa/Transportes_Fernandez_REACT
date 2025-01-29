import Empresa from '../screens/mainNavigation/Empresa';
import Contacto from '../screens/mainNavigation/Contacto';
import Servicios from '../screens/mainNavigation/Servicios';
import Equipo from '../screens/mainNavigation/Equipo';

// Endpoints
import Aniversario from '../screens/Endpoints/Aniversario';
import Industrial from '../screens/Endpoints/Industrial';
import Parques from '../screens/Endpoints/Parques';
import Especiales from '../screens/Endpoints/Especiales';
import Regional from '../screens/Endpoints/Regional';
import Nacional from '../screens/Endpoints/Nacional';
import Internacional from '../screens/Endpoints/Internacional';
import Developer from '../screens/Endpoints/Developer';
import Fundadores from '../screens/Endpoints/Fundadores';

const tituloBase = ' | Transportes Fernández';

const routes = [
  {
    label: 'empresa',
    path: '/empresa',
    component: Empresa,
    title: 'Empresa' + tituloBase
  },
  {
    label: 'contacto',
    path: '/contacto',
    component: Contacto,
    title: 'Contacto' + tituloBase
  },
  {
    label: 'servicios',
    path: '/servicios',
    component: Servicios,
    title: 'Servicios' + tituloBase
  },
  {
    label: 'equipo',
    path: '/equipo',
    component: Equipo,
    title: 'Equipo' + tituloBase
  },

  {
    label: 'aniversario',
    path: '/aniversario',
    component: Aniversario,
    title: 'Aniversario' + tituloBase
  },

  {
    label: 'industrial',
    path: '/industrial',
    component: Industrial,
    title: 'Industrial' + tituloBase
  },
  {
    label: 'parques',
    path: '/parques',
    component: Parques,
    title: 'Parques' + tituloBase
  },

  {
    label: 'especiales',
    path: '/especiales',
    component: Especiales,
    title: 'Especiales' + tituloBase
  },

  { 
    label: 'regional',
    path: '/regional',
    component: Regional,
    title: 'Regional' + tituloBase
  },

  {
    label: 'nacional',
    path: '/nacional',
    component: Nacional,
    title: 'Nacional' + tituloBase
  },

  {
    label: 'internacional',
    path: '/internacional',
    component: Internacional,
    title: 'Internacional' + tituloBase
  },

  {
    label: 'developer',
    path: '/developer',
    component: Developer,
    title: 'Developer' + tituloBase
  },

  {
    label: 'fundadores',
    path: '/fundadores',
    component: Fundadores,
    title: 'Fundadores' + tituloBase
  },

];

export const findRouteByLabel = (label) =>
  routes.find((route) => route.label === label);

export const getPathByLabel = (label) => {
  const route = findRouteByLabel(label);
  return route ? route.path : '/';
};

export default routes;