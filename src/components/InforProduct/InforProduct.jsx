import React, { useEffect, useState } from "react";
import ApiService from "../Api/ApiService";
import { NavLink, useParams } from "react-router-dom";
import "./InforProduct.css";
import { CiHeart } from "react-icons/ci";
import mess from "../../assets/images/messenger-icon.png";
import zalo from "../../assets/images/zalo-icon.png";

export const InforProduct = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 5);
  });
  const { id: idProduct } = useParams();
  const [dataInforProduct, setDataInforProduct] = useState({
    id: null,
    title: "",
    description: "",
    category: "",
    images: [],
    price: "",
    rating: "",
    thumbnail: "",
    reviews: [],
    brand: "",
  });
  const loadData = async () => {
    const dataProduct = await ApiService.InforDataProduct(idProduct);
    const {
      id,
      title,
      description,
      category,
      images,
      price,
      rating,
      thumbnail,
      reviews,
      brand,
    } = dataProduct.data;
    if (dataProduct.status === 200) {
      setDataInforProduct({
        id,
        title,
        description,
        category,
        images,
        price,
        rating,
        thumbnail,
        reviews,
        brand,
      });
    }
  };

  // console.log(dataInforProduct);
  useEffect(() => {
    if (idProduct) {
      loadData();
    }
  }, []);

  const setActive = (i) => {
    setActiveBtn(i);
  };

  const [activeBtn, setActiveBtn] = useState(0);
  return (
    <div className="">
      <div className="flex mt-4 mb-4">
        <NavLink className="mr-3 intro_back" to={"/shopdemo"}>
          Trang chủ
        </NavLink>
        <span className="mr-2">/</span>
        <p> {dataInforProduct.category}</p>
        <span className="mr-2 ml-2">/</span>
        <p className="text-yellow-400">{dataInforProduct.title}</p>
      </div>

      <div className="infor-product">
        <div>
          <div className="flex">
            <div className="infor-product-img">
              <img
                src={dataInforProduct.thumbnail}
                alt=""
                className="infor-product-img-big"
              />
              <div>
                {dataInforProduct.images?.map((item, index) => (
                  <div key={index}>
                    <img
                      className="infor-product-img-small"
                      src={item}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="list_product-infor">
              <p className="font-semibold text-xl">{dataInforProduct.title}</p>

              <p className="text-sm mt-2">
                Thương hiệu:{" "}
                <span className="font-semibold text-xl">
                  {dataInforProduct.brand
                    ? dataInforProduct.brand
                    : "(Đang cập nhật)"}
                </span>
              </p>
              <div className="flex ">
                <p className="mt-2 flex items-end">
                  <span className="font-semibold_redcl mr-3 text-xl">
                    {" "}
                    $ {dataInforProduct.price}
                  </span>
                  <p className="text-sm">
                    Giá niêm yết :{" "}
                    <span className="line-through">
                      ${dataInforProduct.price + 100}
                    </span>
                  </p>
                </p>
              </div>
              <p>
                Tiết kiệm : {""}
                <span className="font-semibold_redcl">
                  ${dataInforProduct.price + 100 - dataInforProduct.price}
                </span>{" "}
                so với giá thị trường
              </p>
              {/* <p className={dataInforProduct} >Size : </p> */}
              <div className="quantity">
                <p>-</p>
                <p>1</p>
                <p>+</p>
              </div>

              <div className="add_to-cart">
                <div className="add_cart">
                  <div className="cart_btn">
                    <p>Thêm vào giỏ hàng</p>
                  </div>

                  <div className="pay_btn ">
                    <p>Mua ngay</p>
                  </div>
                </div>

                <div className="call flex mt-5">
                  <div className="call_btn  mr-3">
                    <p>
                      Gọi{" "}
                      <span className="font-semibold phone_number">
                        19001008
                      </span>{" "}
                      để được tư vấn
                    </p>
                  </div>
                  <div>
                    <p className="favourite_product">
                      <CiHeart />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className=" mt-5">
              <div className="flex">
                <p
                  className={
                    activeBtn === 0
                      ? "detail_products-active"
                      : "detail_products"
                  }
                  onClick={() => {
                    setActive(0);
                  }}
                >
                  Chi tiết
                </p>
                <p
                  className={
                    activeBtn === 1
                      ? "detail_products-active"
                      : "detail_products"
                  }
                  onClick={() => {
                    setActive(1);
                  }}
                >
                  Hướng dẫn thanh toán
                </p>
                <p
                  className={
                    activeBtn === 2
                      ? "detail_products-active"
                      : "detail_products"
                  }
                  onClick={() => {
                    setActive(2);
                  }}
                >
                  Đánh giá
                </p>
              </div>

              <div className="detail_content">
                <p className={activeBtn === 0 ? "block" : "hidden"}>
                  Thông tin chi tiết
                </p>
                <p className={activeBtn === 1 ? "block" : "hidden"}>
                  Hướng dẫn thanh toán
                </p>
                <p className={activeBtn === 2 ? "block" : "hidden"}>Đánh giá</p>
              </div>
            </div>
          </div>
        </div>

        <div className="userful_infor">
          <div>
            <h4 className="userful_infor-header">Thông tin hữu ích</h4>
            <div className="userful_infor-wrap">
              <div className="care-detail-box">
                <div className=" care-detail-item">
                  <a href="#" className="flex items-center">
                    <span>
                      <img
                        src="https://bizweb.dktcdn.net/100/429/689/themes/869367/assets/customer-support.png?1705909623213"
                        alt=""
                        height={12}
                        width={16}
                      />
                    </span>
                    <span className="ml-2 bh-item">
                      <p>Trung tâm bảo hành</p>
                    </span>
                  </a>
                </div>
                <div className=" care-detail-item">
                  <a href="#" className="flex items-center">
                    <span>
                      <img
                        src="https://bizweb.dktcdn.net/100/429/689/themes/869367/assets/delivery-truck.png?1705909623213"
                        alt=""
                        height={12}
                        width={16}
                      />
                    </span>
                    <span className="ml-2 vc-item">
                      <p>Thông tin vận chuyển</p>
                    </span>
                  </a>
                </div>
                <div className="care-detail-item">
                  <a href="#" className="flex items-center ">
                    <span>
                      <img
                        src="https://bizweb.dktcdn.net/100/429/689/themes/869367/assets/credit-card.png?1705909623213"
                        alt=""
                        height={12}
                        width={16}
                      />
                    </span>
                    <span className="ml-2 tt-item">
                      <p>Hướng dẫn thanh toán</p>
                    </span>
                  </a>
                </div>
                <h4 className="text-sm font-semibold mt-5">
                  Chat với chúng tôi
                </h4>
                <div className="support-ask-body flex mt-3">
                  <div className="support-ask-items mr-5">
                    <span className="support-ask-items-icon">
                      <a href="#">
                        <img src={mess} alt="" />
                      </a>
                    </span>
                    <span>
                      <a href="#">Mạnh Hùng</a>
                    </span>
                  </div>

                  <div className="support-ask-items">
                    <span className="support-ask-items-icon">
                      <a href="#">
                        <img src={zalo} alt="" />
                      </a>
                    </span>
                    <span>
                      <a href="#">0862822098</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
