

export const fetchProducts = ({items}: {items: any[]}) => ({
  type: "FETCH_PRODUCTS",
  payload: items,
})
