"use client";
import Link from "next/link";
import Image from "next/image";
import { IoClose, IoLogOut, IoSettings } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { Badge, Form, Input, message, Modal } from "antd";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import Button2 from "../common/button2";
import { RxCross2 } from "react-icons/rx";
import SeeImage from "../form/seeImage";
const Sidebar = ({ menu }) => {
  const [show] = useState(true);
  const pathname = usePathname();
  const { user, error, isLoading } = useUser();
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] =useState(false)

  const router = useRouter();
  const showModal = () => {
    setOpen(!open);
  };
  const handleLogout = () => {
    router.push("/api/auth/logout");
    message.success("Logged out successfully");
    showModal();
    router.push("/api/auth/login");
  };

  // profile modal 
  const openModal =()=>{
    setOpenProfile(true)
  }
  const closeModal =()=>{
    setOpenProfile(false)
  }

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
      <aside className="sidebar !z-20 !bg-bgLine hover:text-primary  w-full h-full flex  flex-col justify- border-r-[1.5px] border-[#030303] border-opacity-10">
        <div className="title w-full h-[60px] flex  items-center  justify-between md:justify-center px-3 mt-4 md:mt-8 ">
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
          <div className="border-b-[1.5px] border-[#030303] border-opacity-10 mt-[23px] md:block hidden"></div>
          <div className="flex items-center gap-5 md:hidden cursor-pointer">
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

        <ul className="menu px-[35px] mt-[50px] flex  flex-col gap-6  ">
          {menu.map((item, index) => (
            <li key={index}>
              <div
                className={`flex items-center py-[15px] px-[25px] rounded-[10px] gap-5 text-[#030303] text-opacity-60  duration-500 ${pathname === item.href
                    ? "bg-primary !text-white !text-opacity-100"
                    : "hover:bg-primary hover:!text-white hover:!text-opacity-100 duration-500"
                  }`}
              >
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
          <li className="mt-4 pt-10 border-t-[1.5px] border-[#030303] border-opacity-10">
            <div
            onClick={openModal}
              className={`flex items-center py-[15px] px-[25px] rounded-[10px] gap-5 text-[#030303] text-opacity-60  duration-500 ${pathname === "settings"
                  ? "bg-primary !text-white !text-opacity-100"
                  : "hover:bg-primary hover:!text-white hover:!text-opacity-100 duration-500"
                }`}
            >
              <IoSettings className="text-[32px]" />
              <Link href="#" className="flex ">
                <span className="lg:text-2xl text-xl lg:font-semibold font-medium">
                  Settings
                </span>
              </Link>
            </div>
          </li>
          <li>
            <div
              className={`flex items-center py-[15px] px-[25px] rounded-[10px] gap-5 text-[#030303] text-opacity-60  duration-500 ${pathname === "settings"
                  ? "bg-primary !text-white !text-opacity-100"
                  : "hover:bg-primary hover:!text-white hover:!text-opacity-100 duration-500"
                }`}
            >
              <IoLogOut className="text-[32px]" />
              <span
                onClick={showModal}
                className="lg:text-3xl text-2xl lg:font-semibold font-medium cursor-pointer"
              >
                Logout
              </span>
              <Modal open={open} onOk={showModal}>
                <h3 className="lg:text-[36px] text-[25px] font-medium mb-[30px]">
                  Log out?
                </h3>
                <p className="lg:text-[28px] md:text-[22px] text-xl">
                  Are you sure you want to log out?
                </p>
                <div className="flex gap-[30px] mt-[60px] text-[28px] font-semibold">
                  <Button2
                    title="Yes"
                    is_filled={false}
                    onClick={handleLogout}
                  />
                  <Button2 title="No" is_filled={true} onClick={showModal} />
                </div>
              </Modal>
              ;
            </div>
          </li>
        </ul>
      </aside>
      <Modal open={openProfile} onCancel={closeModal}>
      
        <div className="flex justify-between mb-[20px] text-[26px] ">
          <h3 className=" font-medium text-[#030303]">Edit Profile</h3>
          <RxCross2 className="cursor-pointer" onClick={closeModal} />
        </div>
        <div>
          <div className="flex flex-col gap-5 mb-5 items-center">
            {/* <Image
                src="/profile.png"
                width={500}
                height={200}
                alt="profile"
                className="lg:w-[120px] lg:h-[120px] w-[70px] h-[70px] rounded-[5px]"
              /> */}
            {/* <ImageInput name="image" /> */}
            <SeeImage />
            <h3 className="lg:text-[26px] text-base font-medium">John Doe</h3>
          </div>
          <Form
            classname="profile"
            layout="vertical"
            className="w-full"
            onFinish={() => {
              message.success("Profile updated successfully");
            }}
          >
            <Form.Item label="FullName" name="name">
              <Input
                type="text"
                placeholder="Enter your name"
                defaultValue="Amir Sheikh"
                className="px-[30px] pt-[10px] pb-[12px] text-2xl   bg-white font-medium "
              />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input
                type="email"
                defaultValue="johnsmith@gmail.com"
                placeholder="Enter your email"
                className="px-[30px] pt-[10px] pb-[12px] text-2xl bg-white font-medium"
              />
            </Form.Item>

            <Form.Item label="Password" name="password1">
              <Input
                type="text"
                defaultValue="12345678"
                placeholder="Enter your pasword"
                className="px-[30px] pt-[10px] pb-[12px] text-2xl  bg-white font-medium"
              />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="password2"
              noStyle={false}
            >
              <Input.Password
                defaultValue="12345678"
                placeholder="Password"
                className="px-[30px] pt-[10px] pb-[12px] text-2xl bg-white font-medium  "
              />
            </Form.Item>
            <div className="  mt-[20px] text-[28px] font-semibold w-full ">
              <Button2
                title="Save"
                is_filled={true}
                onClick={closeModal}
                classname="!w-full  h-fit !py-2"
              />
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default Sidebar;
