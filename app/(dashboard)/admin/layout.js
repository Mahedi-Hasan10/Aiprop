"use client";
import Sidebar from "../components/layout/sidebar";
import Header from "../components/layout/header";
import { MdDashboard } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoHome, IoLogOut, IoSettings } from "react-icons/io5";
import Footer from "../components/layout/footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 font-roboto">
      <>
        {/* <UserContextProvider> */}
        <Sidebar title="Aiprop" menu={menu} />
        <Header title="Aiprop" />
        <div className="content ">
          <div className="md:ms-[44px] md:mt-[15px] md:mb-[15px] xl:p-[30px] p-[10px]">
            {children}
          </div>
        </div>
        {/* <Footer /> */}
        {/* </UserContextProvider> */}
      </>
    </div>
  );
};

export default Layout;
const menu = [
  {
    label: "Dashboard",
    href: "/admin/home",
    icons: <MdDashboard className="text-[32px]" />,
  },
  {
    label: "Tenants",
    href: "/admin/tenants",
    icons: <IoHome className="text-[32px]" />,
  },

  {
    label: "Repairman",
    href: "/admin/repairman",
    icons: <GiAutoRepair className="text-[32px]" />,
  },
  {
    label: "Billing",
    href: "/admin/billing",
    icons: <FaMoneyCheckDollar className="text-[32px]" />,
  },
];
