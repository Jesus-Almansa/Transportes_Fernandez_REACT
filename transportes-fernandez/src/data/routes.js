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
import Konami from '../screens/Endpoints/Konami';

const routes = [
  {
    label: 'empresa',
    path: '/empresa',
    component: Empresa,
    title: 'Empresa | Transportes Fernández'
  },
  {
    label: 'contacto',
    path: '/contacto',
    component: Contacto,
    title: 'Contacto | Transportes Fernández'
  },
  {
    label: 'servicios',
    path: '/servicios',
    component: Servicios,
    title: 'Servicios | Transportes Fernández'
  },
  {
    label: 'equipo',
    path: '/equipo',
    component: Equipo,
    title: 'Equipo | Transportes Fernández'
  },

  {
    label: 'aniversario',
    path: '/aniversario',
    component: Aniversario,
    title: 'Aniversario | Transportes Fernández'
  },

  {
    label: 'industrial',
    path: '/industrial',
    component: Industrial,
    title: 'Industrial | Transportes Fernández'
  },
  {
    label: 'parques',
    path: '/parques',
    component: Parques,
    title: 'Parques | Transportes Fernández'
  },

  {
    label: 'especiales',
    path: '/especiales',
    component: Especiales,
    title: 'Especiales | Transportes Fernández'
  },

  { 
    label: 'regional',
    path: '/regional',
    component: Regional,
    title: 'Regional | Transportes Fernández'
  },

  {
    label: 'nacional',
    path: '/nacional',
    component: Nacional,
    title: 'Nacional | Transportes Fernández'
  },

  {
    label: 'internacional',
    path: '/internacional',
    component: Internacional,
    title: 'Internacional | Transportes Fernández'
  },

  {
    label: 'konami',
    path: '/konami',
    component: Konami,
    title: 'Konami | Transportes Fernández'
  },
];

export const findRouteByLabel = (label) =>
  routes.find((route) => route.label === label);

export const getPathByLabel = (label) => {
  const route = findRouteByLabel(label);
  return route ? route.path : '/';
};

export default routes;