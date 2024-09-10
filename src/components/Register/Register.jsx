import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import facebook from "../../assets/fb-btn.svg";
import google from "../../assets/gp-btn.svg";

export const Register = () => {
  const [checkData, setcheckData] = useState({
    surname: "",
    name: "",
    phone: "",
    username: "",
    password: "",
  });
  const filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  const [data, setData] = useState();

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

  const checkDataInput = (e) => {
    const { name, value } = e.target;
    setcheckData({ ...checkData, [name]: value });
  };

  const handleSubmit = () => {
    // if (
    //   checkData.surname !== "" &&
    //   checkData.name !== "" &&
    //   checkData.phone !== "" &&
    //   checkData.username !== "" &&
    //   checkData.password !== ""
    // ) {
    //   setCheckError({
    //     ...data,
    //     hidden: true,
    //     checkMail: true,
    //   });
    // } else
    //   setCheckError({
    //     ...data,
    //   });
  };

  // console.log(data, "data");

  // console.log(checkTrue);

  return (
    <div className="register">
      <div className="flex mt-4 mb-4">
        <NavLink className="mr-3 intro_back" to={"/shopdemo"}>
          Trang chủ
        </NavLink>
        /<p className="ml-3 text-yellow-400">Đăng ký</p>
      </div>

      <div className="form_register">
        <div className="m-8 form_login-left">
          <h1 className="font-semibold uppercase text-xl mb-2">
            Đăng ký tài khoản
          </h1>
          <div>
            <div>
              <h2 className="font-semibold mt-2">Họ</h2>
              <input
                className="login_input"
                type="text"
                placeholder="Họ"
                required
                onChange={checkDataInput}
                name="surname"
                value={checkData.surname}
              />

              <p
                className={
                  data?.surname === "" && checkData.surname === ""
                    ? "text_failure"
                    : checkData.surname !== ""
                    ? "hidden"
                    : "hidden"
                }
              >
                Bạn không được bỏ trống ô này
              </p>
            </div>
            <div>
              <h2 className="font-semibold mt-2">Tên </h2>
              <input
                className="login_input"
                type="text"
                placeholder="Tên "
                required
                onChange={checkDataInput}
                name="name"
              />
              <p
                className={
                  data?.name === "" && checkData.name === ""
                    ? "text_failure"
                    : checkData.name !== ""
                    ? "hidden"
                    : "hidden"
                }
              >
                Bạn không được bỏ trống ô này
              </p>
            </div>

            <div>
              <h2 className="font-semibold mt-2">Số điện thoại</h2>
              <input
                className="login_input"
                type="text"
                placeholder="Số điện thoại"
                required
                onChange={checkDataInput}
                name="phone"
              />
              <p
                className={
                  data?.phone === "" && checkData.phone === ""
                    ? "text_failure"
                    : checkData.phone !== ""
                    ? "hidden"
                    : "hidden"
                }
              >
                Bạn không được bỏ trống ô này
              </p>

              <p
                className={
                  checkData.phone.length !== 10 && checkData.phone !== ""
                    ? "text_failure"
                    : "hidden"
                }
              >
                Bạn nhập sai định dạng số điện thoại
              </p>
            </div>
            <div>
              <h2 className="font-semibold mt-2">Tên đăng nhập /Email</h2>
              <input
                className="login_input"
                type="text"
                placeholder="Tên đăng nhập / Email"
                required
                onChange={checkDataInput}
                name="username"
              />
              <p
                className={
                  data?.username === "" && checkData.username === ""
                    ? "text_failure"
                    : checkData.username !== ""
                    ? "hidden"
                    : "hidden"
                }
              >
                Bạn không được bỏ trống ô này
              </p>
            </div>

            <div>
              <h2 className="font-semibold mt-2">Mật khẩu</h2>
              <input
                className="login_input"
                type="password"
                placeholder="Mật khẩu"
                required
                onChange={checkDataInput}
                name="password"
              />
              <p
                className={
                  data?.password === "" && checkData.password === ""
                    ? "text_failure"
                    : checkData.password !== ""
                    ? "hidden"
                    : "hidden"
                }
              >
                Bạn không được bỏ trống ô này
              </p>

              <p
                className={
                  checkData.password.length < 6 && checkData.password !== ""
                    ? "text_failure"
                    : "hidden"
                }
              >
                Mật khẩu từ 6 - 50 kí tự
              </p>
            </div>
            <button className="btn_login" onClick={handleSubmit}>
              Đăng ký
            </button>
          </div>

          <div className="another_login">
            <p className="text-center">
              <span>Hoặc đăng nhập bằng</span>
            </p>

            <div className="another_login-icon">
              <img src={facebook} alt="" />
              <img src={google} alt="" />
            </div>

            {/* <p className="forgot_password">Quên mật khẩu ?</p> */}
          </div>
        </div>

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

            <NavLink to={"/account/login"}>
              {" "}
              <button className="btn_register">Đăng nhập</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
