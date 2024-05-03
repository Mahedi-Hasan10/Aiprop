import React from 'react';
import { LiaDollarSignSolid } from "react-icons/lia";
import { FaArrowRight } from "react-icons/fa6";


const BillingCard = ({title,plans}) => {
    return (
        <div className='w-fll h-[802px] border shadow-md rounded-[20px] relative group overflow-hidden hover:bg-[#7655FA] duration-500 '>
            <div className='absolute '>
                {plans}
            </div>
            <div className='w-[264px] h-[56px]  absolute -rotate-45 top-[30px] -left-[70px] duration-500 bg-[#7655FA] group-hover:bg-white  flex items-center justify-center '>
                <h4 className='text-[28px] font-semibold text-white duration-500 group-hover:text-[#7655FA]'>{title}</h4>
            </div>
            <div className='mt-[230px] px-[30px]  border-red-500  relative w-full h-[545px] '>
                <p className='text-[#030303]/60 group-hover:text-white text-xl duration-500'>Entry-level plan with essential features at an affordable price.</p>
                <div className='mt-[30px] flex flex-col gap-[30px]'>
                    <div className='flex items-center gap-4'>
                        <div className='w-[24px] h-[24px] rounded-full bg-[#7655FA] group-hover:bg-white group-hover:text-[#7655FA] flex items-center justify-center text-white duration-500'>
                            <FaArrowRight className='text-xs' />
                        </div>
                        <span className='text-2xl text-[#030303]/60 group-hover:text-white duration-500 '>Up to 5 repairmen</span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='w-[24px] h-[24px] rounded-full bg-[#7655FA] group-hover:bg-white group-hover:text-[#7655FA] flex items-center justify-center text-white duration-500'>
                            <FaArrowRight className='text-xs' />
                        </div>
                        <span className='text-2xl text-[#030303]/60 group-hover:text-white duration-500 '>Up to 15 tenants</span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='w-[24px] h-[24px] rounded-full bg-[#7655FA] group-hover:bg-white group-hover:text-[#7655FA] flex items-center justify-center text-white duration-500'>
                            <FaArrowRight className='text-xs' />
                        </div>
                        <span className='text-2xl text-[#030303]/60 group-hover:text-white duration-500 '>Basic customer support</span>
                    </div>
                </div>
                <button className='w-[88%] text-center text-white group-hover:text-[#7655FA] duration-500 group-hover:bg-white  text-[28px] font-semibold bg-[#7655FA] absolute bottom-0 py-[13px] rounded-[5px]'>Choose Plan</button>
            </div>
        </div>
    );
};

export default BillingCard;