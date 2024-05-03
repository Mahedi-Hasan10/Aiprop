"use client";
import Sidebar from "../components/layout/sidebar";
import Header from "../components/layout/header";
import { MdDashboard, MdFolderSpecial } from "react-icons/md";
import { SiCodechef } from "react-icons/si";
import { PiComputerTowerFill } from "react-icons/pi";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <>
        {/* <UserContextProvider> */}
        <Sidebar title="Aiprop" menu={menu} />
        <Header title="Aiprop" />
        <div className="content">
          <div className="p-7">{children}</div>
        </div>
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
    icons: <PiComputerTowerFill className="text-[32px]" />,
  },

  {
    label: "Repairmen",
    href: "/admin/repairmen",
    icons: <SiCodechef className="text-[32px]" />,
  },
  {
    label: "Billing",
    href: "/admin/billing",
    icons: <MdFolderSpecial className="text-[32px]" />,
  },
];
