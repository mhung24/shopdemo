import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Introduce } from "./components/Introduce/Introduce";
import { Question } from "./components/Question/Question";
import { Recruitment } from "./components/Recruitment/Recruitment";
import { Contact } from "./components/Contact/Contact";
import { ListProduct } from "./components/Product/ListProduct/ListProduct";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { InforProduct } from "./components/InforProduct/InforProduct";
import { Categryproduct } from "./components/CategoryProduct/Categryproduct";

function App() {
  return (
    <Routes>
      <Route path="" element={<Header />}>
        <Route path="/shopdemo" element={<Home />} />
        <Route path="/gioi-thieu" element={<Introduce />} />
        <Route path="/cau-hoi-thuong-gap" element={<Question />} />
        <Route path="/tuyen-dung" element={<Recruitment />} />
        <Route path="/lien-he" element={<Contact />} />
        <Route path="/san-pham" element={<ListProduct />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/san-pham/:id" element={<InforProduct />} />
        <Route path="/shopdemo/:id" element={<Categryproduct />} />
      </Route>
    </Routes>
  );
}
export default App;
