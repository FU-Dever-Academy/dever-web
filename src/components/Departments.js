import React, { useState } from "react";
import Card from "./Card";
import DEPARTMENT_LIST from "../data/departments.js";

function Departments() {
  const [isFlipped, setIsFlipped] = useState(false);
  // console.log("DEPARTMENT_LIST: ",DEPARTMENT_LIST);
  return (
    <>
      <div className="w-full bg-pink pt-9">
        <div className="container lg-auto mx-auto lg:pl-7 lg:pr-7 px-4">
          <h2 className="text-secondary text-4xl text-center mb-9">
            "NGŨ TRỤ" DEVER
          </h2>
          <div className="flex lg:flex-row flex-col">
            <div className="lg:w-1/3 w-full flex flex-col lg:items-end">
              <Card info={DEPARTMENT_LIST[0]}></Card>
              <Card info={DEPARTMENT_LIST[1]}></Card>
            </div>
            <div className="lg:w-1/3 w-full flex flex-col lg:items-center lg:justify-center">
              <Card info={DEPARTMENT_LIST[2]}></Card>
            </div>
            <div className="lg:w-1/3 w-full flex flex-col lg:items-start">
              <Card info={DEPARTMENT_LIST[3]}></Card>
              <Card info={DEPARTMENT_LIST[4]}></Card>
            </div>
          </div>
        </div>
        {/* <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          
        </ReactCardFlip> */}
      </div>
    </>
  );
}

export default Departments;
