import axios from "axios";

const url = "https://dummyjson.com/products";

const ApiService = {
  ApiProduct: async (skip = 0) => {
    return await axios(`${url}?limit=20&skip=${skip}`);
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

  DataPage: async () => {
    return await axios(url);
  },

  InforDataProduct: async (id) => {
    return await axios(`${url}/${id}`);
  },
};

export default ApiService;
