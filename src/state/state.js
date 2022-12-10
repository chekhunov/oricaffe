let state = {
  menuItems: [
    {
      id: 0,
      value: "О нас",
      link: "history",
    },
    {
      id: 1,
      value: "Каталог",
      link: "catalog",
      category: [
        {
          id: 0,
          value: "Каталог",
          link: "catalog",
        },
        {
          id: 1,
          value: "Каталог",
          link: "catalog",
        },
        {
          id: 2,
          value: "Каталог",
          link: "catalog",
        },
      ],
    },
    {
      id: 2,
      value: "Услуги",
      link: "services",
    },
    {
      id: 3,
      value: "Качество",
      link: "quality",
    },
    {
      id: 4,
      value: "Сотрудничество",
      link: "cooperation",
    },
  ],
};

export default state;
