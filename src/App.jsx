import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Introduce } from "./components/Introduce/Introduce";
import { Question } from "./components/Question/Question";
import { Recruitment } from "./components/Recruitment/Recruitment";
import { Contact } from "./components/Contact/Contact";
import { ListProduct } from "./components/Product/ListProduct/ListProduct";

function App() {
  const list = [
    // {
    //   to: "/",
    //   title: <Home />,
    // },
    // {
    //   to: "gioi-thieu",
    //   title: "Giới thiệu",
    // },
    // {
    //   to: "san-pham",
    //   title: "Sản phẩm",
    // },
    // {
    //   to: "cau-hoi-thuong-gap",
    //   title: "Câu hỏi thường gặp",
    // },
    // {
    //   to: "tuyen-dung",
    //   title: "Tuyển dụng",
    // },
    // {
    //   to: "lien-he",
    //   title: "Liên hệ",
    // },
  ];

  return (
    <Routes>
      <Route path="" element={<Header />}>
        <Route path="/shopdemo" element={<Home />} />
        <Route path="/gioi-thieu" element={<Introduce />} />
        <Route path="/cau-hoi-thuong-gap" element={<Question />} />
        <Route path="/tuyen-dung" element={<Recruitment />} />
        <Route path="/lien-he" element={<Contact />} />
        <Route path="/san-pham" element={<ListProduct />} />
        {/* {list.map((item, index) => (
          <Route path={item.to} key={index} element={<h1>{item.title}</h1>} />
        ))} */}
      </Route>
    </Routes>
  );
}
export default App;
