import React, { useEffect, useRef } from "react";

function Activity(props) {
  const myRef = useRef();
  const sendPosition = () => {
    props.refCallback(myRef.current.offsetTop);
  };
  useEffect(() => {
    // console.log("ref: ", myRef.current);
    sendPosition();
  }, []);
  return (
    <>
      <div className="w-full bg-pink py-9" id="activity" ref={myRef}>
        <div className="container lg-auto mx-auto lg:pl-7 lg:pr-7 px-4">
          <h2 className="text-secondary text-4xl text-center mb-9">
            HOẠT ĐỘNG DEVER
          </h2>
          <div data-aos="fade-down-right">
            <div className="lg:mt-96px mt-[90px] lg:px-60px px-[30px] relative">
              <div className="flex justify-center items-center absolute top-nev60px left-0 lg:w-120px lg:h-120px w-[60px] h-[60px] border-2 border-primary border-solid rounded-full bg-pink">
                <span className="text-primary lg:text-6xl text-2xl">+</span>
              </div>
              <div className="flex lg:flex-row flex-col lg:pl-60px lg:pb-60px pl-[30px] pb-[30px] border-l-2 border-b-2 border-primary border-dashed">
                <div className="lg:w-1/2 w-full order-1">
                  <p className="text-3xl text-secondary mb-[1.25rem] lg:mt-60px ">
                    Training C
                  </p>
                  <p className="text-lg text-normal lg:w-460px w-full text-justify mb-5 lg:mb-0">
                    Trước khi trở thành thành viên chính thức của FU-Dever, tất
                    cả thành viên đều trải qua một khóa training C bắt buộc. C
                    là một ngôn ngữ nền tảng, giúp các thành viên có một nền
                    móng thật vững chắc khi bước vào con đường lập trình.
                  </p>
                </div>
                <div className="lg:w-1/2 w-full order-2">
                  <img
                    className="w-full h-[15.625rem] object-cover"
                    src={require("../assets/images/trainingc.jpeg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-down-right">
            <div className="lg:mt-96px mt-[90px] lg:px-60px px-[30px] relative">
              <div className="flex justify-center items-center absolute top-nev60px right-0 lg:w-120px lg:h-120px w-60px h-60px border-2 border-primary border-solid rounded-full bg-pink">
                <span className="text-primary lg:text-6xl text-2xl">+</span>
              </div>
              <div className="flex lg:flex-row flex-col lg:pr-60px lg:pb-60px pr-[30px] pb-[30px] border-r-2 border-b-2 border-primary border-dashed">
                <div className="lg:w-1/2 w-full order-2">
                  <img
                    className="w-full h-[15.625rem] object-cover"
                    src={require("../assets/images/trainingweb.jpeg")}
                    alt=""
                  />
                </div>
                <div className="lg:w-1/2 w-full lg:order-3 order-1">
                  <p className="text-3xl text-secondary text-end mb-[1.25rem] lg:mt-60px">
                    Training Web
                  </p>
                  <p className="text-lg text-normal text-justify ml-auto lg:w-460px mb-5 lg:mb-0">
                    Mọi thành viên có thể chọn vào các mảng yêu thích như thuật
                    toán, ứng dụng,... Trong đó lập trình Web nhận được sự hứng
                    thú của rất nhiều thành viên. Từ khóa K17, lập trình Web
                    được đẩy mạnh và trở thành một trong những mảng chính của
                    Dever.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-down-right">
            <div className="lg:mt-96px mt-[90px] lg:px-60px px-[30px] relative">
              <div className="flex justify-center items-center absolute top-nev60px left-0 lg:w-120px lg:h-120px w-[60px] h-[60px] border-2 border-primary border-solid rounded-full bg-pink">
                <span className="text-primary lg:text-6xl text-2xl">+</span>
              </div>
              <div className="flex lg:flex-row flex-col lg:pl-60px lg:pb-60px pl-[30px] pb-[30px] border-l-2 border-b-2 border-primary border-dashed">
                <div className="lg:w-1/2 w-full order-1">
                  <p className="text-3xl text-secondary mb-[1.25rem] lg:mt-60px ">
                    Dever camping
                  </p>
                  <p className="text-lg text-normal lg:w-460px w-full text-justify mb-5 lg:mb-0">
                    Dever camping là hoạt động truyền thống hằng năm của
                    FU-Dever nhằm gắn kết các thành viên trong câu lạc bộ. Sự
                    kiện này được xem là lớn nhất và được đầu tư công phu nhất
                    từ hậu cần đến nội dung. Đây cũng chính là sự khác biệt của
                    Dever với các cậu lạc bộ lập trình khác.
                  </p>
                </div>
                <div className="lg:w-1/2 w-full order-2">
                  <img
                    className="w-full h-[15.625rem] object-cover"
                    src={require("../assets/images/camping.jpeg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-down-right">
            <div className="lg:mt-96px mt-[90px] lg:px-60px px-[30px] relative">
              <div className="flex justify-center items-center absolute top-nev60px right-0 lg:w-120px lg:h-120px w-60px h-60px border-2 border-primary border-solid rounded-full bg-pink">
                <span className="text-primary lg:text-6xl text-2xl">+</span>
              </div>
              <div className="flex lg:flex-row flex-col lg:pr-60px lg:pb-60px pr-[30px] pb-[30px] border-r-2 border-b-2 border-primary border-dashed">
                <div className="lg:w-1/2 w-full order-2">
                  <img
                    className="w-full h-[15.625rem] object-cover"
                    src={require("../assets/images/companytour.jpg")}
                    alt=""
                  />
                </div>
                <div className="lg:w-1/2 w-full lg:order-3 order-1">
                  <p className="text-3xl text-secondary text-end mb-[1.25rem] lg:mt-60px">
                    Company tour
                  </p>
                  <p className="text-lg text-normal text-justify ml-auto lg:w-460px mb-5 lg:mb-0">
                    Ngoài các hoạt động ở nội bộ trường, FU-Dever liên kết với
                    các công ty ở địa bàn thành phố Đà Nẵng nhằm đem đến cho các
                    thành viên những trải nghiệm thực tế nhất về thị trường
                    ngành IT. Đây là cơ hội lớn để các bạn được tham
                    quan các môi trường làm việc chuyên nghiệp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Activity;
