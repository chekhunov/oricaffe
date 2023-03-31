export interface TopProductCardInterface {
  id: number | string;
  name: string;
  desc: string;
  sort: string;
  weight: number;
  weightBox: number;
  price: number;
  imgUrl: string;
  info: string;
  link: string;
}

export interface ProductCardInterface {
  id: number | string;
  code: number;
  name: string;
  category: string;
  desc: string;
  sort: string;
  weight: number;
  weightBox: number;
  price: number;
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
