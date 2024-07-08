import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Intro.css";

export const Introduce = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 2);
  });

  return (
    <div className="intro">
      <div className="flex mt-4 mb-4">
        <NavLink className={"mr-3 intro_back"} to={"/shopdemo"}>
          Trang chủ
        </NavLink>
        /<p className="ml-3 text-yellow-400">Giới thiệu</p>
      </div>
      <div className="border-solid border-b-2 border-red-600 pb-4">
        <h1 className="text-xl font-semibold">GIỚI THIỆU</h1>
      </div>
      <p className="mt-4 text-base">
        <span className="font-semibold">POCO MART</span> là hệ thống siêu thị
        thuộc tập đoàn <span className="font-semibold">EGO</span>, Việt Nam. Hệ
        thống này khai trương ngày tháng 11 năm 2019. Theo thống kê của Vietnam
        Report, tính đến tháng 11/2020, PocoMart nằm top 2 nhà bán lẻ được người
        tiêu dùng quan tâm nhất và top 4 trên bảng xếp hạng 10 nhà bán lẻ uy tín
        năm 2020
      </p>
      <p className="mt-4 text-base">
        Tháng 5 năm 2021, POCO Mart có khoảng 40 siêu thị và khoảng hơn 600 cửa
        hàng Pocomart trên gần 50 tỉnh thành với tổng diện tích mặt bằng kinh
        doanh hơn 300.000 m2, số lượng nhân viên khoảng hơn 3.000 người.
      </p>
      <p className="mt-4 text-base">
        Các sản phẩm của PocoMart bao gồm thực phẩm tươi sống, thực phẩm sơ chế,
        quần áo, mỹ phẩm, đồ gia dụng, văn phòng phẩm, đồ chơi, v.v.
      </p>
    </div>
  );
};
