import React from "react";
import { useState, useRef, useEffect } from "react";
import QUESTIONS from "../data/questions";

function Questions(props) {
  const myRef = useRef();
  const sendPosition = () => {
    props.refCallback(myRef.current.offsetTop);
  };
  useEffect(() => {
    // console.log("ref: ", myRef.current);
    sendPosition();
  }, []);
  const questions = QUESTIONS;
  const [click, setClick] = useState();
  const handleClick = (index) => {
    setClick(index);
  };
  // console.log("click: ", click);
  return (
    <>
      <div className="w-full bg-white py-9" ref={myRef}>
        <div className="container lg-auto mx-auto pr-7 pl-7">
          <h2 className="text-4xl text-secondary text-center mb-9">
            CÁC CÂU HỎI PHỔ BIẾN
          </h2>
          <ul className="flex flex-col">
            {questions.map((question, index) => (
              <li key={index} className="flex flex-col">
                <div
                  className="flex justify-between mt-2 pb-2 cursor-pointer border-b border-solid border-gray group"
                  onClick={() => {
                    console.log(index);
                    click === index
                      ? setClick(-1)
                      : setClick(index);
                  }}
                >
                  <div className="flex items-center text-lg group">
                    <div className="w-35px lg:w-[40px] h-35px text-center leading-33px border-x border-y border-solid border-gray rounded-full">
                      {question.number}
                    </div>
                    <div
                      className={
                        click === index
                          ? "text-secondary ml-2 group-hover:text-secondary transition-all w-4/5 lg:w-full"
                          : "group-hover:text-secondary ml-2 transition-all w-4/5 lg:w-full"
                      }
                    >
                      {question.question}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className={
                      click === index ? "fa-solid fa-angle-down h-4 preserve-3d transition-all my-rotate-x-180 duration-500" : "fa-solid fa-angle-down h-4  preserve-3d transition-all duration-500"
                    }></i>
                  </div>
                </div>
                {click === index && (
                  <div className="text-lg p-2 bg-gray200">
                    {question.answer}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Questions;
