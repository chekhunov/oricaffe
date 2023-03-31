import { useFetch } from "../utils/reactQuery";
import { ProductCardInterface } from "../interfaces/appointments";
import { apiRoutes } from "../utils/routes";
import { pathToUrl } from "../utils/router";
import { ProductDTO } from "../models/products.model";

export const useGetProducts = (params: ProductDTO) =>
  useFetch<ProductCardInterface[]>(
    pathToUrl(apiRoutes.getProductsList),
    params
  );
