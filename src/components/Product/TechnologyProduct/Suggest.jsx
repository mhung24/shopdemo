import React from "react";
import { useSelector } from "react-redux";
import { GrCart } from "react-icons/gr";
// import { Star } from "../../Star/Star";
import sale_img from "../../../assets/images/mblike.png";

export const Suggest = () => {
  const list = useSelector((state) => state.ProductSlice.suggest);

  return (
    <>
      <div className="list_technologyproduct-item suggest">
        {list.map((item, index) => (
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

        <div className="img_preferential-price">
          <img src={sale_img} alt="" />
        </div>
      </div>
    </>
  );
};
