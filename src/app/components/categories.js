"use client";
import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";

const Catego = () => {
  const Data = [
    {
      icon: "/icons/product.png",
      icon1: "/icons/product1.png",
      title: "Design and Development",
      text: " 350 job vacancy",
    },
    {
      icon: "/icons/accounting.png",
      icon1: "/icons/accounting1.png",
      title: "Accounting and Finance",
      text: "350 job vacancy",
    },
    {
      icon: "/icons/bank.png",
      icon1: "/icons/bank1.png",
      title: "Bank Instituition",
      text: "350 job vacancy",
    },
    {
      icon: "/icons/product.png",
      icon1: "/icons/product1.png",
      title: "Product Management",
      text: "350 job vacancy",
    },
    {
      icon: "/icons/product.png",
      icon1: "/icons/product1.png",
      title: "Design and Development",
      text: " 350 job vacancy",
    },
    {
      icon: "/icons/accounting.png",
      icon1: "/icons/accounting1.png",
      title: "Accounting and Finance",
      text: "350 job vacancy",
    },
    {
      icon: "/icons/bank.png",
      icon1: "/icons/bank1.png",
      title: "Bank Instituition",
      text: "350 job vacancy",
    },
    {
      icon: "/icons/product.png",
      icon1: "/icons/product1.png",
      title: "Product Management",
      text: "350 job vacancy",
    },
  ];

  return (
    <div className="    custom-family   mt-0  relative">
      <div className="custom-green0 absolute inset-0 opacity-5 pt-16 "></div>
      <div className="2xl:container sm:px-20  sm:mx-auto mx-3">
        <div className="flex flex-col justify-center mx-auto text-center sm:max-w-[55%] max-w-[90%]  ">
          <h1 className="sm:text-3xl text-xl font-bold sm:my-8 my-4 ">
            Popular Job Categories
          </h1>
          <p className="sm:text-lg text-xs text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio
            nec libero consequat facilisis. Nulla facilisi. Sed ac lectus et
            metus convallis pellentesque. Vestibulum sit amet felis sit amet
            odio tristique volutpat.
          </p>
        </div>

        <div className="  sm:mt-10 mt-2">
          <Swiper
            spaceBetween={15}
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 5 },
              768: { slidesPerView: 3, spaceBetween: 10 },
              1024: { slidesPerView: 4, spaceBetween: 15 },
            }}
          >
            {Data.map((item, index) => {
              return (
                <SwiperSlide
  key={item}
  virtualIndex={index}
  className="slide1 flex flex-col justify-between sm:pl-4 pl-3  sm:pr-8 pr-6 sm:py-10 py-3 custom-white0   sm:rounded-[20px] rounded-[7.4px] sm:mx-1 mx-0 text-justify   sm:my-8 my-4"
>
  <img
    src={item.icon}
    alt="Your Icon"
    className="hover-icon sm:m-[23px] m-[5px] rounded-[10px] sm:w-[40px] w-[18px] sm:h-[40px] h-[18px]"
  />
  <img
    src={item.icon1}
    alt="Your Icon"
    className="hover-icon1 hidden sm:m-[23px] m-[5px] sm:rounded-[10px] rounded-none  sm:w-[40px] w-[18px] sm:h-[40px] h-[18px]"
  />
  <h3 className="font-bold   sm:text-lg text-[10px] sm:pl-5 pl-1  sm:pr-[143px] pr-0 tracking-tight ">
    {item.title}
  </h3>
  <p className="sm:text-[10px] text-[8px]  text-gray-500 sm:pl-5 pl-1 sm:mt-10 mt-4">
    {item.text}
  </p>
</SwiperSlide>

              );
            })}
          </Swiper>
        </div>

        <div className="  flex justify-center mb-16">
          <button
            className="sm:text-lg text-xs custom-green1 bg-transparent sm:font-semibold font-normal sm:rounded-[10px] rounded-[3.5px]  border-2  sm:w-[188px] w-[74px] sm:h-[61px] h-[24px] sm:px-3 px-1 my-8"
            type="view more"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catego;
