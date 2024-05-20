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
  notification,
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
import { CgProfile } from "react-icons/cg";
import { FiClock } from "react-icons/fi";
import { TbArrowNarrowRight } from "react-icons/tb";

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
  const [Notification, setNotification] = useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  const router = useRouter();
  const showModal = () => {
    setOpen(!open);
  };
  const showProfileModal = () => {
    setOpenProfile(!openProfile);
  };
  const handleLogout = async () => {
    try {
      await router.push("/api/auth/logout");

      message.success("Logged out successfully");

      showModal();

      await router.push("/api/auth/login");
    } catch (error) {
      console.error("Logout failed:", error);
      message.error("Failed to log out. Please try again.");
    }
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

  const openHandle = () => {
    setNotification(!Notification); // Toggle the state
  };

  return (
    <header className=" md:h-[96px]  bg-white transition-all duration-300 z-10 -b-[1.5px] -[#030303] -opacity-10">
      <div className="  flex justify-between items-center h-full md:py-[30px] px-[30px] py-[22px] flex-row-reverse md:flex-row gap-2 ">
        <h2 className="capitalize xl:text-[44px] lg:text-2xl md:text-xl font-medium hidden md:block  ">
          {extractedPath === "home"
            ? " Welcome, John Doe!"
            : capitalizeFirstLetter(extractedPath)}
        </h2>
        <div className="flex items-center gap-5 md:hidden ">
          <Badge dot={show}>
            <Tooltip
              trigger={"click"}
              color="#ffff"
              overlayClassName="w-[100%]  relative"
              placement="bottomRight"
              title={
                <div className="w-full relative pb-4 px-3">
                  <header className="h-[40px]  flex justify-between items-center">
                    <h1 className="text-base font-semibold text-black">
                      Notifications
                    </h1>
                    <p className="text-sm hover:font-semibold hover:underline text-blue-500 duration-500 cursor-pointer">
                      View All
                    </p>
                  </header>
                  <main className="mt-3 flex flex-col gap-3">
                    <div className="flex gap-3 text-black">
                      <div>
                        <div className="w-[30px] h-[30px] rounded-full cursor-pointer flex items-center justify-center overflow-hidden ">
                          <Image
                            src="/default.png"
                            width={500}
                            height={200}
                            alt="profile"
                            className="w-[30px] h-[30px] rounded-full"
                          />
                        </div>
                      </div>
                      <div className="">
                        <h1 className="text-base font-medium line-clamp-1  ">
                          Your order is placed
                        </h1>
                        <p className="text-xs  line-clamp-2 text-black/70 ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nobis ullam natus consequatur velit rem impedit?
                        </p>
                        <p className="mt-2 flex gap-1 items-center text-black/70 ">
                          <FiClock size={15} />
                          <span>3 min ago</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 text-black">
                      <div>
                        <div className="w-[30px] h-[30px] rounded-full cursor-pointer  flex items-center justify-center overflow-hidden ">
                          <Image
                            src="/default.png"
                            width={500}
                            height={200}
                            alt="profile"
                            className="w-[30px] h-[30px] rounded-full"
                          />
                        </div>
                      </div>
                      <div className="">
                        <h1 className="text-base font-medium line-clamp-1  ">
                          Your order is placed
                        </h1>
                        <p className="text-xs  line-clamp-2 text-black/70 ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nobis ullam natus consequatur velit rem impedit?
                        </p>
                        <p className="mt-2 flex gap-1 items-center text-black/70 ">
                          <FiClock size={15} />
                          <span>3 min ago</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 text-black">
                      <div>
                        <div className="w-[30px] h-[30px] cursor-pointer rounded-full  flex items-center justify-center overflow-hidden ">
                          <Image
                            src="/default.png"
                            width={500}
                            height={200}
                            alt="profile"
                            className="w-[30px] h-[30px] rounded-full"
                          />
                        </div>
                      </div>
                      <div className="">
                        <h1 className="text-base font-medium line-clamp-1  ">
                          Your order is placed
                        </h1>
                        <p className="text-xs  line-clamp-2 text-black/70 ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nobis ullam natus consequatur velit rem impedit?
                        </p>
                        <p className="mt-2 flex gap-1 items-center text-black/70 ">
                          <FiClock size={15} />
                          <span>3 min ago</span>
                        </p>
                      </div>
                    </div>
                  </main>
                  <footer className="w-full flex justify-center items-center mt-4 group gap-2 cursor-pointer">
                    <div className="flex w-[20px] h-[20px] group-hover:bg-blue-700 group-hover:text-white items-center justify-center  border rounded-full text-black">
                      <TbArrowNarrowRight size={10} />
                    </div>
                    <p className=" text-black group-hover:text-blue-500 group-hover:font-medium text-sm group-hover:underline duration-500">
                      View More...
                    </p>
                  </footer>
                </div>
              }
            >
              <IoNotifications className="text-[#030303] text-2xl" />
            </Tooltip>
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
            <div className="flex items-center justify-center h-12 w-12 rounded-[5px] bg-[#F8F8F9] relative">
              <Badge dot={show} onClick={openHandle} className="cursor-pointer">
                <IoNotifications className="text-[#030303] text-2xl" />
              </Badge>
              {Notification && (
                <div className="md:w-[400px] w-[250px] rounded-[10px]  pb-4 md:px-8 px-3 py-5 absolute top-[80px]   bg-white shadows">
                  <header className="h-[40px]  flex justify-between items-center">
                    <h1 className="text-base font-semibold text-black">
                      Notifications
                    </h1>
                    <p className="text-sm hover:font-semibold hover:underline text-blue-500 duration-500 cursor-pointer">
                      View All
                    </p>
                  </header>
                  <main className="mt-3 flex flex-col gap-3">
                    <div className="flex gap-3 text-black">
                      <div>
                        <div className="w-[30px] h-[30px] rounded-full cursor-pointer flex items-center justify-center overflow-hidden ">
                          <Image
                            src="/default.png"
                            width={500}
                            height={200}
                            alt="profile"
                            className="w-[30px] h-[30px] rounded-full"
                          />
                        </div>
                      </div>
                      <div className="">
                        <h1 className="text-base font-medium line-clamp-1  ">
                          Your order is placed
                        </h1>
                        <p className="text-xs  line-clamp-2 text-black/70 ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nobis ullam natus consequatur velit rem impedit?
                        </p>
                        <p className="mt-2 flex gap-1 items-center text-black/70 ">
                          <FiClock size={15} />
                          <span>3 min ago</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 text-black">
                      <div>
                        <div className="w-[30px] h-[30px] rounded-full cursor-pointer  flex items-center justify-center overflow-hidden ">
                          <Image
                            src="/default.png"
                            width={500}
                            height={200}
                            alt="profile"
                            className="w-[30px] h-[30px] rounded-full"
                          />
                        </div>
                      </div>
                      <div className="">
                        <h1 className="text-base font-medium line-clamp-1  ">
                          Your order is placed
                        </h1>
                        <p className="text-xs  line-clamp-2 text-black/70 ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nobis ullam natus consequatur velit rem impedit?
                        </p>
                        <p className="mt-2 flex gap-1 items-center text-black/70 ">
                          <FiClock size={15} />
                          <span>3 min ago</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 text-black">
                      <div>
                        <div className="w-[30px] h-[30px] cursor-pointer rounded-full  flex items-center justify-center overflow-hidden ">
                          <Image
                            src="/default.png"
                            width={500}
                            height={200}
                            alt="profile"
                            className="w-[30px] h-[30px] rounded-full"
                          />
                        </div>
                      </div>
                      <div className="">
                        <h1 className="text-base font-medium line-clamp-1  ">
                          Your order is placed
                        </h1>
                        <p className="text-xs  line-clamp-2 text-black/70 ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nobis ullam natus consequatur velit rem impedit?
                        </p>
                        <p className="mt-2 flex gap-1 items-center text-black/70 ">
                          <FiClock size={15} />
                          <span>3 min ago</span>
                        </p>
                      </div>
                    </div>
                  </main>
                  <footer className="w-full flex justify-center items-center mt-8 group gap-2 cursor-pointer">
                    <div className="flex w-[20px] h-[20px] group-hover:bg-blue-700 group-hover:text-white items-center justify-center  border rounded-full text-black">
                      <TbArrowNarrowRight size={10} />
                    </div>
                    <p className=" text-black group-hover:text-blue-500 group-hover:font-medium text-sm group-hover:underline duration-500">
                      View More...
                    </p>
                  </footer>
                </div>
              )}
            </div>
            <Tooltip
              color="#ffff"
              title={
                <div className="flex flex-col gap-[10px]  ">
                  {items.map((item) => (
                    <div
                      onClick={item?.onClick}
                      className={`flex ${
                        item?.label == "Setting" ? "-b hover:-[#F1EEFF]" : ""
                      } items-center lg:gap-[74px] gap-[40px] px-2 xl:w-[232px] md:w-[200px]  group hover:bg-[#F1EEFF] duration-500 cursor-pointer py-[10px] rounded-[5px]
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
                          {user?.username}
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
                onClick={showProfileModal}
                classname="!w-full  h-fit !py-2"
              />
            </div>
          </Form>
        </div>
      </Modal>

      {/* logout modal ========================= */}
      <Modal open={open} onOk={showModal}>
        <h3 className="lg:text-[36px] text-[25px] font-medium mb-[30px]">
          Log out?
        </h3>
        <p className="lg:text-[28px] md:text-[22px] text-xl">
          Are you sure you want to log out?
        </p>
        <div className="flex gap-[30px] mt-[60px] text-[28px] font-semibold">
          <Button2 title="Yes" is_filled={false} onClick={handleLogout} />
          <Button2 title="No" is_filled={true} onClick={showModal} />
        </div>
      </Modal>
    </header>
  );
};

export default Header;
