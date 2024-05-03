//
import { message } from "antd";
import { FaBars } from "react-icons/fa";
import { FiLock, FiLogOut, FiSettings, FiUser } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineAttachEmail } from "react-icons/md";
import { Badge } from 'antd';
import { useState } from "react";
import { IoNotifications } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

const Header = ({ title }) => {
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);

  const pathName = usePathname().split('/')
  const handleLogout = () => {
    localStorage.removeItem("token");
    message.success("Logged out successfully");
    router.push("/login");
  };



  const items = [
    {
      label: <Link href={"/admin/profile"}>Profile</Link>,
      icon: <FiUser />,
      key: "1",
      // onClick: handleProfile,
    },
    {
      label: <Link href={"/admin/change-password"}>Change Password</Link>,
      icon: <FiLock />,
      key: "2",
    },
    {
      label: <Link href={"/admin/change-email"}>Change Email</Link>,
      icon: <MdOutlineAttachEmail />,
      key: "22",
    },
    {
      label: <Link href={"/admin/settings"}>Settings</Link>,
      icon: <FiSettings />,
      key: "3",
    },
    {
      label: "Logout",
      icon: <FiLogOut />,
      key: "4",
      onClick: handleLogout,
    },
  ];

  return (
    <header className="fixed left-0 md:left-[265px] md:px-3 top-0 right-0 md:h-[96px] bg-white shadow transition-all duration-300 z-10 ">
      <div className="flex justify-between items-center h-full md:p-4 px-3 py-4 flex-row-reverse md:flex-row gap-2 ">
        <h2 className="capitalize xl:text-[44px] lg:text-2xl md:text-xl font-medium hidden md:block  ">Welcome, Amir Sheikh!</h2>
        <div className="flex items-center gap-5 md:hidden ">
          <Badge dot={show} >
            <IoNotifications className="text-textGray text-2xl" />
          </Badge>
          <FaBars
            className="text-2xl text-primary"
            role="button"
            onClick={() => {
              window.document
                .querySelector(".sidebar")
                .classList.toggle("open");
              window.document
                .querySelector(".sidebar-overlay")
                .classList.toggle("open");
            }}
          />
        </div>
        <div className="flex items-center">
          <div className="md:flex items-center lg:gap-[35px] gap-5 hidden  ">
            <Badge dot={show} >
              <IoNotifications className="text-textGray text-2xl" />
            </Badge>
            <div className="flex lg:gap-3 gap-2 items-center">
              <div>
                <h1 className="lg:text-2xl text-base font-medium">Robertos Jr.</h1>
                <h3 className="lg:text-sm text-xs text-textGray">Super Admin</h3>
              </div>
              <Image src='/profile.png' width={500} height={200} alt="profile" className="lg:w-[56px] lg:h-[56px] w-[40px] h-[40px] rounded-[5px]" />
            </div>
          </div>
          <div className="md:mt-8 md:hidden flex items-center gap-2 ">
            <Image src="/logo.png" width={500} height={200} alt=" logo" className="w-[25px] h-[28px]" />
            <h1 className="font-semibold text-[25px] text-black ">Property</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
