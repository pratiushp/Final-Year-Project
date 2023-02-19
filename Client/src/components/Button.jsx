import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-indigo-600 text-white h-9 font-bold font-[Poppins]py-2 px-6 rounded md:ml-8 hover:bg-indigo-800 duration-500'
  "
    >
      {props.children}
    </button>
  );
};

export default Button;
