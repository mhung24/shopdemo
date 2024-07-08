import React, { useState } from "react";
import { BoxProduct } from "./BoxProduct";

export const TrendingProduct = (props) => {
  const { onChoosenData } = props;
  const [updateStyle, setUpdateStyle] = useState(0);

  const setStyle = (number) => {
    setUpdateStyle(number);
  };

  return (
    <div className="trending">
      <div className="trending_product">
        <div
          className={
            updateStyle === 0
              ? "trending_product-header trending_click trending_bgo"
              : "trending_product-header"
          }
          onClick={() => {
            setStyle(0);
            onChoosenData("laptops");
          }}
        >
          <h1 className="trending_product-name">Laptop</h1>
          <p className="trending_product-title">Giảm ngay 20% khi mua online</p>
        </div>

        <div
          className={
            updateStyle === 1
              ? "trending_product-header trending_click trending_bgy"
              : "trending_product-header"
          }
          onClick={() => {
            setStyle(1);
            onChoosenData("mens-shoes");
          }}
        >
          <h1 className="trending_product-name">Thời trang</h1>
          <p className="trending_product-title">Giảm cực lớn lên tới 70%</p>
        </div>

        <div
          className={
            updateStyle === 2
              ? "trending_product-header trending_click trending_bgg"
              : "trending_product-header"
          }
          onClick={() => {
            setStyle(2);
            onChoosenData("kitchen-accessories");
          }}
        >
          <h1 className="trending_product-name">Gia dụng</h1>
          <p className="trending_product-title">Siêu ưu đãi lên tới 30%</p>
        </div>
      </div>

      <div
        className={
          updateStyle === 0
            ? "list_product-trend style trending_bgo"
            : updateStyle === 1
            ? "list_product-trend style trending_bgy"
            : "list_product-trend style trending_bgg"
        }
      >
        <BoxProduct number={updateStyle} />
      </div>
    </div>
  );
};
