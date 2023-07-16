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
  type_currency: string;
  imgUrl: string;
  info: string;
  link: string;
  cost: number;
}

export interface UserInterface {
  id: number;
  email: string;
  password: string;
  banned: boolean;
  banReason: string;
}

export interface PartnersInterface {
  id: number;
  title: string;
  address: string;
  link: string;
}
