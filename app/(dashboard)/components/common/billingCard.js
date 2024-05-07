import React from "react";
import { LiaDollarSignSolid } from "react-icons/lia";
import { FaArrowRight } from "react-icons/fa6";

const BillingCard = ({ title, plans, is_custom, is_active }) => {
  return (
    <div
      className={`w-flt h-[802px] border shadow-md rounded-[20px] relative group overflow-hidden hover:bg-[#7655FA] duration-500 ${
        is_active ? "bg-primary" : "bg-white"
      }`}
    >
      <div className="absolute ">{plans}</div>
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
      <div className="mt-[230px] px-[30px]  border-red-500  relative w-full h-[545px] ">
        <p
          className={`${
            is_active ? "text-white" : "text-[#030303]/60"
          } group-hover:text-white text-xl duration-500`}
        >
          Entry-level plan with essential features at an affordable price.
        </p>
        <div className="mt-[30px] flex flex-col gap-[30px]">
          <div className="flex items-center gap-4">
            <div className="w-[24px] h-[24px] rounded-full bg-[#7655FA] group-hover:bg-white group-hover:text-[#7655FA] flex items-center justify-center text-white duration-500">
              <FaArrowRight className="text-xs" />
            </div>
            <span
              className={`lg:text-2xl text-xl ${
                is_active ? "text-white" : "text-[#030303]/60"
              } group-hover:text-white duration-500 `}
            >
              Up to 5 repairmen
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-[24px] h-[24px] rounded-full bg-[#7655FA] group-hover:bg-white group-hover:text-[#7655FA] flex items-center justify-center text-white duration-500">
              <FaArrowRight className="text-xs" />
            </div>
            <span
              className={`lg:text-2xl text-xl  ${
                is_active ? "text-white" : "text-[#030303]/60"
              } group-hover:text-white duration-500 `}
            >
              Up to 15 tenants
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-[24px] h-[24px] rounded-full bg-[#7655FA] group-hover:bg-white group-hover:text-[#7655FA] flex items-center justify-center text-white duration-500">
              <FaArrowRight className="text-xs" />
            </div>
            <span
              className={`lg:text-2xl text-xl  ${
                is_active ? "text-white" : "text-[#030303]/60"
              } group-hover:text-white duration-500`}
            >
              Basic customer support
            </span>
          </div>
        </div>
        {is_custom ? (
          <button className="w-[88%] text-center text-white group-hover:text-[#7655FA] duration-500 group-hover:bg-white  lg:text-[28px] text-xl font-semibold bg-[#7655FA] absolute bottom-0 lg:py-[13px] py-[7px] rounded-[5px]">
            Contact Us
          </button>
        ) : (
          <button
            className={`w-[88%] text-center ${
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
