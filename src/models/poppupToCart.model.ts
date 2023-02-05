import {CartModel} from './cart.model';

export interface PoppupModel {
  profile: {
    firstName: string
    lastName: string
    email: string
    phoneNumber: null
  }
  isActiveCardPopup: boolean
  dataCart: CartModel[]
  type: string
  to_cart: CartModel
}