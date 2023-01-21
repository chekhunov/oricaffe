import { CategoryModel } from '../models/category.model'

export interface NavMenuInterface {
  id: number
  value: string
  link: string
  category: CategoryModel[]
}