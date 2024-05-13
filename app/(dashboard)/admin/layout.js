"use client";
import Sidebar from "../components/layout/sidebar";
import Header from "../components/layout/header";
import { MdDashboard } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoHome, IoLogOut, IoSettings } from "react-icons/io5";
import Footer from "../components/layout/footer";
import { UserProvider, useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  useEffect(() => {
    // If the user is not logged in and Auth0 data is loaded, redirect to login page
    if (!user && !isLoading) {
      router.push("/api/auth/login");
    }
    if (user && isLoading) {
      router.push("/admin/home");
    }
  }, [user, isLoading, router]);
  return (
    <div className=" bg-gray-100 font-roboto">
      <UserProvider>
        <>
          {!user && !isLoading ? (
            router.push("/api/auth/login")
          ) : (
            <>
              <Sidebar title="Aiprop" menu={menu} />
              <div className="content flex flex-col relative ">
                <Header title="Aiprop" />
                <div className=" xl:mt-[30px] mt-[15px] xl:mx-[31px] mx-[15px] xl:mb-[30px] mb-[15px] relative ">
                  {children}
                </div>
                <Footer />
              </div>
            </>
          )}
        </>
      </UserProvider>
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
