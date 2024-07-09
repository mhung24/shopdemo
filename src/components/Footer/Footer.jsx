import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";

const text = [
  {
    name: "Văn phòng giao dịch",
  },

  {
    name: "Về chúng tôi",
  },

  {
    name: "Chính sách bán hàng",
  },

  {
    name: "Theo dõi chúng tôi",
  },
];

const list = [
  {
    to: "/shopdemo",
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
    to: "tuyen-dung",
    title: "Tuyển dụng",
  },
  {
    to: "lien-he",
    title: "Liên hệ",
  },
];

export const Footer = () => {
  return (
    <div className="footer_content">
      <div className="first_footer">
        {text.map((item, index) => (
          <div className="first_footer-ct" key={index}>
            <h1 className="title_menu">{item.name}</h1>
            {list.map((item, index) => (
              <NavLink key={index} to={item.to} className="first_footer-link">
                <p>{item.title}</p>
              </NavLink>
            ))}
          </div>
        ))}
      </div>

      <div className="child_footer">
        <div className="child_footer-text">
          <h1 className="title_menu">Thiên đường mua sắm</h1>

          <p className="first_footer-link">
            Copyright@ 2021 Công ty cổ phần thương mại
          </p>
          <p className="first_footer-link">
            Chứng nhận ĐKKD số: 0388282938 do sở KH & ĐT TP.Hà Nội cấp
          </p>
          <p className="first_footer-link">Địa chỉ: Hà Nội</p>
          <p className="first_footer-link">
            Điện thoại: 19001008 - Email: support@gmail.vn
          </p>
        </div>

        <div className="child_footer-register">
          <h1 className="title_menu">Nhận tin khuyển mãi</h1>
          <form>
            <div className="register">
              <input type="email" placeholder="Nhập email của bạn" />
              <button>Đăng ký </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
