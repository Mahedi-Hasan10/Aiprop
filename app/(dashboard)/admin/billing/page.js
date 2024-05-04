import React from "react";
import { LiaDollarSignSolid } from "react-icons/lia";
import BillingCard from "../../components/common/billingCard";
const Billings = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 xl:gap-[30px] md:gap-3 container">
      <BillingCard
        plans={
          <h2 className="text-[84px] font-medium flex items-end group-hover:text-white duration-500  leading-[55px] mt-[134px] px-[44px] ">
            <sup className="text-3xl text-[#030303]/60 duration-500 group-hover:text-[#FFFFFF]/60  font-semibold">
              <LiaDollarSignSolid size={40} />{" "}
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
          <h2 className="text-[84px] font-medium flex items-end group-hover:text-white duration-500  leading-[55px] mt-[134px] px-[44px] ">
            <sup className="text-3xl text-[#030303]/60 duration-500 group-hover:text-[#FFFFFF]/60  font-semibold">
              <LiaDollarSignSolid size={40} />{" "}
            </sup>{" "}
            149.00{" "}
            <span className="text-xl text-[#030303]/60 font-semibold duration-500 group-hover:text-[#FFFFFF]/60">
              /month
            </span>
          </h2>
        }
        title="Premium"
      />
      <BillingCard
        plans={
          <h2 className="text-[74px] font-medium flex items-end group-hover:text-white duration-500 border ms-[44px] mt-[110px]  ">
            {" "}
            Discus Price{" "}
          </h2>
        }
        title="Enterprise"
      />
    </div>
  );
};

export default Billings;
