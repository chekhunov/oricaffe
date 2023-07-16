import { useFetch } from "../utils/reactQuery";
import { PartnersInterface } from "../interfaces/appointments";
import { apiRoutes } from "../utils/routes";
import { pathToUrl } from "../utils/router";

export const useGetPartners = () =>
  useFetch<PartnersInterface[]>(pathToUrl(apiRoutes.getPartners));
