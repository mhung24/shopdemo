import React from "react";
import { NavLink } from "react-router-dom";
import facebook from "../../assets/fb-btn.svg";
import google from "../../assets/gp-btn.svg";
import "./Login.css";

export const Login = () => {
  const list = [
    {
      text: "Vận chuyển siêu tốc",
    },
    {
      text: "Sản phẩm đa dạng",
    },
    {
      text: "Đổi trả dễ dàng",
    },
    {
      text: "Tích điểm đổi quà",
    },
    {
      text: "Giảm giá lên đến 10% cho lần mua tiếp theo",
    },
  ];

  const listAccount = [
    {
      userName: "admin",
      password: "admin",
    },
  ];

  // const checkAccount = (e) => {
  //   console.log(e.target);
  // };
  return (
    <div className="login">
      <div className="flex mt-4 mb-4">
        <NavLink className="mr-3 intro_back" to={"/shopdemo"}>
          Trang chủ
        </NavLink>
        /<p className="ml-3 text-yellow-400">Đăng nhập</p>
      </div>

      <div className="form_login">
        <form className="m-8 form_login-left">
          <h1 className="font-semibold uppercase text-xl mb-2">Đăng nhập</h1>
          <div>
            <div>
              <h2 className="font-semibold mt-2">Tên đăng nhập /Email</h2>
              <input
                className="login_input"
                type="text"
                placeholder="Tên đăng nhập / Email"
                required
                // onChange={checkAccount}
              />
            </div>

            <div>
              <h2 className="font-semibold mt-2">Mật khẩu</h2>
              <input
                className="login_input"
                type="password"
                placeholder="Mật khẩu"
                required
              />
            </div>
            <button className="btn_login">Đăng nhập</button>
          </div>

          <div className="another_login">
            <p className="text-center">
              <span>Hoặc đăng nhập bằng</span>
            </p>

            <div className="another_login-icon">
              <img src={facebook} alt="" />
              <img src={google} alt="" />
            </div>

            <p className="forgot_password">Quên mật khẩu ?</p>
          </div>
        </form>

        <div className="form_login-right">
          <div className="m-8">
            <h1 className="uppercase font-semibold text-base">
              Quyền lợi với thành viên
            </h1>
            {list.map((item, index) => (
              <div key={index}>
                <p className="mt-4">{item.text}</p>
              </div>
            ))}

            <NavLink to={"/account/register"}>
              <button className="btn_register">Đăng ký</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
