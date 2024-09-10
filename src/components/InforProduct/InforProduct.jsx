import React, { useEffect, useState } from "react";
import ApiService from "../Api/ApiService";
import { NavLink, useParams } from "react-router-dom";
import "./InforProduct.css";

export const InforProduct = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 5);
  });
  const { id: idProduct } = useParams();
  const [dataInforProduct, setDataInforProduct] = useState({
    id: null,
    title: "",
    description: "",
    category: "",
    images: [],
    price: "",
    rating: "",
    thumbnail: "",
    reviews: [],
    brand: "",
  });
  const loadData = async () => {
    const dataProduct = await ApiService.InforDataProduct(idProduct);
    const {
      id,
      title,
      description,
      category,
      images,
      price,
      rating,
      thumbnail,
      reviews,
      brand,
    } = dataProduct.data;
    if (dataProduct.status === 200) {
      setDataInforProduct({
        id,
        title,
        description,
        category,
        images,
        price,
        rating,
        thumbnail,
        reviews,
        brand,
      });
    }
  };

  console.log(dataInforProduct);
  useEffect(() => {
    if (idProduct) {
      loadData();
    }
  }, []);
  return (
    <div className="">
      <div className="flex mt-4 mb-4">
        <NavLink className="mr-3 intro_back" to={"/shopdemo"}>
          Trang chủ
        </NavLink>
        <span className="mr-2">/</span>
        <p> {dataInforProduct.category}</p>
        <span className="mr-2 ml-2">/</span>
        <p className="text-yellow-400">{dataInforProduct.title}</p>
      </div>

      <div className="infor-product">
        <div className="infor-product-img">
          <img
            src={dataInforProduct.thumbnail}
            alt=""
            className="infor-product-img-big"
          />
          <div>
            {dataInforProduct.images?.map((item, index) => (
              <div key={index}>
                <img className="infor-product-img-small" src={item} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="list_product-infor">
          <p className="font-semibold">{dataInforProduct.title}</p>

          <p>
            Thương hiệu:{" "}
            <span className="font-semibold">
              {dataInforProduct.brand
                ? dataInforProduct.brand
                : "(Đang cập nhật)"}
            </span>
          </p>
          <div className="flex">
            <p>
              Giá:{" "}
              <span className="font-semibold_redcl">
                {" "}
                $ {dataInforProduct.price}
              </span>
            </p>
            <p>Giá niêm yết: $ {dataInforProduct.price + 100} </p>
          </div>
          <p>
            Tiết kiệm :
            <span className="font-semibold_redcl">
              $ {dataInforProduct.price + 100 - dataInforProduct.price}
            </span>{" "}
            so với giá thị trường
          </p>
          {/* <p className={dataInforProduct} >Size : </p> */}
        </div>
      </div>
    </div>
  );
};
