import { useFetch } from '../utils/reactQuery';
import { TopProductCardInterface } from '../interfaces/appointments';
import { apiRoutes } from '../utils/routes';

export const useGetTopProducts = () =>
  useFetch<TopProductCardInterface[]>(apiRoutes.getTopProductsList, undefined, {
    suspense: true,
    retry: 0,
  });