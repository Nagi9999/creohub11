"use client";
import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";

const Catego = () => {
  const Data = [
    {
      icon: "/icons/design.png ",
      title: "Design and Development",
      text: " 350 job vacancy",
      bgColor: "custom-green0",
    },
    {
      icon: "/icons/accounting.png",
      title: "Accounting and Finance",
      text: "350 job vacancy",
      bgColor: "custom-white0",
    },
    {
      icon: "/icons/bank.png",
      title: "Bank Instituition",
      text: "350 job vacancy",
      bgColor: "custom-white0",
    },
    {
      icon: "/icons/product.png",
      title: "Product Management",
      text: "350 job vacancy",
      bgColor: "custom-white0",
    },
     {
      icon: "/icons/product.png",
      title: "Product Management",
      text: "350 job vacancy",
      bgColor: "custom-white0",
    },
    {
      icon: "/icons/design.png ",
      title: "Design and Development",
      text: " 350 job vacancy",
      bgColor: "custom-green0",
    },
    {
      icon: "/icons/accounting.png",
      title: "Accounting and Finance",
      text: "350 job vacancy",
      bgColor: "custom-white0",
    },
    {
      icon: "/icons/bank.png",
      title: "Bank Instituition",
      text: "350 job vacancy",
      bgColor: "custom-white0",
    },
    {
      icon: "/icons/product.png",
      title: "Product Management",
      text: "350 job vacancy",
      bgColor: "custom-white0",
    },
     {
      icon: "/icons/product.png",
      title: "Product Management",
      text: "350 job vacancy",
      bgColor: "custom-white0",
    },
  ];

  return (
    <div className="custom-green00   flex flex-col justify-center custom-family pt-16  mt-0 ">
      <div className="flex flex-col justify-center mx-auto text-center sm:max-w-[55%] max-w-[90%]  ">
        <h1 className="sm:text-3xl text-xl font-bold sm:my-8 my-4 ">
          Popular Job Categories
        </h1>
        <p className="sm:text-lg text-xs">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio
          nec libero consequat facilisis. Nulla facilisi. Sed ac lectus et metus
          convallis pellentesque. Vestibulum sit amet felis sit amet odio
          tristique volutpat.{" "}
        </p>
      </div>

      <div className="sm:flex hidden flex-row  justify-between sm:mt-16 mt-4">
        <Swiper modules={[Virtual]} spaceBetween={20} slidesPerView={4} virtual>
          {Data.map((item, index) => {
            return (
              <SwiperSlide key={item} virtualIndex={index}>
                <div
                  key={item.title}
                  className={`flex flex-col justify-between sm:h-[219px] h-[100px] sm:w-[286px] w-[150px] ${item.bgColor} sm:rounded-md rounded-[7.4px] sm:mx-4 mx-1 text-justify   sm:my-8 my-16 `}
                >
                  <img
                    src={item.icon}
                    alt="Your Icon"
                    className="sm:m-[23px] m-[11px] rounded-[10px] sm:w-[40px] w-[23px] sm:h-[40px] h-[23px]"
                  />
                  <h3 className="font-bold   sm:text-lg text-[10px] sm:pl-5 pl-1  pr-[50%] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="sm:text-[10px] text-[8px]  text-gray-500 pl-5  my-auto">
                    {item.text}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>


      <div className="sm:hidden flex flex-row  justify-between  sm:mt-16 mt-4">
        <Swiper modules={[Virtual]} spaceBetween={20} slidesPerView={3} virtual>
          {Data.map((item, index) => {
            return (
              <SwiperSlide key={item} virtualIndex={index}>
                <div
                  key={item.title}
                  className={`flex flex-col justify-between sm:h-[219px] h-[100px] sm:w-[286px] w-[130px] ${item.bgColor} sm:rounded-md rounded-[7.4px] sm:mx-4 mx-3 text-justify pl-1   sm:my-8 my-16 `}
                >
                  <img
                    src={item.icon}
                    alt="Your Icon"
                    className="sm:m-[23px] m-[11px] rounded-[10px] sm:w-[40px] w-[23px] sm:h-[40px] h-[23px]"
                  />
                  <h3 className="font-bold   sm:text-lg text-[10px] sm:pl-5   pr-[50%] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="sm:text-[10px] text-[8px]  text-gray-500   my-auto">
                    {item.text}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>


      <div className="  flex justify-center mb-16">
        <button
          className="sm:text-lg text-xs custom-green1 bg-transparent sm:font-semibold font-normal sm:rounded-[10px] rounded-[3.5px] sm:border-4 border-2  sm:w-[188px] w-[74px] sm:h-[61px] h-[24px] sm:px-3 px-1 my-8"
          type="view more"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Catego;
