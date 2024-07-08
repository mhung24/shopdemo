import React, { useState } from "react";
import "./Header.css";

import { CiSearch } from "react-icons/ci";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../../assets/images/logo_1.png";
import { Cart } from "../Cart/Cart";
import { Menu } from "../Menu/Menu";
import { NavLink, Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { IoMdClose } from "react-icons/io";

export const Header = () => {
  const list = [
    {
      to: "account/login",
      title: "Đăng nhập",
    },
  ];

  const [data, setData] = useState({
    historySearch: "",
  });

  const [listData, setListData] = useState([]);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleClick = () => {
    setListData([data, ...listData]);
    setData({ historySearch: "" });
  };

  return (
    <>
      <div className="header flex flex_fun">
        <NavLink to={"/shopdemo"}>
          <img src={logo} alt="Logo" className="header_logo" />
        </NavLink>

        <div className="header_search flex flex_fun">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm...."
            className="search"
            onChange={handleChange}
            name="historySearch"
            value={data.historySearch}
          />
          <CiSearch onClick={handleClick} />

          <div className="history_search">
            <div className="list_history">
              {listData?.map((item, index) => (
                <div className="list_history-item" key={index}>
                  <p key={index}>{item.historySearch}</p>
                </div>
              ))}
            </div>
            <p
              className={listData.length != 0 ? "no_listhistory" : "no_history"}
            >
              Chưa có lịch sử tìm kiếm
            </p>
          </div>
        </div>

        <div className="header_feature flex font-semibold">
          <div className="header_contact flex flex_fun">
            <LiaPhoneVolumeSolid className="header_feature-icon text_red" />
            <div className="contact">
              <p className="text_black">Liên hệ</p>
              <p className="text_red">19001008</p>
            </div>
          </div>

          <div className="header_login flex flex_fun">
            <CiUser className="header_feature-icon text_red" />
            <div className="login ">
              <p className="text_black">Xin chào</p>
              {list.map((item, index) => (
                <NavLink className="text_red" to={item.to} key={index}>
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        <div className="header_cart flex flex_fun">
          <FiShoppingCart className="header_cart-icon" />
          <div className="cart_quantity">
            <p>0</p>
          </div>
          <div className="list_cart">
            <Cart />
          </div>
        </div>
      </div>

      <Menu />

      <div className="content">
        <Outlet />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};
