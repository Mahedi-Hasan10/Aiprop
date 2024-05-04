"use client";
import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { Badge } from "antd";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Sidebar = ({ menu }) => {
  const [show] = useState(true);
  const router = useRouter();

  // const handleLogout = async () => {
  //   try {
  //     localStorage.clear();
  //     await swalAlert.success("Logout successful");
  //     router.push("/login");
  //   } catch (error) {
  //     await swalAlert.error("Logout failed");
  //   }
  // };
  return (
    <>
      <div
        onClick={() => {
          window.document.querySelector(".sidebar").classList.toggle("open");
          window.document
            .querySelector(".sidebar-overlay")
            .classList.toggle("open");
        }}
        className="sidebar-overlay"
      />
      <aside className="sidebar !z-20 !bg-bgLine hover:text-primary  w-full h-full flex  flex-col justify-">
        <div className="title w-full h-[60px] flex  items-center  justify-between md:justify-center px-3 mt-4 md:mt-8 ">
          <div className=" ">
            <div className=" flex items-center gap-2  ">
              <Image
                src="/logo.png"
                width={500}
                height={200}
                alt=" logo"
                className="w-[25px] h-[28px] md:w-[37px] md:h-[48px]"
              />
              <h1 className="font-semibold text-[25px] md:text-4xl text-black ">
                Property
              </h1>
            </div>
            <div className="border-b mt-[23px] md:block hidden"></div>
          </div>
          <div className="flex items-center gap-5 md:hidden">
            <Badge dot={show}>
              <IoNotifications className="text-textGray text-2xl" />
            </Badge>
            <IoClose
              onClick={() => {
                document.querySelector(".sidebar").classList.remove("open");
                document
                  .querySelector(".sidebar-overlay")
                  .classList.remove("open");
              }}
              className=" text-2xl"
            />
          </div>
        </div>

        <ul className="menu px-[35px] mt-[50px] flex  flex-col gap-[35px]  ">
          {menu.map((item, index) => (
            <li key={index}>
              <div className="flex items-center gap-5 text-[#030303] text-opacity-60 hover:text-primary duration-500">
                {item.icons}
                <Link href={item.href || "#!"} className="md:flex hidden">
                  <span className="lg:text-2xl text-xl lg:font-semibold font-medium">
                    {item.label}
                  </span>
                </Link>
                <Link
                  onClick={() => {
                    window.document
                      .querySelector(".sidebar")
                      .classList.toggle("open");
                    window.document
                      .querySelector(".sidebar-overlay")
                      .classList.toggle("open");
                  }}
                  href={item.href || "#!"}
                  className="flex md:hidden"
                >
                  <span className="text-lg">{item.label}</span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
