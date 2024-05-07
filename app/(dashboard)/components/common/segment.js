"use client";
import React, { useState } from "react";

const SegmentedButton = () => {
  const [selectedOption, setSelectedOption] = useState("Monthly");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex justify-center p-[10px] gap-2 bg-[#F1EEFF] rounded-[10px]">
      <button
        onClick={() => handleOptionChange("Monthly")}
        className={`${
          selectedOption === "Monthly"
            ? "bg-primary text-white"
            : " text-[#030303]/60"
        } lg:py-[7px] lg:px-4 px-2 py-2 rounded-[5px] focus:outline-none lg:text-xl text-base font-semibold`}
      >
        Monthly
      </button>
      <button
        onClick={() => handleOptionChange("Annual")}
        className={`${
          selectedOption === "Annual"
            ? "bg-primary text-white"
            : " text-[#030303]/60"
        } lg:py-[7px] lg:px-4 px-2 py-2 rounded-[5px] focus:outline-none lg:text-xl text-base font-semibold`}
      >
        Annual
      </button>
    </div>
  );
};

export default SegmentedButton;
