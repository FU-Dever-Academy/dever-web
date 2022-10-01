import React from "react";

function Banner() {
  return (
    <>
      <div className="w-full relative lg:p-0 pb-9" id="home">
        <div className="lg:block hidden absolute w-[20.3125rem] h-[20.3125rem] bg-[#FAA75C] retangle-top bottom-0"></div>
        <div className="lg:block hidden absolute w-[20.3125rem] h-[20.3125rem] bg-F07167 rounded-tl-[100%] right-0 bottom-0 overflow-hidden z-[-1]"></div>
        <div className="container lg-auto mx-auto lg:pr-7 lg:pl-7 px-4 min-h-[40rem] flex lg:flex-row flex-col items-center justify-between">
          <img
            className="max-h-full	max-w-1/2 ml-auto mr-auto object-contain"
            src={require("../assets/images/banner.png")}
            alt=""
          />
          <div className="flex flex-col lg:items-end items-center z-10">
            <h2 className="aimante-bounce	text-4xl lg:text-6xl text-primary font-semibold lg:mb-9 mb-2 lg:text-end text-center">
              Tuyển thành viên
            </h2>
            <p className="text-lg lg:text-end text-center">
              Câu lạc bộ lập trình Dever mở đơn tuyển thành viên
            </p>
            <p className="text-lg lg:text-end text-center">
              <strong className="text-center">Đối tượng:</strong> sinh viên Đại học FPT có sở thích, đam
              mê với lập trình
            </p>
            <strong className="text-lg text-center">
              Thời gian đăng kí: 20/07/2022 - 25/07/2022
            </strong>
            <button className="text-lg lg:mt-9 mt-3 py-3 px-8 text-primary bg-white border-2 border-primary rounded-full hover:bg-primary hover:text-white hover:scale-105 transition-all">
              Đăng kí ngay
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
