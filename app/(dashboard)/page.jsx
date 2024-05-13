"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import { Spin } from "antd";
const Error404 = () => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  useEffect(() => {
    // If the user is not logged in and Auth0 data is loaded, redirect to login page
    if (!user && !isLoading) {
      router.push("/api/auth/login");
    }
    if (user) {
      router.push("/admin/home");
    }
  }, [user, isLoading, router]);

  return (
    // <section className="w-full px-[14px] xl:py-[200px] md:py-[100px] py-[50px]">
    //   <div className="flex flex-col gap-10 items-center w-full">
    //     <Image
    //       src="/404.png"
    //       height={1000}
    //       width={1000}
    //       alt="404"
    //       className="w-[923px] h-[709px]"
    //     />
    //     <p className="text-[36px] font-medium max-w-[629px] text-[#030303]/60">
    //       We’re sorry but it looks like the page doesn’t exist anymore.
    //     </p>
    //     <Link
    //       className="mt-[40px] py-[13px] px-[30px] bg-primary text-white text-[28px] font-semibold rounded-[5px]"
    //       href="/admin/home"
    //     >
    //       Back to Dashboard
    //     </Link>
    //   </div>
    // </section>
    <div className="flex items-center justify-center h-[100vh]">
      <div>
        <Spin tip="Loading" size="large">
          {/* {content} */}
        </Spin>
      </div>
    </div>
  );
};

export default Error404;
