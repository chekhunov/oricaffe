import { NavMenuInterface } from "../interfaces/navMenu";
import { CategoryModel } from "../models/category.model";

export const categoryProducts = [
  {
    id: 1,
    value: "category_products.coffee",
    link: "catalog/coffee",
    img: "/category/bean-c.png",
    bgColor: "#e33939",
  },
  {
    id: 2,
    value: "category_products.tea",
    link: "catalog/tea",
    img: "/category/tea.jpg",
    bgColor: "#f1c40f",
  },
  {
    id: 3,
    value: "category_products.chocolate",
    link: "catalog/chocolate",
    img: "/category/powder.jpg",
    bgColor: "#e33939",
  },
  {
    id: 4,
    value: "category_products.coffee_equipment",
    link: "catalog/equipment",
    img: "/category/coffee-equipment.jpg",
    bgColor: "#f1c40f",
  },
  {
    id: 5,
    value: "category_products.coffee_accessories",
    link: "catalog/accessories",
    img: "/category/coffee-accessories.jpg",
    bgColor: "#e33939",
  },
] as CategoryModel[];

export const navMenu = [
  {
    id: 1,
    value: "catalog",
    link: "catalog",
    category: categoryProducts,
  },
  {
    id: 2,
    value: "services",
    link: "services",
  },
  {
    id: 3,
    value: "quality",
    link: "quality",
  },
  {
    id: 4,
    value: "cooperation",
    link: "cooperation",
  },
] as NavMenuInterface[];

export const menuSubheader = [
  {
    id: 0,
    value: "about_company",
    link: "about",
  },
  {
    id: 1,
    value: "bonus",
    link: "bonus",
  },
  {
    id: 2,
    value: "delivery",
    link: "delivery",
  },
  {
    id: 3,
    value: "guarantee",
    link: "guarantee",
  },
] as NavMenuInterface[];
