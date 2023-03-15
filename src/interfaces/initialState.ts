import { CategoryModel } from '../models/category.model'
import { TopProductCardInterface } from './appointments'
import { NavMenuInterface } from './navMenu'

export interface InitialStateInterface {
  nav_menu: NavMenuInterface[]
  menu_subheader: NavMenuInterface[],
  category: CategoryModel[],
  top_products: TopProductCardInterface[]
}