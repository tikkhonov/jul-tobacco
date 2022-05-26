import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as actionCreators from '../redux/actionCreators/products'
import * as actionFilterCreators from '../redux/actionCreators/filters'
import * as actionCartCreators from '../redux/actionCreators/cart'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actionCreators, dispatch)
}

export const useFilterActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actionFilterCreators, dispatch)
}

export const useCartActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actionCartCreators, dispatch)
}