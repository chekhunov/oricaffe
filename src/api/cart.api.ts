import { useDelete, useFetch, usePost } from '../utils/reactQuery';
import { pathToUrl } from '../utils/router.path';
import { apiRoutes } from '../utils/routes';
import { CartModel } from '../models/cart.model';

export const useGetCart = () =>
  useFetch<CartModel[]>(pathToUrl(apiRoutes.getCart));

export const useAddToCart = (
  updater: (oldData: CartModel[], newData: CartModel) => CartModel[]
) =>
  usePost<CartModel[], CartModel>(
    pathToUrl(apiRoutes.getCart),
    undefined,
    updater
  );

export const useDeleteCart = (
  updater: (
    oldData: CartModel[],
    deletedId: string | number
  ) => CartModel[]
) => useDelete<CartModel[]>(pathToUrl(apiRoutes.getCart), undefined, updater);