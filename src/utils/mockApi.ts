import MockAdapter from "axios-mock-adapter";
import { match, pathToRegexp } from "path-to-regexp";
import axios, { AxiosRequestConfig } from "axios";
import { apiRoutes } from "./routes";
import { topProducts } from "../state/topProducts";
import { products } from "../state/catalog";
import { listPartners } from "../state/partners";
import { navMenu, menuSubheader, categoryProducts } from "../state/navMenu";
import { cartMocks } from "../state/cartMocks";

const ADMIN_TOKEN = "admintoken";
const MODERATOR_TOKEN = "moderatortoken";

const PROFILES = [
  {
    token: ADMIN_TOKEN,
    profile: {
      name: "Admin",
    },
  },
  {
    token: MODERATOR_TOKEN,
    profile: {
      name: "Moderator",
    },
  },
];
const getUser = (config: AxiosRequestConfig) =>
  PROFILES.find((item) => item.token === config?.headers?.token)?.profile;

const clone = (data: any) => JSON.parse(JSON.stringify(data));
const exclude = [/assets\//];

axios.interceptors.response.use((response) => {
  if (!exclude.find((pattern) => pattern.test(response?.config?.url!))) {
    // eslint-disable-next-line no-console
    console.groupCollapsed(
      `<= ${response?.config?.method?.toUpperCase()} ${response.config.url}`
    );
    // eslint-disable-next-line no-console
    console.dir(clone(response));
    // eslint-disable-next-line no-console
    console.groupEnd();
  }

  return response;
});

export const initializeMockAdapter = () => {
  const mock = new MockAdapter(axios, { delayResponse: 1000 });

  mock.onPost(apiRoutes.getTokenByPassword).reply(() => {
    return [200, { token: ADMIN_TOKEN }];
  });

  mock.onGet(apiRoutes.getProfile).reply((config) => {
    const user = getUser(config);

    if (!user) {
      return [403];
    }

    return [
      200,
      {
        user,
      },
    ];
  });

  mock.onGet(apiRoutes.initialState).reply((config) => {
    // if (!getUser(config)) {
    //   return [403];
    // }

    return [
      200,
      {
        nav_menu: navMenu,
        menu_subheader: menuSubheader,
        category: categoryProducts,
        top_products: topProducts,
        products,
      },
    ];
  });

  mock.onGet(apiRoutes.getNavMenu).reply(() => {
    return [
      200,
      {
        nav_menu: navMenu,
        menu_subheader: menuSubheader,
        category: categoryProducts,
      },
    ];
  });

  mock.onGet(apiRoutes.getTopProductsList).reply(() => {
    return [200, { top_products: topProducts }];
  });

  mock.onGet(apiRoutes.getPartners).reply(() => {
    return [200, { partners: listPartners }];
  });

  mock.onGet(apiRoutes.getProductsList).reply((config) => {
    const { params } = config;

    const { page, limit, productCategory } = params;

    const filterData = products.filter(
      (item) => item.category === productCategory
    );

    return [
      200,
      {
        products: filterData.slice(
          page === 1 ? 0 : (page - 1) * 9,
          limit * page
        ),
        count: Math.ceil(filterData.length / limit),
      },
    ];
  });

  mock.onGet(apiRoutes.getProductCardDetails).reply((config) => {
    const { params } = config;

    const filterData = products.find((item) => String(item.id) === params.code);

    return [
      200,
      {
        filterData,
      },
    ];
  });

  mock.onGet(pathToRegexp(apiRoutes.getCart)).reply((config) => {
    // if (!getUser(config)) {
    //   return [403];
    // }

    const result = match<{ id: string }>(apiRoutes.getCart, {
      decode: decodeURIComponent,
    })(config.url!);

    if (result === false) {
      return [403];
    }

    return [200, { cart: cartMocks }];
  });

  mock.onPost(pathToRegexp(apiRoutes.getCart)).reply((config) => {
    // const user = getUser(config);

    // if (!user) {
    //   return [403];
    // }

    const data = JSON.parse(config.data);

    // if (data.id === 2) {
    //   return [400];
    // }

    const body = {
      ...data,
    };
    cartMocks.push(body);

    return [200, body];
  });
};
