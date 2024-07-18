import React, { useEffect, useState } from "react";
import ApiService from "../Api/ApiService";
import "./NextDataProduct.css";
import { GrFormNext } from "react-icons/gr";
import { MdNavigateBefore } from "react-icons/md";
import { GrNext } from "react-icons/gr";

export const NextDataProduct = () => {
  const [renderPage, setRenderPage] = useState({
    limit: "",
    total: "",
  });

  const number = Math.round(renderPage?.total / renderPage?.limit);
  const page = [];
  if (number !== NaN) {
    for (let i = 1; i < number; i++) {
      page.push(i);
    }
  }
  const loadData = async () => {
    const res = await ApiService.ApiProduct();
    const { limit, total } = res.data;

    setRenderPage({
      limit,
      total,
    });
  };

  console.log(page);

  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <MdNavigateBefore className="page_icon" />
      {page?.map((item, index) => (
        <p className="next_page" key={index}>
          {item}
        </p>
      ))}
      <GrNext className="page_icon" />
    </>
  );
};
