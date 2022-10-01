import Aos from "aos";
import React, { useState } from "react";

function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  Aos.init();
  return (
    <>
      <div data-aos="fade-down">
        <div
          className={
            isFlipped
              ? "lg:w-60 w-full lg:h-[21rem] h-[13.2rem] mb-10 relative preserve-3d transition-all my-rotate-y-180"
              : "lg:w-60 w-full lg:h-[21rem] h-[13.2rem] mb-10 relative preserve-3d transition-all"
          }
        >
          <div className="w-full h-full bg-white drop-shadow-md rounded-xl flex flex-col justify-between transition-all z-[5] absolute backface-hidden">
            <div
              className="w-full relative group cursor-pointer"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <img
                className="lg:h-cardImgH h-[10.4rem] lg:w-cardImgW w-full object-cover rounded-t-xl z-0"
                src={require("../assets/images/" + props.info.img + ".jpeg")}
                alt=""
              />
            </div>
            <p className="text-lg text-primary text-center h-full leading-[2.75rem]">
              Ban {props.info.name}
            </p>
          </div>
          <div
            className="w-full h-full bg-white drop-shadow-md rounded-xl p-5 flex flex-col justify-between mb-10 cursor-pointer transition-all absolute backface-hidden my-rotate-y-180"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <p className="text-lg text-primary text-start leading-[1.4]">{props.info.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
