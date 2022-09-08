import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productType, productDetail } from "./../../@type/productType";

interface InitialState {
  product: productType[];
  productDetail: productDetail;
}
const initialState: InitialState = {
  product: [],
  productDetail: {
    id: 1,
    name: "",
    alias: "",
    price: 1,
    feature: false,
    description: "",
    size: [],
    shortDescription: "",
    quantity: 1,
    image: "",
    category: "",
    relatedProducts: [],
  },
};

export const { reducer: productReducer, actions: productAct } = createSlice({
  initialState,
  name: "product",
  reducers: {
    getProduct: (state, action: PayloadAction<any>) => {
      state.product = action.payload;
    },
    getDetailProduct: (state, action: PayloadAction<any>) => {
        state.productDetail = action.payload;
    },
  },
});
