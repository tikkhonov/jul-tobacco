import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as actionCreators from '../redux/actionCreators/products'
import * as actionFilterCreators from '../redux/actionCreators/filters'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actionCreators, dispatch)
}

export const useFilterActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actionFilterCreators, dispatch)
}