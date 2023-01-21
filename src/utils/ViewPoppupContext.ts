import { createContext } from 'react'
import { PoppupModel } from '../models/poppupToCart.model'

interface ViewPoppupContextProps {
  to_cart: Pick<PoppupModel, 'to_cart'>
}

const ViewRequestsContext = createContext<ViewPoppupContextProps>({
    to_cart: {
      id: '',
      name: '',
      desc: '',
      cupage: '',
      weight: 0,
      weightBox: 0,
      price: 0,
      imgUrl: '',
      info: '',
      link: ''
    },
})

export default ViewRequestsContext
