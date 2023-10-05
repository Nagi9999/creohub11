"use client";
import React, { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [currentText, setCurrentText] = useState(0);
  const feedbackTexts = [
    {
      name: "Browng Garcia",
      role: "Full Stack Developer in XReact Tech",
    },
    {
      name: "John Doe",
      role: "Frontend Developer at ABC Inc",
    },
  ];

  const switchToNextText = () => {
    setCurrentText((prevText) => (prevText + 1) % feedbackTexts.length);
  };

  const switchToPreviousText = () => {
    setCurrentText((prevText) =>
      prevText === 0 ? feedbackTexts.length - 1 : prevText - 1
    );
  };
  const links = [
    { title: "Home", path: "/" },
    { title: "Booking", path: "/booking" },
    { title: "Facilities", path: "/facilities" },
    { title: "About Us", path: "/about-us" },
    { title: "Location", path: "/location" },
    { title: "Contact", path: "/contact" },
  ];
  return (
    <div className="relative w-full   custom-family ">
      <div className=" sm:px-20 2xl:container  mx-auto">
        <div className="flex flex-col sm:flex-row  sm:justify-between justify-center sm:my-32 my-8">
          <div className="sm:w-[60%]  mt-6 sm:text-justify text-center  sm:px-0 px-8">
            <h1 className="sm:text-5xl text-lg sm:tracking-normal tracking-tight font-bold  ">
              People's feedback about JobNow!
            </h1>
            <p className="sm:mt-10 mt-4 sm:text-lg text-xs text-gray-500 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="sm:mt-12 mt-6 sm:text-xl text-xs font-bold  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              odio nec libero consequat facilisis. Nulla facilisi. Sed ac lectus
              et metus convallis pellentesque. Vestibulum sit amet felis sit
              amet odio tristique volutpat.
            </p>
            <div className="sm:hidden flex justify-center sm:w-[400px] w-[187px] sm:rounded-[20px] rounded-[7.7px] sm:h-[400px] h-[183px] custom-green0  mt-14 sm:mx-0 mx-auto"></div>
            <div className="my-8">
              <h1 className="sm:text-2xl font-bold mt-8 ">
                {feedbackTexts[currentText].name}
              </h1>
              <p className="mt-5 sm:text-sm text-xs text-gray-500 ">
                {feedbackTexts[currentText].role}
              </p>
              <div className="sm:mt-8 mt-3">
                <button
                  className="   text-white font-bold py-3 px-3 rounded-[50%] mr-4"
                  onClick={switchToPreviousText}
                >
                  <img
                    src="/icons/arrow1.png"
                    className="sm:w-[50px] w-[21px] sm:h-[50px] h-[21px]"
                  />
                </button>
                <button
                  className=" text-white font-bold py-3 px-3 rounded-[50%] "
                  onClick={switchToNextText}
                >
                  <img
                    src="/icons/arrow2.png"
                    className="sm:w-[50px] w-[21px] sm:h-[50px] h-[21px]"
                  />
                </button>
              </div>
            </div>
            `
          </div>

          <div className="sm:flex hidden  sm:w-[474px] w-[187px] sm:rounded-[20px] rounded-[7.7px] sm:h-[484px] h-[183px] custom-green0  my-24 sm:mx-0 mx-auto"></div>
        </div>
      </div>
      <div className="mx-auto custom-green0 text-white sm:py-9 py-1">
        <div className="2xl:container sm:px-20 sm:mx-auto mx-5 sm:pt-24 my-16 grid sm:grid-cols-7 justify-between grid-rows-1  space-y-4">
          <div className=" col-span-3 smpr-24 pr-16">
            <h1 className="sm:text-5xl text-3xl font-extrabold mt-6">
              <span className="text-black">Job</span>NQw
            </h1>
            <p className="sm:text-sm text-xs mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              odio nec libero consequat facilisis. Nulla facilisi.
            </p>
          </div>
          <div className="col-span-2 sm:pr-24  pr-16">
            <h1 className="sm:text-2xl text-xl font-semibold">Company</h1>
            <ul className="sm:mt-4 mt-3 sm:text-sm text-[10px] space-y-3 ">
              <li>Address: 123 Fifth Avenue, New York-1060, USA</li>
              <li>Call Us: +(600) 456 7890</li>
              <li>Email: yourid@example.com</li>
              <li>Mon Sat: 9:00 AM - 19:00 PM</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h1 className="sm:text-2xl text-xl font-semibold">Pages</h1>
            <div className="flex flex-col sm:mt-4 mt-3 sm:text-sm text-[10px] space-y-3">
              {links.map((link, index) => (
                <Link key={index} href={link.path}>
                  {"> "} {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div class="text-white ">
            <h1 className="sm:text-2xl text-xl font-semibold">Contact Us</h1>
            <div class="sm:mt-4 mt-2 space-x-4 flex">
              <a href="www.facebook.com" class="no-underline text-white">
                <img
                  src="/icons/facebook.png"
                  alt="Facebook"
                  class="sm:w-6 w-4 sm:h-6 h-4"
                />
              </a>
              <a href="www.google.com" class="no-underline text-white">
                <img
                  src="/icons/google.png"
                  alt="Google"
                  class="sm:w-6 w-4 sm:h-6 h-4"
                />
              </a>
              <a href="www.linkedin.com" class="no-underline text-white">
                <img
                  src="/icons/linkedin.png"
                  alt="LinkedIn"
                  class="sm:w-6 w-4 sm:h-6 h-4"
                />
              </a>
              <a href="www.twitter.com" class="no-underline text-white">
                <img
                  src="/icons/twitter.png"
                  alt="Twitter"
                  class="sm:w-6 w-4 sm:h-6 h-4"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" 2xl:container sm:px-20 right-0 left-0  sm:bottom-[380px] bottom-[450px] absolute  sm:mx-auto   ">
        <div className=" sm:mx-0 mx-[25px]  text-white     sm:rounded-[20px] rounded-[5.1px] custom-background5  ">
          <div className="flex flex-col justify-center mx-auto text-center sm:px-64 px-8  ">
            <h1 className="sm:text-3xl text-lg font-bold sm:my-8 my-2 ">
              Register your CV now!
            </h1>
            <p className="sm:text-lg text-[10px] text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              odio nec libero consequat facilisis. Nulla facilisi. Sed ac lectus
              et metus convallis pellentesque.
            </p>
          </div>
          <div className="  flex justify-center sm:mb-16 mb-3">
            <button
              className="sm:text-lg text-[10px] white  sm:font-semibold font-normal sm:rounded-[10px] rounded-[2.3px]  border-2  sm:px-4 px-3 sm:py-3 py-1 sm:my-8 my-4"
              type="view more"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
