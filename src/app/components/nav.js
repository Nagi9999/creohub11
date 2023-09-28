"use client"
import { useState } from "react";

export default function NavBar  () {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="fixed  top-0 w-full   flex justify-center  custom-family">
      <div className="sm:flex justify-between sm:w-[1440px] w-full absolute  sm:h-[693px] h-[83px] custom-background1 m-0 custom-border0 border border-dashed  ">
        <div className="flex flex-col max-w-[650px] ml-[100px]">
          <div className="flex flex-row mx-auto items-center">
            <div className="sm:mt-16 mt-[13px] mr-[76px] font-extrabold	text-3xl ">
            <span className="text-black">Job</span>
              <span className="custom-green1">NQw</span>
            </div>

            <div className="sm:hidden items-center mt-[26px]">
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

            <div className=" mt-[70px] hidden sm:block ">
              <ul className="flex   justify-between  space-x-[52px]  font-semibold  ">
                <li>
                  <span>Home</span>
                </li>
                <li>
                  <span>Job</span>
                </li>
                <li>
                  <span>About Us</span>
                </li>
                <li>
                  <span>Contact</span>
                </li>
              </ul>
            </div>
          </div>

          <div class=" sm:block hidden">
          <div className="text-justify   ">
            <h1 className="text-5xl font-extrabold mt-[158px]">
              Search, Find, & Apply
            </h1>
            <p className="mt-[32px] mr-[130px] px-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              odio nec libero consequat facilisis. Nulla facilisi. Sed ac lectus
              et metus convallis pellentesque. Vestibulum sit amet felis sit
              amet odio tristique volutpat.
            </p>
          </div >

          <div className="flex justify-between mt-[57px] custom-white0 w-[651px] h-[84px] rounded-[20px] mr-[86px]">
            <div className="m-[20px] text-black">
              <input
                className="w-[255px] h-[44px] rounded custom-background1 placeholder-black placeholder-opacity-100 icon-input0"
                type="text"
                placeholder="Job title or keyword"
                required
              />
            </div>

            <div className="my-[20px] text-black">
              <input
                className="w-[210px] h-[44px] rounded custom-background1 placeholder-black placeholder-opacity-100 icon-input1"
                type="text"
                placeholder="Locations"
                required
              />
            </div>

            <div></div>
            <div>
              <button
                className="custom-green0 text-white rounded-[10px]  w-[103px] h-[44px] m-[20px] "
                type="submit"
              >
                Search
              </button>
            </div>
          </div>

          </div>
          

        </div>
        
        <div class=" sm:hidden block   mx-0">
          <div className="flex flex-col  text-justify px-4  ">
            <h1 className="text-xl text-center font-extrabold mt-[40px]">
              Search, Find, & Apply
            </h1>
            <p className="mt-[20px] text-xs px-auto text-center ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              odio nec libero consequat facilisis. Nulla facilisi. Sed ac lectus
              et metus convallis pellentesque. Vestibulum sit amet felis sit
              amet odio tristique volutpat.
            </p>
          </div >

          <div className="flex justify-between mt-[30px] mx-auto  custom-white0  w-[319px]   h-[41px] rounded-[4.9px] text-[9px]">
            <div className="m-[10px] text-black">
              <input
                className="w-[126px] h-[22px] rounded custom-background1 placeholder-black placeholder-opacity-100 icon-input00"
                type="text"
                placeholder="Job title or keyword"
                required
              />
            </div>

            <div className="my-[10px] text-black">
              <input
                className="w-[103px] h-[22px] rounded custom-background1 placeholder-black placeholder-opacity-100 icon-input11"
                type="text"
                placeholder="Locations"
                required
              />
            </div>

            
            <div>
              <button
                className="custom-green0 text-white rounded-[4.9px]  w-[50px] h-[22px] m-[10px] "
                type="submit"
              >
                Search
              </button>
            </div>
          </div>

          </div>


        <div className=" sm:w-[603px] w-full sm:h-full h-[290px] absoluteh-full custom-green0 opacity-100 sm:mt-0 mt-[78px]	sm:rounded-bl-[50px] rounded-none">
          <div className="  space-x-[52px]  sm:flex hidden ">
            <h3 className="text-white mt-[70px] ml-[200px] ">Sign in</h3>
            <button
              className="custom-white0 mt-[55px] mr-[100px] font-semibold text-black rounded-[10px]  w-[202px] h-[44px]  icon-input3 "
              type="submit"
            >
              Create Account
            </button>
          </div>
          <div class="box-border custom-white0 sm:mt-[70px] mt-[17px] sm:ml-[92px] ml-[59px] sm:h-[82px] h-[48px] sm:w-[82px] w-[48px] p-1 rounded-[10px] rotate-custom0 sm:relative absolute  ">
            <img
              src="/icons/0.png"
              alt="Your Icon"
              class="sm:m-[23px] m-[11px] rounded-[10px] sm:w-[40px] w-[23px] sm:h-[40px] h-[23px] "
            />
          </div>
          <div class="box-border custom-white0 sm:ml-[439PX] ml-[279PX] sm:mt-[38px] mt-[41px] sm:h-[87px] h-[51px] sm:w-[87px] w-[51px] p-1 rounded-[10px] rotate-custom1 sm:relative absolute  ">
            <img
              src="/icons/1.png"
              alt="Your Icon"
              class="sm:m-[23px] m-[12px] rounded-[10px] sm:w-[40px] w-[23px] sm:h-[40px] h-[23px]"
            />
          </div>

          <div class="box-border custom-white0 sm:mt-[59px] mt-[137px] sm:ml-[64px] ml-[46px] sm:h-[85px] h-[51px] sm:w-[85px] w-[51px] p-1 rounded-[10px] rotate-custom2 sm:relative absolute   ">
            <img
              src="/icons/2.png"
              alt="Your Icon"
              class="sm:m-[23px] m-[12px] rounded-[10px] sm:w-[40px] w-[23px] sm:h-[40px] h-[23px] "
            />
          </div>
        </div>
      </div>
    </nav>
  );
}


