import { NavMenuInterface } from "../interfaces/navMenu";
import { CategoryModel } from "../models/category.model";
import { ABOUT_ROUTE, BONUS_ROUTE, COOPERATION_ROUTE, DELIVERY_ROUTE, GUARANTEE_ROUTE, QUALITY_ROUTE, SERVICE_ROUTE, SHOP_ROUTE } from '../types/const';

export const categoryProducts = [
  {
    id: 1,
    name: "coffee",
    value: "category_products.coffee",
    link: SHOP_ROUTE,
    category: "coffee",
    img: "/category/bean-c.webp",
    bgColor: "#e33939",
  },
  {
    id: 2,
    name: "tea",
    value: "category_products.tea",
    link: SHOP_ROUTE,
    category: "tea",
    img: "/category/tea.webp",
    bgColor: "#f1c40f",
  },
  {
    id: 3,
    name: "chocolate",
    value: "category_products.chocolate",
    link: SHOP_ROUTE,
    category: "chocolate",
    img: "/category/powder.webp",
    bgColor: "#e33939",
  },
  {
    id: 4,
    name: "equipment",
    value: "category_products.coffee_equipment",
    link: SHOP_ROUTE,
    category: "equipment",
    img: "/category/coffee-equipment.webp",
    bgColor: "#f1c40f",
  },
  {
    id: 5,
    name: "accessories",
    value: "category_products.coffee_accessories",
    link: SHOP_ROUTE,
    category: "accessories",
    img: "/category/coffee-accessories.webp",
    bgColor: "#e33939",
  },
] as CategoryModel[];

export const navMenu = [
  {
    id: 1,
    value: "catalog",
    link: SHOP_ROUTE,
    category: categoryProducts,
  },
  {
    id: 2,
    value: "service",
    link: SERVICE_ROUTE,
  },
  {
    id: 3,
    value: "quality",
    link: QUALITY_ROUTE,
  },
  {
    id: 4,
    value: "cooperation",
    link: COOPERATION_ROUTE,
  },
] as NavMenuInterface[];

export const menuSubheader = [
  {
    id: 0,
    value: "about_company",
    link: ABOUT_ROUTE,
  },
  {
    id: 1,
    value: "bonus",
    link: BONUS_ROUTE,
  },
  {
    id: 2,
    value: "delivery",
    link: DELIVERY_ROUTE,
  },
  {
    id: 3,
    value: "guarantee",
    link: GUARANTEE_ROUTE,
  },
] as NavMenuInterface[];
