export interface ProductCardInterface {
  id: number | string;
  code: string;
  category: string;
  name: string;
  type_of_coffee: string;
  desc: string;
  sort: string;
  weight: number;
  weight_box: number;
  price_opt: number;
  priceOpt?: number;
  price_site: number;
  priceSite?: number;
  type_currency: string;
  imgUrl: string;
  info: string;
  link: string;
}

export interface UserInterface {
  id: number;
  email: string;
  password: string;
  banned: boolean;
  banReason: string;
}
