import { useFetch } from '../utils/reactQuery';
import { InitialStateInterface } from '../interfaces/initialState';
import { apiRoutes } from '../utils/routes';

export const useInitialState = () =>
  useFetch<InitialStateInterface>(apiRoutes.initialState, undefined, {
    suspense: true,
    retry: 0,
  });