import React, { useEffect, useState } from "react";

import "./Question.css";
import { NavLink } from "react-router-dom";

export const Question = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 5);
  });
  const list = [
    {
      question: "Poco Mart có xác nhận đơn hàng với tôi không?",
      answer:
        "Với khách hàng đặt mua hàng thành công đầu tiên, để đẩy nhanh tiến độ  xử lý và giao hàng đến quý khách, các đơn hàng sẽ được xác nhận qua email.",
    },
    {
      question: "Làm thế nào để tôi đặt nhiều sản phẩm vào cùng 1 đơn hàng?",
      answer:
        "Quý khách có thể đặt các sản phẩm khác nhau trong 1 giỏ hàng thành 1 đơn hàng, các sản phẩm trong giỏ hàng sẽ được đóng thành 1 kiện hàng (nếu các sản phẩm có cùng kho xử lý/nhà bán hàng) và giao đến địa chỉ quý khách đã đăng ký.",
    },
    {
      question: "Tôi có thể thanh toán khi nhận hàng không?",
      answer:
        "Poco Mart hỗ trợ giao hàng và thanh toán tận nơi cho các đơn hàng có tổng trị giá từ 20.000.000đ trở xuống trên toàn quốc. Quý khách có thể tham khảo thêm các phương thức thanh toán khác",
    },
    {
      question: "Poco Mart bán những sản phẩm gì?",
      answer:
        "Được thành lập từ tháng 6/2019, đến nay website thương mại điện tử Poco Mart cung cấp các sản phẩm thuộc ngành hàng như sau: Điện Thoại, Thời Trang, Nội Thất, Đồ Chơi, Văn Phòng Phẩm, Làm Đẹp, Sức Khỏe, Laptop, Máy Chơi Game, Điện Gia Dụng...",
    },
    {
      question: " Làm thế nào để tôi nhận biết sản phẩm còn hay hết hàng?",
      answer:
        "Quý khách có thể nhận biết sản phẩm còn hàng hay hết hàng tại Poco Mart bằng cách truy cập vào thông tin chi tiết của sản phẩm và kiểm tra trạng thái sau: Nút mua hàng hiển thị",
    },
  ];

  const [number, setNumber] = useState(0);

  const show = (i) => {
    setNumber(i);
  };
  return (
    <div className="question">
      <div className="flex mt-4 mb-4">
        <NavLink className="mr-3 intro_back" to={"/shopdemo"}>
          Trang chủ
        </NavLink>
        /<p className="ml-3 text-yellow-400">Câu hỏi thường gặp</p>
      </div>
      <div className="border-solid border-b-2 border-red-600 pb-4">
        <h1 className="text-xl font-semibold uppercase">Câu hỏi thường gặp</h1>
      </div>

      <div className=" mt-4">
        {list.map((item, index) => (
          <div className="question-page" key={index}>
            <h1
              onClick={() => show(index + 1)}
              className={
                number !== index + 1 ? "question_text" : "question_active"
              }
            >
              {item.question}
            </h1>
            <p className={number === index + 1 ? "show" : "hidden"}>
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
