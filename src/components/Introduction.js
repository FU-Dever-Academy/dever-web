import Aos from "aos";
import React, { useEffect, useRef } from "react";

function Introduction(props) {
  const myRef = useRef();
  const sendPosition = () => {
    props.refCallback(myRef.current.offsetTop);
  };
  useEffect(() => {
    // console.log("ref: ", myRef.current);
    sendPosition();
  }, []);
  Aos.init();
  return (
    <>
      <div
        className="relative w-full bg-green pb-9 z-[-1]"
        id="introduction"
        ref={myRef}
        // data-aos="fade-right"
      >
        <div className="lg:block hidden absolute w-[20.3125rem] h-[20.3125rem] bg-[#FAA75C] retangle-bottom top-0"></div>
        <div className="lg:block hidden absolute w-[20.3125rem] h-[20.3125rem] bg-F07167 rounded-bl-[100%] right-0 top-0 overflow-hidden"></div>
        <div className="container lg-auto mx-auto lg:pr-7 lg:pl-7 px-2">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl text-secondary mt-9 lg:mb-6 mb-2">
              GIỚI THIỆU
            </h2>
            <p className="text-3xl text-primary lg:mb-9 mb-2 text-center">
              Câu lạc bộ lập trình Dever
            </p>
            <div className="lg:w-3/4 w-full flex lg:flex-row flex-col">
              <div className="lg:w-1/2 w-full lg:pr-10">
                <img
                  className="w-full"
                  src={require("../assets/images/introduction.png")}
                  alt=""
                  // data-aos="fade-right"
                />
              </div>
              <div className="lg:w-1/2 w-full lg:pl-10 lg:mt-0 mt-2 flex flex-col justify-center lg:text-justify text-center lg:px-0 px-5">
                <p className="text-lg z-10">
                  <strong>Câu lạc bộ Lập Trình Developer,</strong> tên viết tắt
                  là Dever được thành lập ngày 9/10/2011. Với phương châm hoạt
                  động "Chia sẻ để cùng nhau phát triển", câu lạc bộ là nơi giao
                  lưu, đào tạo các môn lập trình và các môn học trong trường,
                  tạo điều kiện để sinh viên trong Học viện có môi trường học
                  tập năng động sáng tạo
                </p>
                <p className="text-lg lg:mt-9 mt-2">
                  <strong>Slogan:</strong> Dever - Work hard, play hard{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
