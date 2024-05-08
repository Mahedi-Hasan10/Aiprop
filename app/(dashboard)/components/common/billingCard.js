import React from "react";
import { LiaDollarSignSolid } from "react-icons/lia";
import { FaArrowRight } from "react-icons/fa6";

const BillingCard = ({ title, plans, is_custom, is_active }) => {
  return (
    <div
      className={`w-flt 2xl:h-[802px] md:h-[600px] h-[500px]  w-[300px] sm:w-[400px] md:w-full border shadow-md rounded-[20px] relative group overflow-hidden hover:bg-[#7655FA] duration-500 ${
        is_active ? "bg-primary" : "bg-white"
      }`}
    >
      <div className="absolute  ">{plans}</div>
      <div
        className={`${
          is_active ? "bg-white" : "bg-primary"
        } w-[264px] h-[56px]  absolute -rotate-45 top-[30px] -left-[70px] duration-500  group-hover:bg-white  flex items-center justify-center `}
      >
        <h4
          className={`text-[28px] font-semibold  duration-500 group-hover:text-[#7655FA] ${
            is_active ? "text-primary" : "text-white"
          }`}
        >
          {title}
        </h4>
      </div>
      <div className="xl:mt-[230px] mt-[210px] md:mt-[220px]  px-3 xl:px-[20px] lg:px-[20px]  border-red-500  relative w-full 2xl:h-[545px] xl:h-[350px] lg:h-[360px] md:h-[365px] h-[275px] ">
        <p
          className={`${
            is_active ? "text-white" : "text-[#030303]/60"
          } group-hover:text-white xl:text-xl text-sm md:text-base lg:text-lg duration-500`}
        >
          Entry-level plan with essential features at an affordable price.
        </p>
        <div className="mt-[30px] flex flex-col md:gap-[30px] gap-3">
          <div className="flex items-center gap-4 ">
            <div className="xl:w-[24px] xl:h-[24px] w-[20px] h-[20px] rounded-full bg-[#7655FA] group-hover:bg-white group-hover:text-[#7655FA] flex items-center justify-center text-white duration-500">
              <FaArrowRight className="md:text-xs text-[10px]" />
            </div>
            <span
              className={`2xl:text-2xl md::text-lg text-base ${
                is_active ? "text-white" : "text-[#030303]/60"
              } group-hover:text-white duration-500 `}
            >
              Up to 5 repairmen
            </span>
          </div>
          <div className="flex items-center gap-4 ">
            <div className="xl:w-[24px] xl:h-[24px] w-[20px] h-[20px] rounded-full bg-[#7655FA] group-hover:bg-white group-hover:text-[#7655FA] flex items-center justify-center text-white duration-500">
              <FaArrowRight className="md:text-xs text-[10px]" />
            </div>
            <span
              className={`2xl:text-2xl md::text-lg text-base  ${
                is_active ? "text-white" : "text-[#030303]/60"
              } group-hover:text-white duration-500 `}
            >
              Up to 5 repairmen
            </span>
          </div>
          <div className="flex items-center gap-4 ">
            <div className="xl:w-[24px] xl:h-[24px] w-[20px] h-[20px] rounded-full bg-[#7655FA] group-hover:bg-white group-hover:text-[#7655FA] flex items-center justify-center text-white duration-500">
              <FaArrowRight className="md:text-xs text-[10px]" />
            </div>
            <span
              className={`2xl:text-2xl md::text-lg text-base  ${
                is_active ? "text-white" : "text-[#030303]/60"
              } group-hover:text-white duration-500 `}
            >
              Up to 5 repairmen
            </span>
          </div>
          
        </div>
        {is_custom ? (
          <button className="lg:w-[88%] w-[92%] md:w-[95%]  text-center text-white  group-hover:text-[#7655FA] duration-500 group-hover:bg-white  lg:text-[28px] text-xl font-semibold bg-[#7655FA] absolute bottom-0 lg:py-[13px] py-[7px] rounded-[5px]">
            Contact Us
          </button>
        ) : (
          <button
            className={`lg:w-[88%] w-[92%] md:w-[95%]  text-center ${
              is_active ? "text-primary" : "text-white"
            } group-hover:text-[#7655FA] ${
              is_active ? "bg-white" : "bg-primary"
            } duration-500 group-hover:bg-white  lg:text-[28px] text-xl font-semibold  absolute bottom-0 lg:py-[13px] py-[7px] rounded-[5px]`}
          >
            Choose Plan
          </button>
        )}
      </div>
    </div>
  );
};

export default BillingCard;
