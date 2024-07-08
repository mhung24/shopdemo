import axios from "axios";

const url = "https://dummyjson.com/products";

const ApiService = {
  ApiProduct: async () => {
    return await axios(`${url}?limit=1000`);
  },

  Api: async () => {
    return await axios(`${url}/category-list`);
  },

  ApiTrendingProduct: async (category) => {
    return await axios(`${url}/category/${category}`);
  },

  TechnologyProduct: async () => {
    return await axios(`${url}/category/mobile-accessories`);
  },

  Fashion: async () => {
    return await axios(`${url}/category/mens-shirts`);
  },

  Suggest: async () => {
    return await axios(`${url}/category/laptops`);
  },
};

export default ApiService;
