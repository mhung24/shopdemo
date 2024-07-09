import React from "react";
import { useSelector } from "react-redux";
// import "./BoxProduct.css";
import { GrCart } from "react-icons/gr";
// import { Star } from "../Star/Star";
import trend_img from "../../assets/images/trend_img.jpg";
import trend_img1 from "../../assets/images/trend_img1.jpg";
import trend_img2 from "../../assets/images/trend_img2.jpg";

export const BoxProduct = ({ number }) => {
  const listProductTrend = useSelector(
    (state) => state.ProductSlice.productTrend
  );

  return (
    <>
      <img
        src={number === 0 ? trend_img : number === 1 ? trend_img1 : trend_img2}
        className="trend_img"
      />
      {listProductTrend.map((item, index) => (
        <div key={index} className="list_infor infor_trend">
          <img src={item.thumbnail} alt="" className="list_infor-img" />

          <div className="list_infor-text">
            <p className="list_infor-name"> {item.title}</p>
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
              <div className="list_infor-icon-cart">
                <GrCart />
              </div>
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
    </>
  );
};
