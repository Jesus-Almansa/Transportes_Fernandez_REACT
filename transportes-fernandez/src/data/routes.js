import Aniversario from '../screens/Aniversario';

const routes = [
  { label: 'Aniversario', path: '/aniversario', component: Aniversario },
];

export const findRouteByLabel = (label) =>
  routes.find((route) => route.label === label);

export const getPathByLabel = (label) => {
  const route = findRouteByLabel(label);
  return route ? route.path : '/';
};

export default routes;
