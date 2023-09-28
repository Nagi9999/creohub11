const NavBar = () => {
  return (
    <nav className="fixed  top-0 w-full  flex justify-center  custom-family">
      <div className="flex justify-between  absolute w-[1440px] h-[693px] custom-background1 m-0 custom-border0 border border-dashed  ">
        <div className="flex flex-col max-w-[650px] ml-[100px]">
          <div className="flex flex-row">
            <div className="mt-16 mr-[76px] font-extrabold	text-3xl ">
              {" "}
              JobNQw
            </div>
            <div className=" mt-[70px] ">
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
          <div className="text-justify   ">
            <h1 className="text-5xl font-bold mt-[158px]">
              Search, Find, & Apply
            </h1>
            <p className="mt-[32px] mr-[130px] px-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              odio nec libero consequat facilisis. Nulla facilisi. Sed ac lectus
              et metus convallis pellentesque. Vestibulum sit amet felis sit
              amet odio tristique volutpat.
            </p>
          </div>

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

        <div className="w-[603px] absoluteh-full custom-green0 opacity-100 ml-0	rounded-bl-[50px]">
          <div className="flex  space-x-[52px] ">
            <h3 className="text-white mt-[70px] ml-[200px] ">Sign in</h3>
            <button
              className="custom-white0 mt-[55px] mr-[100px] font-semibold text-black rounded-[10px]  w-[202px] h-[44px]  icon-input3 "
              type="submit"
            >
              Create Account
            </button>
          </div>
          <div class="box-border custom-white0 mt-[70px] ml-[92px] h-[82px] w-[82px] p-1 rounded-[10px] rotate-custom0 ">
            <img
              src="/icons/0.png"
              alt="Your Icon"
              class="m-[20px] rounded-[10px]"
            />
          </div>
          <div class="box-border custom-white0 ml-[439PX] mt-[38px] h-[87px] w-[87px] p-1 rounded-[10px] rotate-custom1">
            <img
              src="/icons/1.png"
              alt="Your Icon"
              class="m-[20px] rounded-[10px]"
            />
          </div>

          <div class="box-border custom-white0 mt-[59px] ml-[64px] h-[85px] w-[85px] p-1 rounded-[10px] rotate-custom2 ">
            <img
              src="/icons/2.png"
              alt="Your Icon"
              class="m-[20px] rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
