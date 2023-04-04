import { ProductCardInterface } from "../interfaces/appointments";
import { useFetch } from "../utils/reactQuery";
import { pathToUrl } from "../utils/router";
import { apiRoutes } from "../utils/routes";

interface paramsProps {
  params: {
    code?: string | number;
  }
}

export const useGetProductCardDetail = (params: paramsProps) =>
  useFetch<ProductCardInterface>(
    pathToUrl(apiRoutes.getProductCardDetails),
    params
  );
