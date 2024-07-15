import React, { useEffect } from "react";
import "./Home.css";

import ApiService from "../Api/ApiService";
import { useDispatch } from "react-redux";
import {
  ListCategory,
  ListProductTrend,
  ListDataProduct,
  ListDataFashion,
  ListSuggest,
  ListProduct,
} from "../Redux/ProductSlice";
import { Banner } from "../Banner/Banner";
import { TrendingProduct } from "../Product/TrendingProduct";
import { TechnologyProduct } from "../Product/TechnologyProduct/TechnologyProduct";

export const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  const dispatch = useDispatch();
  const loadData = async () => {
    const res = await ApiService.Api();

    dispatch(ListCategory(res.data));
  };

  const category = "laptops";

  const loadDataTrend = async (category) => {
    const dataTrend = await ApiService.ApiTrendingProduct(category);

    const { products } = dataTrend.data;

    dispatch(ListProductTrend(products.slice(0, 4)));
  };

  const loadDataTechnology = async () => {
    const dataTechnology = await ApiService.TechnologyProduct();

    const { products } = dataTechnology.data;

    dispatch(ListDataProduct(products.slice(0, 8)));
  };

  const loadDataFashion = async () => {
    const dataFashion = await ApiService.Fashion();

    const { products } = dataFashion.data;

    dispatch(ListDataFashion(products));
  };

  const loadDataSuggest = async () => {
    const dataSuggest = await ApiService.Suggest();

    const { products } = dataSuggest.data;

    dispatch(ListSuggest(products));
  };

  const loadListProduct = async () => {
    const dataProduct = await ApiService.ApiProduct();

    const { products } = dataProduct.data;

    dispatch(ListProduct(products));
  };

  useEffect(() => {
    loadData();
    loadDataTrend(category);
    loadDataTechnology();
    loadDataFashion();
    loadDataSuggest();
    loadListProduct();
  }, []);
  return (
    <>
      <Banner />
      <TrendingProduct onChoosenData={loadDataTrend} />
      <TechnologyProduct />
    </>
  );
};
