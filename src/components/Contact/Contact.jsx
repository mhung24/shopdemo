import React, { useState } from "react";

import "./Contact.css";
import { NavLink } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsQuestionLg } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";

export const Contact = () => {
  const [number, setNumber] = useState(0);
  const [data, setData] = useState({
    fullName: "",
    gmail: "",
    content: "",
  });

  const [listData, setListData] = useState([]);
  const list = [
    {
      icon: <FaMapMarkerAlt />,
      head: "Địa chỉ:",
      text: "Hà Nội",
    },

    {
      icon: <BsQuestionLg />,
      head: "Gửi thắc mắc:",
      text: "support@gmail.com",
    },

    {
      icon: <FaPhone />,
      head: "Điện thoại:",
      text: "18001008",
    },
  ];

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  console.log(data);

  const test = () => {
    if (data.fullName === "") {
      console.log(1);
    } else console.log(2);
  };
  return (
    <div className="contact">
      <div className="flex mt-4 mb-4">
        <NavLink className="mr-3 intro_back" to={"/shopdemo"}>
          Trang chủ
        </NavLink>
        /<p className="ml-3 text-yellow-400">Liên hệ</p>
      </div>
      <div className="border-solid border-b-2 border-red-600 pb-4">
        <h1 className="text-xl font-semibold uppercase">Liên hệ</h1>
      </div>

      <div className="flex mt-5">
        <div>
          {list.map((item, index) => (
            <div
              className="w-96 flex items-center contact_infor mr-5 mb-3"
              key={index}
            >
              <div className="contact_icon ml-3">{item.icon}</div>
              <div>
                <h4 className="font-semibold">{item.head}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <div
            className={
              number === 1 ? "contact_sugg-true" : "contact_sugg-true-none"
            }
          >
            <p>Bạn đã gửi tin nhắn thành công</p>
          </div>
          <div>
            <div className="contact_input flex ">
              <div className="mr-3 w-1/2">
                <h1 className="font-semibold text-base ">Họ và tên</h1>
                <input
                  type="text"
                  required
                  onChange={handleOnchange}
                  name="fullName"
                />
              </div>

              <div className="w-1/2">
                <h1 className="font-semibold text-base ">Email</h1>
                <input
                  type="email"
                  required
                  onChange={handleOnchange}
                  name="gmail"
                />
              </div>
            </div>

            <div className="mt-5">
              <h1 className="font-semibold text-base ">Nội dung</h1>
              <textarea
                name="content"
                required
                onChange={handleOnchange}
              ></textarea>
            </div>

            <button onClick={test} className="contact_btn">
              Gửi liên hệ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
