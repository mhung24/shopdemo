import React from "react";
import "./ListCategory.css";
import { useSelector } from "react-redux";

export const ListCategory = () => {
  const listCategory = useSelector((state) => state.ProductSlice.category);

  return (
    <div className="list_category">
      {listCategory.map((item, index) => (
        <p className="category" key={index}>
          {item.slice(0, 1).toUpperCase() + item.slice(1, 20)}
        </p>
      ))}
    </div>
  );
};
