const initialState = {
  products: [],
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { products: [...state.products, action.payload] };
    default:
      return state;
  }
};
