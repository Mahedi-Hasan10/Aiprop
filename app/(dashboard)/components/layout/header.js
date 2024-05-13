//
import {
  message,
  Dropdown,
  Space,
  Badge,
  Modal,
  Form,
  Input,
  Tooltip,
} from "antd";
import { FaBars, FaCross } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { IoNotifications } from "react-icons/io5";
import Button2 from "../common/button2";
import { RxCross2 } from "react-icons/rx";
import { BiSolidDownArrow } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import SeeImage from "../form/seeImage";
import { useUser } from "@auth0/nextjs-auth0/client";

const Header = ({ title }) => {
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  const pathName = usePathname().split("/");
  const pathname = usePathname();
  const adminIndex = pathname.indexOf("/admin/");
  const extractedPath = pathname.slice(adminIndex + 7);
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const { user, error, isLoading } = useUser();
  console.log("🚀 ~ Header ~ user:", user);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  const router = useRouter();
  const showModal = () => {
    setOpen(!open);
  };
  const showProfileModal = () => {
    setOpenProfile(!openProfile);
  };
  const handleLogout = () => {
    router.push("/api/auth/logout");
    message.success("Logged out successfully");
    showModal();
    router.push("/api/auth/login");
  };

  const items = [
    {
      label: "Setting",
      icon: <IoSettings className="text-[36px]" />,
      key: "1",
      tik: <TiTick className="text-[24px]" />,
      onClick: showProfileModal,
    },
    {
      label: "Logout",
      icon: <FiLogOut className="text-[36px]" />,
      tik: <TiTick className="text-[25px]" />,
      key: "1",
      onClick: showModal,
    },
  ];
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <header className=" md:h-[96px]  bg-white transition-all duration-300 z-10 border-b-[1.5px] border-[#030303] border-opacity-10">
      <div className=" border flex justify-between items-center h-full md:py-[30px] px-[30px] py-[22px] flex-row-reverse md:flex-row gap-2 ">
        <h2 className="capitalize xl:text-[44px] lg:text-2xl md:text-xl font-medium hidden md:block  ">
          {extractedPath === "home"
            ? " Welcome, John Doe!"
            : capitalizeFirstLetter(extractedPath)}
        </h2>
        <div className="flex items-center gap-5 md:hidden ">
          <Badge dot={show}>
            <IoNotifications className="text-[#030303] text-2xl" />
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
            <div className="flex items-center justify-center h-12 w-12 rounded-[5px] bg-[#F8F8F9]">
              <Badge dot={show}>
                <IoNotifications className="text-[#030303] text-2xl" />
              </Badge>
            </div>
            <Tooltip
              color="#ffff"
              title={
                <div className="flex flex-col gap-[10px]  ">
                  {items.map((item) => (
                    <div
                      onClick={item?.onClick}
                      className={`flex ${
                        item?.label == "Setting"
                          ? "border-b hover:border-[#F1EEFF]"
                          : ""
                      } items-center gap-[74px] px-2 xl:w-[232px] md:w-[200px]  group hover:bg-[#F1EEFF] duration-500 cursor-pointer py-[10px] rounded-[5px]
                   `}
                    >
                      <h2 className="flex items-center group-hover:text-[#7655FA] gap-4 duration-500 text-[#030303]/60 font-normal">
                        <span>{item?.icon}</span>
                        <span className="text-2xl">{item?.label}</span>
                      </h2>
                      <Image
                        src="/check.png"
                        height={20}
                        width={20}
                        className="h-[9px] w-[12px] hidden group-hover:flex duration-500"
                        alt="check"
                      />
                    </div>
                  ))}
                </div>
              }
            >
              <a>
                <Space>
                  <div className="flex lg:gap-5 gap-2 items-center cursor-pointer ">
                    <Image
                      src="/profile.png"
                      width={500}
                      height={200}
                      alt="profile"
                      className="lg:w-[56px] lg:h-[56px] w-[40px] h-[40px] rounded-[5px]"
                    />
                    <div className="flex gap-4 items-center">
                      <div>
                        <h1 className="lg:text-2xl text-base font-medium">
                          {user?.family_name}
                        </h1>
                        <h3 className="lg:text-base text-xs text-textGray">
                          {user?.email}
                        </h3>
                      </div>
                      <BiSolidDownArrow />
                    </div>
                  </div>
                </Space>
              </a>
            </Tooltip>
          </div>
          <div className="md:mt-8 md:hidden flex items-center gap-2 ">
            <Image
              src="/logo.png"
              width={500}
              height={200}
              alt=" logo"
              className="w-[25px] h-[28px]"
            />
            <h1 className="font-semibold text-[25px] text-black ">Property</h1>
          </div>
        </div>
      </div>

      {/* profile modal =========================== */}
      <Modal open={openProfile}>
        <div className="flex justify-between mb-[20px] text-[26px] ">
          <h3 className=" font-medium text-[#030303]">Edit Profile</h3>
          <RxCross2 className="cursor-pointer" onClick={showProfileModal} />
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
                className="px-[30px] pt-[10px] pb-[12px] text-2xl  border bg-white font-medium "
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
                onClick={showProfileModal}
                classname="!w-full border h-fit !py-2"
              />
            </div>
          </Form>
        </div>
      </Modal>

      {/* logout modal ========================= */}
      <Modal open={open} onOk={showModal}>
        <h3 className="text-[36px] font-medium mb-[30px]">Log out?</h3>
        <p className="text-[28px]">Are you sure you want to log out?</p>
        <div className="flex gap-[30px] mt-[60px] text-[28px] font-semibold">
          <Button2 title="Yes" is_filled={false} onClick={handleLogout} />
          <Button2 title="No" is_filled={true} onClick={showModal} />
        </div>
      </Modal>
    </header>
  );
};

export default Header;
