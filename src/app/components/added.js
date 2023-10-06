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
      title: "UI/UX Deigner",
      text: "Dimensiion Studio",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio nec libero consequat facilisis. Nulla facilisi. Sed ac lectus et metus  convallis pellentesque. Vestibulum sit amet felis sit amet odio tristique volutpat. ",
    },
    {
      icon: "/icons/fullStack.png",
      title: "Full Stack Developer",
      text: "Alpander",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio nec libero consequat facilisis. Nulla facilisi. Sed ac lectus et metus  convallis pellentesque. Vestibulum sit amet felis sit amet odio tristique volutpat. ",
    },
    {
      icon: "/icons/productDev.png",
      title: "Product Designer",
      text: "XReact Tech",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio nec libero consequat facilisis. Nulla facilisi. Sed ac lectus et metus  convallis pellentesque. Vestibulum sit amet felis sit amet odio tristique volutpat. ",
    }, 
  ];

  return (
    <div className="custom-background2 custom-family">
      <div className="2xl:container sm:px-20 sm:mx-auto mx-1 flex flex-col justify-center  sm:pt-16   ">
      <div className="flex flex-col justify-center mx-auto text-center sm:max-w-[55%] max-w-[90%]  ">
        <h1 className="sm:text-4xl text-xl font-extrabold sm:my-8 my-4 ">
          Recently Added Jobs
        </h1>
        <p className="sm:text-lg text-xs text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio
          nec libero consequat facilisis. Nulla facilisi. Sed ac lectus et metus
          convallis pellentesque. Vestibulum sit amet felis sit amet odio
          tristique volutpat.
        </p>
      </div>

      <div className="  sm:mt-16 mt-4">
        <Swiper modules={[Virtual]} spaceBetween={19} slidesPerView={2} virtual  
        breakpoints={
          {
            640:{slidesPerView:2,spaceBetween:12,
            },
            768:{slidesPerView:2,spaceBetween:30,
            },
            1024:{slidesPerView:3,spaceBetween:50,
            },


          }
        }>
          {Data.map((item, index) => {
            return (
              <SwiperSlide key={item} virtualIndex={index}>
                <div
                  key={item.title}
                  className=" flex flex-col  sm:px-[30px] pl-[16px] sm:py-[50px] py-[10px] custom-white0 sm:rounded-md rounded-[7.4px]  text-justify     "
                >
                  <img
                    src={item.icon}
                    alt="Your Icon"
                    className="  rounded-[10px] sm:w-[93px] w-[35px] sm:h-[93px] h-[35px]"
                  />
                  <h3 className="font-extrabold   sm:text-lg text-[10px] sm:mt-8 mt-4  ">
                    {item.title}
                  </h3>
                  <p className="sm:text-xs text-[8px]  text-gray-500 sm:my-4 my-2  ">
                    {item.text}
                  </p>
                  <p className="sm:text-[12px] text-[8px]  text-gray-500 sm:pr-16 pr-2 ">
                    {item.description}
                  </p>

                  <div className=" sm:my-6 my-4 text-black font-bold sm:text-xs text-[8px] ">
                    <div >
                      <button
                      className="   sm:py-2 py-1 sm:px-8 px-[2px]      sm:rounded rounded-[3.1px] custom-background1 placeholder-black placeholder-opacity-100 tracking-tight  icon-input4"
                     
                    >San Fransisco, CA</button>
                    <button
                      className=" sm:py-2 py-1 sm:px-8 px-[2px]   sm:rounded rounded-[3.1px] custom-background1 placeholder-black placeholder-opacity-100 sm:mx-4 mx-[3px] tracking-tight icon-input2"
                     
                    >Full Time</button>
                    </div>
                    
                    <div className="   sm:mt-2">
                    <button
                      className="sm:text-lg text-xs custom-green1  sm:font-bold font-normal  mt-6    "
                      type=" Apply Now "
                    >
                      Apply Now {">"}
                    </button>
                  </div>
                  </div>
                  
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

    

      <div className="  flex justify-center sm:my-10 my-8">
        <button
          className="sm:text-lg text-xs custom-green1 bg-transparent sm:font-semibold font-normal sm:rounded-[10px] rounded-[3.5px] border-2  sm:py-4 py-2  sm:px-8 px-4  sm:my-8 my-2"
          type="view more"
        >
          View More
        </button>
      </div>
    </div>
    </div>
    
  );
};

export default AddJob;
