let state = {
  menuItems: [
    {
      id: 0,
      value: "about",
      link: "history",
    },
    {
      id: 1,
      value: "catalog",
      link: "catalog",
      category: [
        {
          id: 0,
          value: "category_products.coffee",
          link: "catalog",
        },
        {
          id: 1,
          value: "category_products.coffee_equipment",
          link: "catalog",
        },
        {
          id: 2,
          value: "category_products.tea",
          link: "catalog",
        },
        {
          id: 3,
          value: "category_products.chocolate",
          link: "catalog",
        },
      ],
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
};

export default state;
