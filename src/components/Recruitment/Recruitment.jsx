import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import img from "../../assets/images/img.png";

export const Recruitment = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 5);
  });
  return (
    <div className="recruitment">
      <div className="flex mt-4 mb-4">
        <NavLink className="mr-3 intro_back" to={"/shopdemo"}>
          Trang chủ
        </NavLink>
        /<p className="ml-3 text-yellow-400">Tuyển dụng</p>
      </div>
      <div className="border-solid border-b-2 border-red-600 pb-4">
        <h1 className="text-xl font-semibold uppercase">Tuyển dụng</h1>
      </div>

      <div className="mt-4">
        <h1 className="font-bold text-lg mb-4">
          POCO MART TUYỂN DỤNG NHÂN VIÊN BÁN HÀNG FULLTIME
        </h1>
        <img src={img} />

        <div className="mt-4">
          <h1 className="font-bold text-base uppercase ">Mô tả công việc</h1>
          <ul className="leading-8">
            <li>- Tính tiền quản lý thu chi trong ca làm việc</li>
            <li>- Tiếp nhận hàng, trưng bày hàng hóa đúng quy tắc</li>
            <li>- Vệ sinh sạch sẽ siêu thị, quầy thu ngân</li>
            <li>- Chủ động hỗ trợ, phục vụ khách hàng</li>
            <li>
              - Tư vấn giải đáp thắc mắc,yêu cầu của khách hàng khi tham quan
              mua sắm
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <h1 className="font-bold text-base uppercase ">YÊU CẦU ỨNG VIÊN:</h1>
          <ul className="leading-8">
            <li>- Nam/Nữ</li>
            <li>- Tốt nghiệp THPT trở lên, kỹ năng giao tiếp tốt</li>
            <li>
              - Có khả năng làm việc{" "}
              <span className="font-semibold">
                xoay ca (không làm chết ca):
              </span>
              <ol>+ Ca sáng (6:00 - 14:00)</ol>
              <ol>+ Ca chiều (13:30:00 - 22:00)</ol>
              <ol>+ Đăng ký ca trước làm 1 tuần</ol>
            </li>
            <li>- Chăm chỉ, trung thực, khỏe mạnh, nhanh nhẹn, hòa đồng</li>
          </ul>
        </div>

        <div className="mt-4 mb-16">
          <h1 className="font-bold text-base uppercase ">
            QUYỀN LỢI NHÂN VIÊN:
          </h1>
          <ul className="leading-8">
            <li className="font-semibold">
              - Lương cứng thử việc 4.8 triệu + Thưởng
            </li>
            <li className="font-semibold">
              - Lương chính thức: 5,4tr (đã bao gồm bảo hiểm) + Các phúc lợi +
              Các khoản thưởng KPIs
            </li>
            <li>- 1 tuần nghỉ 1 ngày báo quản lí</li>
            <li>
              - Được đóng đầy đủ 03 loại bảo hiểm BHXH, BHYT, BHTN và gói bảo
              hiểm sức khỏe Bảo Việt chế độ cao
            </li>
            <li>
              - Có cơ hội thăng tiến lên Cửa hàng Phó trong vòng 06 tháng, cửa
              hàng trưởng sau 4 tháng tiếp
            </li>
            <li>Loại hình công việc: Toàn thời gian</li>
            <li>Lương: 6.000.000₫ - 9.000.000₫ một tháng</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
