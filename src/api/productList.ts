import { useFetch } from '../utils/reactQuery';
import { ProductCardInterface } from '../interfaces/appointments';
import { apiRoutes } from '../utils/routes';

export const useGetProducts = () =>
  useFetch<ProductCardInterface[]>(apiRoutes.getProductsList, undefined, {
    suspense: true,
    retry: 0,
  });