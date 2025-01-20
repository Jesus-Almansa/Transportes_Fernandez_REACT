import Inicio from '../screens/mainNavigation/Inicio';
import Empresa from '../screens/mainNavigation/Empresa';
import Servicios from '../screens/mainNavigation/Servicios';
import Equipo from '../screens/mainNavigation/Equipo';
import Contacto from '../screens/mainNavigation/Contacto';

const navi_routes = [
  {
    label: 'INICIO',
    path: '/',
    component: Inicio,
    title: 'Inicio | Transportes Fernández'
  },
  {
    label: 'EMPRESA',
    path: '/empresa',
    component: Empresa,
    title: 'Empresa | Transportes Fernández'
  },
  {
    label: 'SERVICIOS',
    path: '/servicios',
    component: Servicios,
    title: 'Servicios | Transportes Fernández'
  },
  {
    label: 'EQUIPO',
    path: '/equipo',
    component: Equipo,
    title: 'Equipo | Transportes Fernández'
  },
  {
    label: 'CONTACTO',
    path: '/contacto',
    component: Contacto,
    title: 'Contacto | Transportes Fernández'
  },
];

export default navi_routes;