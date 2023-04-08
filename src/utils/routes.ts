import AboutPage from "../pages/about";
import Admin from "../pages/admin";
import Auth from "../pages/auth";
import BlogPage from "../pages/blog";
import BonusPage from "../pages/bonus";
import CartPage from "../pages/cart";
import ContactPage from "../pages/contact";
import DeliveryPage from "../pages/delivery";
import GuaranteePage from "../pages/guarantee";
import HomePage from "../pages/home";
import ServicePage from "../pages/service";
import TermsPage from "../pages/terms";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  MAIN_ROUTE,
  ABOUT_ROUTE,
  BONUS_ROUTE,
  DELIVERY_ROUTE,
  GUARANTEE_ROUTE,
  SERVICE_ROUTE,
  CONTACT_ROUTE,
  BASKET_ROUTE,
  BLOG_ROUTE,
  TAC_ROUTE,
} from "../types/const";

export const apiRoutes = {
  getTokenByPassword: "/api/getTokenByPassword",
  getProfile: "/api/getProfile",
  getTopProductsList: "/api/getTopProductsList",
  getProductsList: "/api/getProductsList",
  getProductCardDetails: "/api/getProduct",
  getNavMenu: "/api/getNavMenu",
  initialState: "/api/initialState",
  getCart: "/api/getCart",
  getWellCurrent:
    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json",
};

export const authRoutes = [
  {
    id: 0,
    path: ADMIN_ROUTE,
    Component: Admin,
  },

  // TODO add basket when connect be
  // {
  //   path: BASKET_ROUTE,
  //   Component: Basket,
  // },
];

export const publicRoutes = [
  {
    id: 1,
    // uid: SomeLibrary.generateUniqueID(),
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    id: 2,
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    id: 3,
    path: MAIN_ROUTE,
    Component: HomePage,
  },
  {
    id: 4,
    path: ABOUT_ROUTE,
    Component: AboutPage,
  },
  {
    id: 5,
    path: BONUS_ROUTE,
    Component: BonusPage,
  },
  {
    id: 6,
    path: DELIVERY_ROUTE,
    Component: DeliveryPage,
  },
  {
    id: 7,
    path: GUARANTEE_ROUTE,
    Component: GuaranteePage,
  },
  {
    id: 8,
    path: SERVICE_ROUTE,
    Component: ServicePage,
  },
  {
    id: 9,
    path: CONTACT_ROUTE,
    Component: ContactPage,
  },
  {
    id: 10,
    path: BASKET_ROUTE,
    Component: CartPage,
  },
  {
    id: 11,
    path: BLOG_ROUTE,
    Component: BlogPage,
  },
  {
    id: 12,
    path: TAC_ROUTE,
    Component: TermsPage,
  },
];
