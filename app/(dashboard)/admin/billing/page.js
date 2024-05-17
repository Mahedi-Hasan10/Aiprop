import React from "react";
import { LiaDollarSignSolid } from "react-icons/lia";
import BillingCard from "../../components/common/billingCard";
import SegmentedButton from "../../components/common/segment";
const Billings = () => {
  return (
    <div className="bg-white xl:p-[30px] p-[15px] rounded-[5px]">
      <div className="flex justify-between items-center mb-[32px]">
        <h3 className="lg:text-[28px] whitespace-nowrap text-[20px] font-semibold text-[#030303]">
          Plan & Billings
        </h3>
        <SegmentedButton />
      </div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 xl:gap-[30px] gap-3 justify-center">
        <BillingCard
          services=" Up to 5 repairmen"
          plans={
            <h2 className="2xl:text-[70px]  relative mt-[150px] 2xl:w-[362px] lg:w-[300px] w-[280px] xl:text-[40px] text-[45px] flex items-center  font-semibold group-hover:text-white">
              <LiaDollarSignSolid className="!font-bold text-[40px] 2xl:text-[60px] group-hover:text-[#c8bbfd]  text-[#686868] relative 2xl:-right-4  2xl:-top-[15px] -right-2 -top-[10px] " />{" "}
              <span className=""> 149.00</span>
              <span className="text-textGray text-2xl absolute 2xl:right-0 lg:right-[11%] 2xl:top-12 lg:top-6 group-hover:text-[#c8bbfd] right-[6%] top-6 xl:right-[16%] xl:top-5">
                /month
              </span>
            </h2>
          }
          title="Basic"
        />
        <BillingCard
          services=" Up to 15 tenants"
          plans={
            <h2 className="2xl:text-[70px] relative mt-[150px] 2xl:w-[362px] lg:w-[300px] w-[280px] xl:text-[40px] text-[45px] flex items-center  font-semibold group-hover:text-white text-white">
              <LiaDollarSignSolid className="!font-bold text-[40px] 2xl:text-[60px] group-hover:text-[#c8bbfd]   text-[#c8bbfd] relative 2xl:-right-4  2xl:-top-[15px] -right-2 -top-[10px]" />{" "}
              <span className=""> 149.00</span>
              <span className="  text-2xl absolute 2xl:right-0 lg:right-[11%] 2xl:top-12 lg:top-6 group-hover:text-[#c8bbfd] text-[#c8bbfd] right-[6%] top-6 xl:right-[16%] xl:top-5">
                /month
              </span>
            </h2>
          }
          title="Premium"
          is_active={true}
        />
        <BillingCard
          services=" Basic customer support"
          plans={
            <h2 className="2xl:text-[60px] text-center whitespace-nowrap mt-[150px] 2xl:w-[390px] xl:text-[40px] text-[45px] flex items-center  font-semibold group-hover:text-white ">
              Business Plan
            </h2>
          }
          title="Enterprise"
          is_custom={true}
        />
      </div>
    </div>
  );
};

export default Billings;
