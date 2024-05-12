import React from "react";
import { Image } from "antd";
import { FaCamera } from "react-icons/fa";
const SeeImage = () => (
  <div className="relative group w-[150px] h-[149px] overflow-hidden">
    <Image
      className="rounded"
      width={150}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
    <div className="cursor-pointer absolute top-0 left-0 bg-[#030303]/20 h-full w-full group-hover:flex items-center justify-center hidden">
      <FaCamera className="text-[36px] text-white" />
    </div>
  </div>
);
export default SeeImage;
