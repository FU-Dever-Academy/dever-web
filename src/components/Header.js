import React, { useState, useEffect, useRef } from "react";
import OnTopBtn from "./OnTopBtn";

function Header(props) {
  const [selected, setSelected] = useState(1);
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    setIsShowMobileMenu(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className="w-full top-0 bg-white z-100 transition-all duration-500">
        <div className="container lg-auto mx-auto lg:pr-7 lg:pl-7 px-4">
          <div className="flex justify-between items-center lg:h-20 h-16 w-full">
            <a href="#">
              <img src={require("../assets/images/Logo.png")} alt="" />
            </a>
            <div
              className="sm:hidden flex cursor-pointer"
              onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
            >
              <div
                className={
                  isShowMobileMenu
                    ? "flex-col flex gap-2"
                    : "flex-col flex gap-2 "
                }
              >
                <div
                  className={
                    isShowMobileMenu && scrollPosition === 0
                      ? "w-[1.75rem] h-1 bg-black rotate-45 translate-y-[12px] transition-all duration-500"
                      : "w-[1.75rem] h-1 bg-black transition-all duration-500"
                  }
                ></div>
                <div
                  className={
                    isShowMobileMenu && scrollPosition === 0
                      ? "w-[1.75rem] h-1 translate-x-[100%] transition-all duration-500 opacity-0"
                      : "w-[1.75rem] h-1 bg-black transition-all duration-500 opacity-100"
                  }
                ></div>
                <div
                  className={
                    isShowMobileMenu && scrollPosition === 0
                      ? "w-[1.75rem] h-1 bg-black rotate-[135deg] translate-y-[-12px] transition-all duration-500"
                      : "w-[1.75rem] h-1 bg-black transition-all duration-500"
                  }
                ></div>
              </div>
            </div>
            <nav
              className={
                isShowMobileMenu && scrollPosition === 0
                  ? "fixed top-0 right-0 left-0 z-50 translate-x-0 transition-all duration-500 translate-y-16"
                  : "fixed top-0 right-0 left-0 z-50 translate-x-[100%] transition-all duration-500 translate-y-16"
              }
            >
              <div className="bg-white pb-2 rounded-bl-xl rounded-br-xl drop-shadow-[8px_60px_28px_rgba(0,0,0,0.12)]">
                <a
                  href="#"
                  onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                >
                  <div className="text-2xl text-center py-2">Trang chủ</div>
                </a>
                <a
                  href="#introduction"
                  onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                >
                  <div className="text-2xl text-center py-2">Giới thiệu</div>
                </a>
                <a
                  href="#activity"
                  onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                >
                  <div className="text-2xl text-center py-2">Hoạt đông</div>
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                >
                  <div className="text-2xl text-center py-2">Liên Hệ</div>
                </a>
              </div>
            </nav>
            <nav className="hidden lg:flex justify-between items-center lg:w-6/12 w-8/12">
              <a
                href="#"
                // onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
              >
                <div className="text-2xl font-medium relative hover:text-primary after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-left	 after:transition-all duration-500 hover:after:scale-x-100">
                  Trang chủ
                </div>
              </a>
              <a
                href="#introduction"
                // onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
              >
                <div className="text-2xl font-medium relative hover:text-primary after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-left	 after:transition-all duration-500 hover:after:scale-x-100">
                  Giới thiệu
                </div>
              </a>
              <a
                href="#activity"
                // onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
              >
                <div className="text-2xl font-medium relative hover:text-primary after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-left	 after:transition-all duration-500 hover:after:scale-x-100">
                  Hoạt động
                </div>
              </a>
              <a
                href="#contact"
                // onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
              >
                <div className="text-2xl font-medium relative hover:text-primary after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-left	 after:transition-all duration-500 hover:after:scale-x-100">
                  Liên hệ
                </div>
              </a>
            </nav>
          </div>
        </div>
        {
          // scrollPosition > 0 && <OnTopBtn></OnTopBtn>
        }
      </header>
    </>
  );
}

export default Header;
