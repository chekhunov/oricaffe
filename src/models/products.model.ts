import { ProductCardModel } from "./productCard.model";

interface PaginationModel {
  count?: number;
  first_url?: string;
  from?: number;
  in?: number;
  items?: number;
  last?: number;
  last_url?: string;
  next?: number;
  next_url?: string;
  page?: number;
  page_url?: string;
  pages?: number;
  prev?: null;
  prev_url?: string;
  scaffold_url?: string;
  series?: (number | string)[];
  to?: number;
  vars?: any;
}

export interface PaginationProductModel {
  products: ProductCardModel[];
  pagy: PaginationModel;
}

export interface ProductDTO {
  limit?: number;
  page?: number;
  category?: string;
}
