import React from "react";
import "./Menu.css";

import { PiListBold } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";
import { ListCategory } from "./ListCategory/ListCategory";

export const Menu = () => {
  const list = [
    {
      to: "/",
      title: "Trang chủ",
    },
    {
      to: "gioi-thieu",
      title: "Giới thiệu",
    },
    {
      to: "san-pham",
      title: "Sản phẩm",
    },
    {
      to: "tin-moi-nhat",
      title: "Tin mới nhất",
    },
    {
      to: "cau-hoi-thuong-gap",
      title: "Câu hỏi thường gặp",
    },

    {
      to: "tuyen-dung",
      title: "Tuyển dụng",
    },
    {
      to: "lien-he",
      title: "Liên hệ",
    },
  ];
  return (
    <div className="menu">
      <div className="menu_item flex items-center justify-between">
        <div className="category_product flex items-center">
          <PiListBold className="list_icon" />
          <p>Danh mục sản phẩm</p>
          <div className="category_item">
            <ListCategory />
          </div>
        </div>

        <div className="list_menu">
          {list.map((item, index) => (
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={item.to}
              key={index}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
