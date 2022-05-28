import { CartActionTypes, CartState, SetCartAction } from "../../types/types"

const initialState: CartState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0,
}

const getTotalPrice = (arr: any) => arr.reduce((sum: any, obj: any) => obj.price + sum, 0);

const _get = (obj: any, path: any) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val: any, key: any) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj: any, path: any) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

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
      const currentProductItems = !state.items[action.payload.id]
      ? [action.payload]
      : [...state.items[action.payload.id].items, action.payload]
      
      
      const newItems = {
        ...state.items, 
        [action.payload.id]: {
          items: currentProductItems,
          totalPrice: getTotalPrice(currentProductItems),
        }
      }

      const itemsCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
          ...state,
          items: newItems,
          itemsCount,
          totalPrice,
      };
    }
    case CartActionTypes.SET_PLUS_CART_ITEM: {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0]
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        }
      }
      
      const itemsCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalPrice,
        itemsCount,
      };
    }
    case CartActionTypes.SET_MINUS_CART_ITEM: {
      const oldItems = state.items[action.payload].items
      const newObjectItems = (
        oldItems.length > 0 
        ? state.items[action.payload].items.slice(1) 
        : oldItems
      )
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjectItems,
          totalPrice: getTotalPrice(newObjectItems),
        }
      }

      const itemsCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');
      
      return {
        ...state,
        items: newItems,
        totalPrice,
        itemsCount,
      };
    }
    case CartActionTypes.SET_CART_CLEAR: {
      return {
        itemsCount: 0,
        totalPrice: 0,
        items: {},
      }
    }
  default: 
      return state
  }
})