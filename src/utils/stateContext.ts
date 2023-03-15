import {createContext} from 'react'
import {PoppupModel} from '../models/poppupToCart.model'

interface StateContextProps {
  stateContext: Pick<PoppupModel, 'to_cart' | 'isActiveCardPopup' | 'type' | 'dataCart'>
  setStateContext?: () => void
}

const StateContext = createContext<StateContextProps>({
  stateContext: {
    isActiveCardPopup: false,
    type: '',
    dataCart: [],
    to_cart: {
      id: '',
      code: '',
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
  }
})

export default StateContext
