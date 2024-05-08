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
            <h2 className="2xl:text-[70px] xl:text-[40px] text-[45px] whitespace-nowrap font-medium flex items-end group-hover:text-white duration-500  xl:leading-[55px] leading-10 mt-[134px] lg:px-7 px-[20px] md:px-[50px] xl:px-5 2xl:px-[50px]">
              <sup className="text-3xl text-[#030303]/60 duration-500 group-hover:text-[#FFFFFF]/60  font-semibold">
                <LiaDollarSignSolid  className="!font-bold text-[40px] 2xl:text-[60px] mt-3 md:mt-0" />{" "}
              </sup>{" "}
              149.00{" "}
              <span className="text-xl  text-[#030303]/60 font-semibold duration-500 group-hover:text-[#FFFFFF]/60">
                /month
              </span>
            </h2>
          }
          title="Basic"
        />
        <BillingCard
        services=" Up to 15 tenants"
          plans={
            <h2 className="2xl:text-[70px] xl:text-[40px] text-[45px] whitespace-nowrap text-white font-medium flex items-end group-hover:text-white duration-500  xl:leading-[55px] leading-10 mt-[134px] lg:px-7 px-[20px] md:px-[50px] xl:px-5 2xl:px-[50px] ">
              <sup className=" text-white duration-500 group-hover:text-[#FFFFFF]/60  font-semibold">
                <LiaDollarSignSolid  className="!font-bold text-[40px] 2xl:text-[60px] mt-3 md:mt-0 " />{" "}
              </sup>{" "}
              149.00{" "}
              <span className="text-xl text-white font-semibold duration-500 group-hover:text-[#FFFFFF]/60">
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
            <h2 className="2xl:text-[50px] xl:text-[40px] text-[40px] whitespace-nowrap  font-medium flex items-end group-hover:text-white duration-500  xl:leading-[55px] leading-10 mt-[134px] lg:px-7 px-[20px] md:px-[50px] xl:px-5 2xl:px-[50px]">
              {" "}
              Custom Price{" "}
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
