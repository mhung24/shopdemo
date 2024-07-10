import React, { useEffect, useState } from "react";

import "./Contact.css";
import { NavLink } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsQuestionLg } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";

export const Contact = () => {
  const [checkError, setCheckError] = useState();

  const [data, setData] = useState({
    fullName: "",
    gmail: "",
    content: "",
    checkMail: false,
    hidden: false,
  });

  const trueData = "Bạn đã gửi tin nhắn thành công";

  const errorData = "Bạn không được bỏ trống ô này";
  const errCheckMail = "";

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
  const filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const checkValue = () => {
    if (
      data.fullName !== "" &&
      data.gmail !== "" &&
      data.content !== "" &&
      filter.test(data.gmail) === true
    ) {
      setCheckError({
        ...data,
        hidden: true,
        checkMail: true,
      });
    } else
      setCheckError({
        ...data,
      });
  };

  const resetData = () => {
    setData({
      fullName: "",
      gmail: "",
      content: "",
      checkMail: false,
      hidden: false,
    });
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
              checkError?.hidden === true && checkError.checkMail === true
                ? "contact_success"
                : "hidden"
            }
          >
            <p>{trueData}</p>
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
                  className={
                    checkError?.fullName === "" && data.fullName === ""
                      ? "contact_failure"
                      : data.fullName !== ""
                      ? "contact_input-success"
                      : "contact_input-success"
                  }
                  value={data.fullName}
                />
                <p
                  className={
                    checkError?.fullName === "" && data.fullName === ""
                      ? "text_failure"
                      : data.fullName !== ""
                      ? "hidden"
                      : "hidden"
                  }
                >
                  Bạn không được bỏ trống ô này
                </p>
              </div>

              <div className="w-1/2">
                <h1 className="font-semibold text-base ">Email</h1>
                <input
                  id="gmail_input"
                  type="email"
                  required
                  onChange={handleOnchange}
                  name="gmail"
                  className={
                    checkError?.gmail === "" && data.gmail === ""
                      ? "contact_failure"
                      : data.gmail !== ""
                      ? "contact_input-success"
                      : "contact_input-success"
                  }
                  value={data.gmail}
                />
                <p
                  className={
                    checkError?.gmail === "" && data.gmail === ""
                      ? "text_failure"
                      : data.gmail !== ""
                      ? "hidden"
                      : "hidden"
                  }
                >
                  Bạn không được bỏ trống ô này
                </p>
                <p
                  className={
                    filter.test(data.gmail) !== true && data.gmail !== ""
                      ? "text_failure"
                      : "hidden"
                  }
                >
                  Bạn cần nhập đúng định dạng. Ví dụ : example@gmail.com
                </p>
              </div>
            </div>

            <div className="mt-5">
              <h1 className="font-semibold text-base ">Nội dung</h1>
              <textarea
                name="content"
                required
                onChange={handleOnchange}
                className={
                  checkError?.content === "" && data.content === ""
                    ? "contact_failure pt-2"
                    : data.content !== ""
                    ? "contact_input-success pt-2"
                    : "contact_input-success pt-2"
                }
                value={data.content}
              ></textarea>
              <p
                className={
                  checkError?.content === "" && data.content === ""
                    ? "text_failure"
                    : data.content !== "" && checkError?.content
                    ? "hidden"
                    : "hidden"
                }
              >
                Bạn chưa nhập nội dung
              </p>
            </div>

            <button
              onClick={() => {
                checkValue();
                resetData();
              }}
              className="contact_btn"
            >
              Gửi liên hệ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
