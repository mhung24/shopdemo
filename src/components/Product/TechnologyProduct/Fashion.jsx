import React from "react";
import "./ListTech.css";

import banner_1 from "../../../assets/images/banner_fashion_1.jpg";
import banner_2 from "../../../assets/images/banner_fashion_2.jpg";
import { useSelector } from "react-redux";
import { GrCart } from "react-icons/gr";
import { Star } from "../../Star/Star";

export const Fashion = () => {
  const data = useSelector((state) => state.ProductSlice.fashion);

  return (
    <>
      <div className="list_technologyproduct-banner fashion_banner">
        <img src={banner_1} alt="" className="" />
        <img src={banner_2} alt="" />
      </div>

      <div className="list_technologyproduct-item">
        {data.map((item, index) => (
          <div key={index} className="list_infor">
            <img src={item.thumbnail} alt="" className="list_infor-img" />

            <div className="list_infor-text">
              <p className="list_infor-name">{item.title}</p>
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

              {/* <Star /> */}
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
