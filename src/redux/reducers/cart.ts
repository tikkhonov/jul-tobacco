import { CartActionTypes, CartState, SetCartAction } from "../../types/types"

const initialState: CartState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0,
}

export const cartReducer = ((state = initialState, action: SetCartAction): CartState => {
  switch (action.type) {
    case CartActionTypes.SET_TOTAL_PRICE:
      return { 
        ...state, 
        totalPrice: action.payload.totalPrice
      }
    case CartActionTypes.SET_ITEMS_COUNT:
      return { 
        ...state, 
        itemsCount: action.payload.itemsCount 
      }
    case CartActionTypes.SET_ADD_PRODUCTS_IN_CART: {
      const newItems = {
        ...state.items.id, 
        [action.payload.items?.id]: !state.items[action.payload.items?.id] 
          ? [action.payload] 
          : [...state.items[action.payload.items?.id], action.payload]
      }

      const allProducts = [].concat.apply([], Object.values(newItems))
      const totalPrice = allProducts.reduce((sum: number, obj: any) => obj?.price + sum, 0);

      return {
          ...state,
          items: newItems,
          itemsCount: allProducts.length,
          totalPrice,
      }
    }
  default: 
      return state
  }
})