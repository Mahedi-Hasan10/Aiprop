const Footer = () => {
  return (
    <footer className="fixed left-0 md:left-[309px] md:px-3 bottom-0 right-0 md:h-[50px] bg-white transition-all duration-300 z-10 border-t-[1.5px] border-[#030303] border-opacity-10 ">
      <div className=" flex flex-wrap justify-between items-center h-full md:py-[30px] px-[15px] py-[5px]  gap-2 ">
        <p className="text-[#030303]\60 md:text-xl text-sm">
          All rights reserved by AiPropertyFlow @ 2024
        </p>
        <p className="text-primary lg:text-lg text-sm">
          www.aipropertyflow.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
