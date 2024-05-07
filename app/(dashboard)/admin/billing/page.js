import React from "react";
import { LiaDollarSignSolid } from "react-icons/lia";
import BillingCard from "../../components/common/billingCard";
import { Segmented } from "antd";
import SegmentedButton from "../../components/common/segment";
const Billings = () => {
  return (
    <div className="bg-white lg:p-[30px] p-[15px] rounded-[5px]">
      <div className="flex justify-between items-center mb-[32px]">
        <h3 className="lg:text-[28px] whitespace-nowrap text-[20px] font-semibold text-[#030303]">
          Plan & Billings
        </h3>
        {/* <Segmented
          defaultValue="Monthly"
          style={{
            marginBottom: 8,
          }}
          // onChange={(value) => setAlignValue(value)}
          options={["Monthly", "Annual"]}
        /> */}
        <SegmentedButton />
      </div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 xl:gap-[30px] gap-3">
        <BillingCard
          plans={
            <h2 className="2xl:text-[70px] text-[45px] font-medium flex items-end group-hover:text-white duration-500  lg:leading-[55px] mt-[134px] lg:px-[44px] px-5">
              <sup className="text-3xl text-[#030303]/60 duration-500 group-hover:text-[#FFFFFF]/60  font-semibold">
                <LiaDollarSignSolid size={60} className="!font-bold" />{" "}
              </sup>{" "}
              149.00{" "}
              <span className="text-xl text-[#030303]/60 font-semibold duration-500 group-hover:text-[#FFFFFF]/60">
                /month
              </span>
            </h2>
          }
          title="Basic"
        />
        <BillingCard
          plans={
            <h2 className="2xl:text-[70px] text-white text-[45px] font-medium flex items-end group-hover:text-white duration-500  lg:leading-[55px] mt-[134px] lg:px-[44px] px-5">
              <sup className=" text-white duration-500 group-hover:text-[#FFFFFF]/60  font-semibold">
                <LiaDollarSignSolid size={60} className="!font-bold" />{" "}
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
          plans={
            <h2 className="2xl:text-[70px] text-[45px]  font-medium flex items-end group-hover:text-white duration-500  lg:leading-[55px] mt-[134px] lg:px-[44px] px-5">
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
