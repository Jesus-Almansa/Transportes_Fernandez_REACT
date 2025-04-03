import Inicio from '../screens/mainNavigation/Inicio';
import Empresa from '../screens/mainNavigation/Empresa';
import Servicios from '../screens/mainNavigation/Servicios';
import Equipo from '../screens/mainNavigation/Equipo';
import Contacto from '../screens/mainNavigation/Contacto';

// Sufijo del título (puede exportarse desde un archivo de constantes)
const tituloBase = ' | Transportes Fernández';

const navi_routes = [
  {
    label: 'INICIO',
    path: '/',
    component: Inicio,
    title: 'Inicio' + tituloBase
  },
  {
    label: 'EMPRESA',
    path: '/empresa',
    component: Empresa,
    title: 'Empresa' + tituloBase
  },
  {
    label: 'SERVICIOS',
    path: '/servicios',
    component: Servicios,
    title: 'Servicios' + tituloBase
  },
  {
    label: 'EQUIPO',
    path: '/equipo',
    component: Equipo,
    title: 'Equipo' + tituloBase
  },
  {
    label: 'CONTACTO',
    path: '/contacto',
    component: Contacto,
    title: 'Contacto' + tituloBase
  },
];

export default navi_routes;