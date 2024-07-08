import React from "react";
import { NavLink } from "react-router-dom";
import { ListTechnologyProduct } from "./ListTechnologyProduct";
import { Fashion } from "./Fashion";
import { Suggest } from "./Suggest";

export const TechnologyProduct = () => {
  const list = [
    {
      to: "dien-thoai-may-tinh-bang",
      title: "Điện thoại - Máy tính bảng",
    },
    {
      to: "phu-kien-thiet-bi-so",
      title: "Phụ kiện - Thiết bị số",
    },

    {
      to: "may-anh-quay-phim",
      title: "Máy ảnh - Máy quay phim",
    },

    {
      to: "laptop-thiet-bi-it",
      title: "Laptop - Thiết bị IT",
    },
  ];

  const listData = [
    {
      name: "Gợi ý hôm nay",
      link: <Suggest />,
    },

    {
      name: "Đồ công nghệ",
      list: [
        {
          to: "dien-thoai-may-tinh-bang",
          title: "Điện thoại - Máy tính bảng",
        },
        {
          to: "phu-kien-thiet-bi-so",
          title: "Phụ kiện - Thiết bị số",
        },

        {
          to: "may-anh-quay-phim",
          title: "Máy ảnh - Máy quay phim",
        },

        {
          to: "laptop-thiet-bi-it",
          title: "Laptop - Thiết bị IT",
        },
      ],

      link: <ListTechnologyProduct />,
    },

    {
      name: "Thời trang",
      list: [
        {
          to: "thoi-trang-nu",
          title: "Thời trang nữ",
        },
        {
          to: "thoi-trang-nam",
          title: "Thời trang nam",
        },

        {
          to: "dong-ho-trang-suc",
          title: "Đồng hồ và trang sức",
        },

        {
          to: "giay-dep-nu",
          title: "Giày dép nữ",
        },

        {
          to: "giay-dep-nam",
          title: "Giày dép nam",
        },
      ],

      link: <Fashion />,
    },
  ];
  return (
    <div className="product">
      {listData.map((item, index) => (
        <div key={index} className="technologyproduct">
          <div className="technologyproduct_header">
            <div className="technologyproduct_header-name">
              <p>{item.name}</p>
            </div>

            <div className="list_technologyproduct-name">
              {item.list?.map((item, index) => (
                <NavLink className={"list_item"} key={index} to={item.to}>
                  <p>{item.title}</p>
                </NavLink>
              ))}
            </div>
          </div>

          <div className="list_technologyproduct">
            <>{item.link}</>
          </div>
        </div>
      ))}
    </div>
  );
};
