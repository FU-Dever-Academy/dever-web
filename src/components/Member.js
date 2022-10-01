import React from "react";

function Member(props) {
  const member = props.data;
  return (
    <>
      <div className="flex justify-center ">
        <div className="flex flex-col items-center">
          <span className="text-secondary text-2xl mb-5">K{member.k}</span>
          <div className="drop-shadow-xl">
            <a
              href="https://github.com/"
              target="_blank"
              className="outline-none"
            >
              <img
                className="w-64 h-64 rounded-full border-white border-8 border-solid hover:scale-105 transition-all object-cover"
                src={require("../assets/images/"+ member.img +".jpeg")}
                alt=""
              />
            </a>
          </div>
          <p className="text-secondary text-2xl mt-4">{member.name}</p>
          <p className="text-primary text-lg mt-2">{member.pos}</p>
          <p className="text-primary text-lg mt-2 mb-4">Khóa {member.year}</p>
        </div>
      </div>
    </>
  );
}

export default Member;
