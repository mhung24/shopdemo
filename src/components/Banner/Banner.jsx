import React, { useEffect, useState } from "react";
import "./Banner.css";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import banner_1 from "./../../assets/images/banner_1.png";
import banner_2 from "./../../assets/images/samsung.jpg";
import banner_3 from "./../../assets/images/iphone.jpg";
export const Banner = () => {
  const [numberBanner, setNumberBanner] = useState(0);

  const banner = [banner_1, banner_2, banner_3];

  const nextBanner = () => {
    if (numberBanner > banner.length - 2) {
      setNumberBanner(0);
    } else {
      setNumberBanner(numberBanner + 1);
    }
  };

  const beforeBanner = () => {
    if (numberBanner === 0) {
      setNumberBanner(banner.length - 1);
    } else {
      setNumberBanner(numberBanner - 1);
    }
  };

  return (
    <div className="banner">
      <div className="banner_icon-forward">
        <img src={banner[numberBanner]} alt="" className="banner_img" />

        <div onClick={beforeBanner} className="banner_icon icon_before">
          <MdNavigateBefore />
        </div>
        <div onClick={nextBanner} className="banner_icon icon_next">
          <MdNavigateNext />
        </div>
      </div>
    </div>
  );
};
