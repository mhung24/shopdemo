import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Product } from "./Product";
import { NextDataProduct } from "../../NextDataProduct/NextDataProduct";
import ApiService from "../../Api/ApiService";
import { ListDataNextProduct } from "../../Redux/ProductSlice";

const list = [
  {
    name: "Từ A đến Z",
  },
  {
    name: "Từ Z đến A",
  },
  {
    name: "Giá cao xuống thấp",
  },
  {
    name: "Giá thấp đến cao",
  },
];

export const ListProduct = () => {
  const dispatch = useDispatch();
  const loadNextDataProduct = async (skip) => {
    const dataNextProduct = await ApiService.DataNextProduct(skip);

    const { products } = dataNextProduct.data;
    dispatch(ListDataNextProduct(products));
  };

  useEffect(() => {
    loadNextDataProduct(0);
  }, []);
  const listCategory = useSelector((state) => state.ProductSlice.category);
  return (
    <div className="product flex mt-3 mb-3">
      <div className="list_category-product w-72">
        <h1 className="uppercase font-semibold text-base  mb-3">
          Danh mục sản phẩm
        </h1>
        {listCategory.map((item, index) => (
          <NavLink
            key={index}
            className={({ isActive }) => (isActive ? "" : "")}
          >
            <p className="list_category-product-item">
              {item.slice(0, 1).toUpperCase() + item.slice(1, 20)}
            </p>
          </NavLink>
        ))}
      </div>
      <div className="list_product">
        <div className="flex arrange">
          {list.map((item, index) => (
            <div key={index} className="arrange-item">
              <p>{item.name}</p>
            </div>
          ))}
        </div>

        <div className="list_item-product justify-between mb-10">
          <Product />
        </div>
        <div className="flex justify-center mb-7">
          <NextDataProduct onChoosenData={loadNextDataProduct} />
        </div>
      </div>
    </div>
  );
};
