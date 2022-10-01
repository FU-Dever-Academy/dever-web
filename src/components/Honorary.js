import React, { useState } from "react";
import Card from "./Card";
import Slider from "react-slick";
import Member from "./Member";
import HONORARY_MEMBER_LIST from "../data/honoraryMember";

function Honorary() {
  const screenWidth = window.innerWidth;
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: (screenWidth > 1024) ? 3 : (screenWidth > 1024) ? 2 : 1,
    // slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="w-full bg-green pt-9 pb-14">
        <div className="container lg-auto mx-auto pr-9 pl-9">
          <h2 className="text-4xl text-secondary text-center mb-9">
            THÀNH VIÊN NỔI BẬT
          </h2>
          <p className="text-lg text-normal text-center mb-5 max-w-[65rem] mr-auto ml-auto">
            Trong lịch sử 5 năm hình thành và phát triển, các thành viên đã cống
            hiến hết mình, để lại những dấu ấn khó phai cho các thế hệ đi sau.
            Có thể nói, các anh chị là người định hướng và duy trì con đường
            phát triển của Câu Lạc Bộ cho tới tận bây giờ. Vậy những người mang
            tầm ảnh hưởng đó là ai? Hãy cùng tìm hiểu một số thông tin cơ bản
            cùng chúng mình nhé!
          </p>
          <Slider {...settings} className="">
            {
              HONORARY_MEMBER_LIST.map((member, index) => (
                <Member key={index} data={member}></Member>
              ))
            }
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Honorary;
