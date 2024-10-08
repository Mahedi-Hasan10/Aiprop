"use client";
import { Bars, RotatingLines } from "react-loader-spinner";

const MainLoader = () => {
  return (
    <div
      style={{ zIndex: 99999 }}
      className=" left-0 w-full top-0 h-screen flex justify-center items-center bg-gray-500 bg-opacity-25"
      id="main-loader"
    >
      <Loader />
    </div>
  );
};

// export const showLoader = () =>
//   document.getElementById("main-loader").classList.remove("hidden");
// export const hideLoader = () =>
//   document.getElementById("main-loader").classList.add("hidden");
export const showLoader = () =>
  document.getElementById("main-loader")
    ? document.getElementById("main-loader").classList.remove("hidden")
    : console.error("Element with ID 'main-loader' not found");

export const hideLoader = () =>
  document.getElementById("main-loader")
    ? document.getElementById("main-loader").classList.add("hidden")
    : console.error("Element with ID 'main-loader' not found");

export default MainLoader;

export const Loader = () => {
  return (
    <div className="inline-block">
      <div className="relative">
        {/* <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-white"></div>
                <div className="!absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-mainColor animate-spin">
                </div> */}
        <Bars
          height="60"
          width="60"
          color="#FFCF96"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
};