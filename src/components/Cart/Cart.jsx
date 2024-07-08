import React from "react";
import "./Cart.css";

import no_cart from "../../assets/images/no_cart.png";

export const Cart = () => {
  return (
    <div className="no_cart">
      <img src={no_cart} alt="" />
      <p>Chưa có sản phẩm </p>
    </div>
  );
};
