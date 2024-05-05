import React from "react";

const Button2 = ({ is_filled, classname, title, ...props }) => {
  return (
    <div>
      <button
        {...props}
        className={`py-2 px-[90px] rounded-md w-full ${
          is_filled
            ? "bg-primary text-white hover:bg-#F1EEFF"
            : "bg-[#F1EEFF] text-primary hover:text-white hover:bg-primary"
        } transition duration-300 ${classname}`}
      >
        {title}
      </button>
    </div>
  );
};

export default Button2;
