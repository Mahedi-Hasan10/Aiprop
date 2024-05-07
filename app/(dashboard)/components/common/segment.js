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
            : " text-gray-700"
        } lg:py-[11px] lg:px-4 px-2 py-2 rounded-[5px] focus:outline-none font-bold`}
      >
        Monthly
      </button>
      <button
        onClick={() => handleOptionChange("Annual")}
        className={`${
          selectedOption === "Annual"
            ? "bg-primary text-white"
            : " text-gray-700"
        } lg:py-[11px] lg:px-4 px-2 py-2 rounded-[5px] focus:outline-none font-bold`}
      >
        Annual
      </button>
    </div>
  );
};

export default SegmentedButton;
