import { useFetch } from '../utils/reactQuery';
import { NavMenuInterface } from '../interfaces/navMenu';
import { apiRoutes } from '../utils/routes';

export const useGetNavMenu = () =>
  useFetch<NavMenuInterface[]>(apiRoutes.getNavMenu, undefined, {
    suspense: true,
    retry: 0,
  });