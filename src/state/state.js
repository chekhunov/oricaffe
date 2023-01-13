const category = [
  {
    id: 0,
    value: "category_products.coffee",
    link: "catalog/coffee",
    img: "/category/bean-c.png",
  },
  {
    id: 1,
    value: "category_products.tea",
    link: "catalog/tea",
    img: "/category/tea.jpg",
  },
  {
    id: 2,
    value: "category_products.chocolate",
    link: "catalog/chocolate",
    img: "/category/powder.jpg",
  },
  {
    id: 3,
    value: "category_products.coffee_equipment",
    link: "catalog/equipment",
    img: "/category/coffee-equipment.jpg",
  },
  {
    id: 4,
    value: "category_products.coffee_accessories",
    link: "catalog/accessories",
    img: "/category/coffee-accessories.jpg",
  },
];

let state = {
  menuItems: [
    {
      id: 1,
      value: "catalog",
      link: "catalog",
      category: category,
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
  ],
  category_products: category,
  menu_subheader: [
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
  ],
};

export default state;
