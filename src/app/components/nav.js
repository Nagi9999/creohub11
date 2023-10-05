"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Job", path: "/" },
    { title: "About Us", path: "/" },
    { title: "Contact", path: "/" },
  ];

  return (
    <div className="w-full   custom-family custom-background1 m-0 custom-border0">
      <nav className="  2xl:container  mx-auto flex sm:flex-row flex-col  justify-center   ">
        <div className="  flex sm:justify-between justify-end sm:w-[60%] w-full    h-full   ">
          <div className="flex flex-col sm:max-w-[800px]  sm:px-20 px-0  sm:mr-auto  ">
            <div className="flex flex-row sm:justify-between justify-end sm:mt-16 mt-[13px] items-center">
              <div className="  font-extrabold	sm:text-5xl text-3xl ">
                <span className="text-black">Job</span>
                <span className="custom-green1">NQw</span>
              </div>

              <div className="sm:hidden items-center ml-[20%] mr-5    ">
                <button
                  onClick={toggleMenu}
                  className="text-white w-[36px] h-[29px]    rounded-[4px] "
                >
                  <svg
                    className="h-6 w-6 fill-current custom-green0 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {menuOpen ? (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 5H20V7H4V5ZM4 11H20V13H4V11ZM4 17H20V19H4V17Z"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 5H20V7H4V5ZM4 11H20V13H4V11ZM4 17H20V19H4V17Z"
                      />
                    )}
                  </svg>
                </button>
              </div>

              <div className={"hidden sm:block"}>
                <ul className=" flex   justify-between  text-lg  sm:space-x-[52px]  font-semibold  ">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link href={item.path}>
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={" sm:hidden  block"}>
              <ul
                className={`sm:flex sm:flex-row flex-col font-semibold  justify-center items-center ${
                  menuOpen ? "flex" : "hidden"
                } sm:space-x-4 space-x-0 sm:space-y-0 space-y-2 mt-3`}
              >
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div class="  sm:mt-32 mt-6 pt-10 sm:bg-transparent custom-background2 sm:pb-0 pb-16 sm:px-0 ">
              <div className="sm:text-justify text-center sm:mx-0 mx-8   ">
                <h1 className="sm:text-6xl text-xl font-extrabold  ">
                  Search,Find,&Apply
                </h1>
                <p className="sm:text-xl text-xs sm:mt-[32px] mt-[20px] sm:mr-[130px] mr-0 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ac odio nec libero consequat facilisis. Nulla facilisi. Sed ac
                  lectus et metus convallis pellentesque. Vestibulum sit amet
                  felis sit amet odio tristique volutpat.
                </p>
              </div>

              <div className="flex justify-between  sm:mt-[57px] mt-[20px] background-color  custom-white0   sm:rounded-[20px] rounded-[4.9px] sm:text-base text-[9px] items-center  ">
                <div className="sm:my-[20px] my-[10px] text-black">
                  <input
                    class=" sm:py-2 py-1  sm:rounded-[10px] rounded-[4.9px] custom-background1 placeholder-black  placeholder-opacity-100 icon-input00 w-auto"
                    type="text"
                    placeholder="Job title or keyword"
                    required
                  />
                </div>

                <div className="sm:my-[20px] my-[10px] text-black">
                  <input
                    class=" sm:py-2 py-1 sm:rounded-[10px] rounded-[4.9px] custom-background1 placeholder-black placeholder-opacity-100 icon-input11 w-auto"
                    type="text"
                    placeholder="Locations"
                    required
                  />
                </div>
                <div>
                  <button
                    className="custom-green0 text-white sm:rounded-[10px] rounded-[4.9px] sm:py-2 py-1 sm:px-3 px-2 sm:m-[20px] m-[10px] "
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" sm:w-[40%] w-full h-full   custom-green0 opacity-100  	sm:rounded-bl-[50px] rounded-none px-10">
          <div className="   space-x-[52px]  sm:flex hidden mt-16 items-center justify-end ">
            <h3 className="text-white  ">Sign in</h3>
            <button
              className="custom-white0   font-semibold text-black rounded-[10px] px-4 py-2 icon-input3 "
              type="submit"
            >
              Create Account
            </button>
          </div>
          <div className="sm:mt-[50px] mt-[17px] sm:ml-[40px] ml-[59px]">
            <div class="box-border custom-white0  sm:h-[82px] h-[48px] sm:w-[82px] w-[48px] p-1 rounded-[10px] rotate-custom0 flex flex-col items-center justify-center  ">
              <img
                src="/icons/0.png"
                alt="Your Icon"
                class=" rounded-[10px] sm:w-[40px] w-[23px] sm:h-[40px] h-[23px] "
              />
            </div>
          </div>
          <div className="sm:ml-[400px] ml-[250px] sm:mt-[50px] mt-[0px]">
            <div class="box-border custom-white0  sm:h-[87px] h-[51px] sm:w-[87px] w-[51px] p-1 rounded-[10px] rotate-custom1  flex flex-col items-center justify-center   ">
              <img
                src="/icons/1.png"
                alt="Your Icon"
                class=" rounded-[10px] sm:w-[40px] w-[23px] sm:h-[40px] h-[23px]"
              />
            </div>
          </div>

          <div className=" sm:my-[100px] my-12  sm:ml-[20px] ml-[46px]  ">
            <div class="box-border custom-white0 sm:h-[85px] h-[51px] sm:w-[85px] w-[51px] p-1 rounded-[10px] rotate-custom2 flex flex-col items-center justify-center    ">
              <img
                src="/icons/2.png"
                alt="Your Icon"
                class=" rounded-[10px] sm:w-[40px] w-[23px] sm:h-[40px] h-[23px] "
              />
            </div>
          </div>
        </div>
      </nav>
    </div>


  );
}
