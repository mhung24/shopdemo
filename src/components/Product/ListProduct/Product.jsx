import React from "react";
import { GrCart } from "react-icons/gr";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { InforProduct } from "../../InforProduct/InforProduct";

export const Product = () => {
  const listProduct = useSelector((state) => state.ProductSlice.nextProduct);

  return (
    <>
      {listProduct.map((item, index) => (
        <div className="list_infor infor_product" key={index}>
          <NavLink
            className={({ isActive }) => (isActive ? "" : "")}
            to={{ pathname: `${item.id}` }}
          >
            <img src={item.thumbnail} alt="" className="list_infor-img" />
          </NavLink>

          <div className="list_infor-text">
            <NavLink
              className={({ isActive }) => (isActive ? "" : "")}
              to={{ pathname: `${item.id}` }}
            >
              <p className="list_infor-name"> {item.title}</p>
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
                {/* $ {item.discountPercentage + item.price} */}
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
