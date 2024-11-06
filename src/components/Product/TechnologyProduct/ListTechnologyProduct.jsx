import React from "react";
import "./ListTech.css";

import banner_1 from "../../../assets/images/banner_1.jpg";
import banner_2 from "../../../assets/images/banner_2.jpg";
import { useSelector } from "react-redux";
import { GrCart } from "react-icons/gr";
import { NavLink } from "react-router-dom";

export const ListTechnologyProduct = () => {
  const list = useSelector((state) => state.ProductSlice.technologyProduct);
  return (
    <>
      <div className="list_technologyproduct-banner">
        <img src={banner_1} alt="" className="" />
        <img src={banner_2} alt="" />
      </div>

      <div className="list_technologyproduct-item">
        {list.map((item, index) => (
          <div key={index} className="list_infor">
            <NavLink
              className={({ isActive }) => (isActive ? "" : "")}
              to={{ pathname: `/san-pham/${item.id}` }}
            >
              <img src={item.thumbnail} alt="" className="list_infor-img" />
            </NavLink>

            <div className="list_infor-text">
              <NavLink
                className={({ isActive }) => (isActive ? "" : "")}
                to={{ pathname: `/san-pham/${item.id}` }}
              >
                <p className="list_infor-name">{item.title}</p>
              </NavLink>
              <p className="list_infor-price">$ {item.price}</p>
              <div className="flex text-center justify-between">
                <p className="list_infor-price-old">
                  ${" "}
                  {item.price < 10
                    ? item.price + 10.1
                    : item.price < 100
                    ? item.price + 100
                    : item.price < 1500
                    ? item.price + 1000
                    : item.price + 1150}
                </p>
                <div className="list_infor-icon-cart">{<GrCart />}</div>
              </div>
            </div>
            <div className="sale">
              <p>Giảm</p>
              <p>
                {(
                  100 -
                  (item.price /
                    (item.price < 10
                      ? item.price + 10.1
                      : item.price < 100
                      ? item.price + 100
                      : item.price < 1500
                      ? item.price + 1000
                      : item.price + 1150)) *
                    100
                ).toFixed()}{" "}
                %
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
