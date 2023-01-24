import { CartModel } from './cart.model';

export interface PoppupModel { 
  isActiveCardPopup: boolean
  dataCart: CartModel[]
  type: string
  to_cart: CartModel
}