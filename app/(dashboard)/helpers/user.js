"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { message } from "antd";
import { userLogin } from "./backend";

const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [userIn, setUserIn] = useState({});
  const [user, setLoggedInUser] = useState({});
  console.log("🚀 ~ UserContextProvider ~ user:", user);
  const [userLoading, setUserLoading] = useState(true);
  let router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      fetchProfile().then((data) => {
        if (data.error === true) {
          localStorage.removeItem("access_token");
          setLoggedInUser({});
        } else {
          setLoggedInUser(data?.data?.user);
        }
        setUserLoading(false); // Set userLoading to false after fetching user data
      });
    } else {
      setUserLoading(false); // Set userLoading to false if there is no token
    }
  }, [userIn]);

  const logIn = async (values) => {
    try {
      const response = await userLogin(values); // Get the entire response
      if (response && response.access_token) {
        // Check if access_token exists in the response
        setLoggedInUser({}); // Set user state if necessary
        localStorage.setItem("access_token", response.access_token);
        message.success("Login successful");
        router.push("/admin/home");
      } else {
        message.error("Invalid response. Please try again."); // Handle invalid response
      }
    } catch (err) {
      message.error(err.message);
    }
  };

  const logOut = () => {
    localStorage.removeItem("access_token");
    setLoggedInUser(null);
    message.success("You have successfully logged out!!");
    router.push("/login");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        logOut,
        setLoggedInUser,
        userIn,
        setUserIn,
        userLoading,
        logIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
export default UserContext;
