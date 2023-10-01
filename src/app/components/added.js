"use client";
import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";

const AddJob = () => {
  const Data = [
    {
      icon: "/icons/designer.png ",
      title: "Design and Development",
      text: "Dimensiion Studio",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio nec libero consequat facilisis. Nulla facilisi. Sed ac lectus et metus  convallis pellentesque. Vestibulum sit amet felis sit amet odio tristique volutpat. ",
      bgColor: "custom-white0",
    },
    {
      icon: "/icons/fullStack.png",
      title: "Accounting and Finance",
      text: "Alpander",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio nec libero consequat facilisis. Nulla facilisi. Sed ac lectus et metus  convallis pellentesque. Vestibulum sit amet felis sit amet odio tristique volutpat. ",
      bgColor: "custom-white0",
    },
    {
      icon: "/icons/productDev.png",
      title: "Bank Instituition",
      text: "XReact Tech",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio nec libero consequat facilisis. Nulla facilisi. Sed ac lectus et metus  convallis pellentesque. Vestibulum sit amet felis sit amet odio tristique volutpat. ",
      bgColor: "custom-white0",
    },
  ];

  return (
    <div className="custom-background2   flex flex-col justify-center custom-family pt-16  mt-0 ">
      <div className="flex flex-col justify-center mx-auto text-center sm:max-w-[55%] max-w-[90%]  ">
        <h1 className="sm:text-3xl text-xl font-bold sm:my-8 my-4 ">
          Recently Added Job
        </h1>
        <p className="sm:text-lg text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio
          nec libero consequat facilisis. Nulla facilisi. Sed ac lectus et metus
          convallis pellentesque. Vestibulum sit amet felis sit amet odio
          tristique volutpat.
        </p>
      </div>

      <div className="sm:flex hidden flex-row  justify-between sm:mt-16 mt-4">
        <Swiper modules={[Virtual]} spaceBetween={20} slidesPerView={3} virtual>
          {Data.map((item, index) => {
            return (
              <SwiperSlide key={item} virtualIndex={index}>
                <div
                  key={item.title}
                  className={`flex flex-col justify-around sm:h-[510px] h-[100px] sm:w-[450px] w-[150px] ${item.bgColor} sm:rounded-md rounded-[7.4px] sm:mx-4 mx-3 p-5 text-justify sm:px-3 px-1   sm:my-8 my-16 `}
                >
                  <img
                    src={item.icon}
                    alt="Your Icon"
                    className="sm:m-[23px] m-[11px] rounded-[10px] sm:w-[40px] w-[23px] sm:h-[40px] h-[23px]"
                  />
                  <h3 className="font-bold   sm:text-lg text-[10px]    ">
                    {item.title}
                  </h3>
                  <p className="sm:text-xs text-[8px]  text-gray-500   ">
                    {item.text}
                  </p>
                  <p className="sm:text-[12px] text-[8px]  text-gray-500 pr-16 ">
                    {item.description}
                  </p>

                  <div className=" my-[10px] text-black  text-xs ">
                    <input
                      className="  w-[180px]  h-[44px]  rounded custom-background1 placeholder-black placeholder-opacity-100  icon-input11"
                      type="text"
                      placeholder="San Fransisco, CA"
                      required
                    />
                    <input
                      className=" w-[100px]  h-[44px]   rounded custom-background1 placeholder-black placeholder-opacity-100 mx-4 icon-input2"
                      type="text"
                      placeholder="Full Time"
                      required
                    />
                  </div>
                  <div className="   mt-2">
                    <button
                      className="sm:text-lg text-xs custom-green1 bg-transparent sm:font-semibold font-normal   sm:w-[188px] w-[74px] sm:h-[61px] h-[24px] sm:px-3   "
                      type=" Apply Now "
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="sm:hidden flex flex-row  justify-between  sm:mt-16 mt-4">
        <Swiper modules={[Virtual]} spaceBetween={20} slidesPerView={2} virtual>
          {Data.map((item, index) => {
            return (
              <SwiperSlide key={item} virtualIndex={index}>
                <div
                  key={item.title}
                  className={`flex flex-col justify-between sm:h-[219px] h-[190px] sm:w-[286px] w-[170px] ${item.bgColor} sm:rounded-md rounded-[7.4px] sm:mx-4 mx-3 text-justify   sm:my-8 my-16 `}
                >
                  <img
                    src={item.icon}
                    alt="Your Icon"
                    className="sm:m-[23px] m-[11px] rounded-[10px] sm:w-[40px] w-[23px] sm:h-[40px] h-[23px]"
                  />
                  <h3 className="font-bold   sm:text-lg text-[10px] sm:pl-5    tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[10px]   text-gray-500   ">{item.text}</p>
                  <p className="sm:text-[12px] text-[8px]  text-gray-500 pr-2 ">
                    {item.description}
                  </p>
                  <div className=" my-[10px] text-black text-[8px] ">
                    <input
                      className=" w-[80px]  h-[15px]  custom-background1 placeholder-black placeholder-opacity-100  m-1 icon-input11"
                      type="text"
                      placeholder="San Fransisco, CA"
                      required
                    />
                    <input
                      className=" w-[70px]  h-[15px]  custom-background1 placeholder-black placeholder-opacity-100   icon-input2"
                      type="text"
                      placeholder="Full time"
                      required
                    />
                  </div>

                  <div className="   mt-2">
                    <button
                      className="sm:text-lg text-xs custom-green1 bg-transparent sm:font-bold font-semibold  sm:w-[188px] w-[74px] sm:h-[61px] h-[24px] sm:px-3 px-1 "
                      type=" Apply Now "
                    >
                      Apply Now  
                    </button>
                  </div>
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

export default AddJob;
