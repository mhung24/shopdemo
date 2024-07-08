import { Route, Router, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";

function App() {
  const list = [
    // {
    //   to: "/",
    //   title: <Home />,
    // },
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
      to: "cau-hoi-thuong-gap",
      title: "Câu hỏi thường gặp",
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

  return (
    <Routes>
      <Route path="" element={<Header />}>
        <Route path="/shopdemo" element={<Home />} />

        {list.map((item, index) => (
          <Route path={item.to} key={index} element={<h1>{item.title}</h1>} />
        ))}
      </Route>
    </Routes>
  );
}
export default App;
