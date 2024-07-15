import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
  productTrend: [],
  technologyProduct: [],
  fashion: [],
  suggest: [],
  product: [],
};

export const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    ListCategory: (state, action) => {
      return { ...state, category: action.payload };
    },

    ListProductTrend: (state, action) => {
      return { ...state, productTrend: action.payload };
    },

    ListDataProduct: (state, action) => {
      return { ...state, technologyProduct: action.payload };
    },

    ListDataFashion: (state, action) => {
      return { ...state, fashion: action.payload };
    },

    ListSuggest: (state, action) => {
      return { ...state, suggest: action.payload };
    },
    ListProduct: (state, action) => {
      return { ...state, product: action.payload };
    },
  },
});

export const {
  ListCategory,
  ListProductTrend,
  ListDataProduct,
  ListDataFashion,
  ListSuggest,
  ListProduct,
} = ProductSlice.actions;

export default ProductSlice.reducer;
