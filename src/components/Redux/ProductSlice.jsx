import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  productTrend: [],
  technologyProduct: [],
  fashion: [],
  suggest: [],
};

export const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    // ListProduct: (state, action) => {
    //   return { ...state, product: action.payload };
    // },

    ListCategory: (state, action) => {
      return { ...state, product: action.payload };
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
  },
});

export const {
  ListCategory,
  ListProductTrend,
  ListDataProduct,
  ListDataFashion,
  ListSuggest,
} = ProductSlice.actions;

export default ProductSlice.reducer;
