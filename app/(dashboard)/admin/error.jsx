"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
const Error404 = () => {
  return (
    <section className="w-full px-[14px] xl:py-[200px] md:py-[100px] py-[50px]">
      <div className="flex flex-col gap-10 items-center w-full">
        <Image
          src="/404.png"
          height={1000}
          width={1000}
          alt="404"
          className="w-[923px] h-[709px]"
        />
        <p className="text-[36px] font-medium max-w-[629px] text-[#030303]/60">
          We’re sorry but it looks like the page doesn’t exist anymore.
        </p>
        <Link
          className="mt-[40px] py-[13px] px-[30px] bg-primary text-white text-[28px] font-semibold rounded-[5px]"
          href="/admin/home"
        >
          Back to Dashboard
        </Link>
      </div>
    </section>
  );
};

export default Error404;
