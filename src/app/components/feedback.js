"use client"
import React, { useState } from 'react';

const Feedback = () => {
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

  return (
    <div className="2xl:container mx-auto">
      <div className="flex flex-col sm:flex-row  sm:justify-between justify-center sm:my-20 my-16">
        <div className="sm:w-[50%] ml-2 mt-6 sm:text-justify text-center  sm:px-0 px-3">
          <h1 className="sm:text-5xl text-xl font-bold tracking-tight ">
            People's feedback about JobNow!
          </h1>
          <p className="mt-10 sm:text-lg text-sm text-gray-500 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mt-12 sm:text-lg text-xs font-semibold  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio
            nec libero consequat facilisis. Nulla facilisi. Sed ac lectus et
            metus convallis pellentesque. Vestibulum sit amet felis sit amet
            odio tristique volutpat.
          </p>
          <div className="sm:hidden flex justify-center sm:w-[28%] w-[187px] sm:rounded-[20px] rounded-[7.7px] sm:h-[400px] h-[183px] custom-green0  mt-24 sm:mx-0 mx-auto"></div>
            <div className="my-8">
          <h1 className="font-bold mt-8 ">{feedbackTexts[currentText].name}</h1>
          <p className="mt-5 sm:text-sm text-xs text-gray-500 ">{feedbackTexts[currentText].role}</p>
            <div className='mt-8'>
            <button
              className="custom-background4  text-white font-bold py-3 px-3 rounded-[50%] mr-4"
              onClick={switchToPreviousText}
            >
              &#8592; 
            </button>
            <button
              className="custom-green0  text-white font-bold py-3 px-3 rounded-[50%] "
              onClick={switchToNextText}
            >
              &#8594;
            </button>
            </div>
            
          </div>`
        </div>
        
        <div className="sm:block hidden  sm:w-[28%] w-[187px] sm:rounded-[20px] rounded-[7.7px] sm:h-[400px] h-[183px] custom-green0  my-24 sm:mx-0 mx-auto"></div>
      </div>
      
    </div>
  );
};

export default Feedback;
