import React from "react";

const Button2 = ({ is_filled, classname, title, ...props }) => {
  return (
    <div>
      <button
        {...props}
        className={`lg:py-2 py-1 lg:px-[90px] px-[40px] rounded-md w-full lg:text-[25px] text-[18px] ${
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
