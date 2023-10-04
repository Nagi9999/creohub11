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
    <div className="2xl:container sm:px-20  mx-auto">
      <div className="flex flex-col sm:flex-row  sm:justify-between justify-center sm:my-20 my-8">
        <div className="sm:w-[60%]  mt-6 sm:text-justify text-center  sm:px-0 px-8">
          <h1 className="sm:text-5xl text-lg sm:tracking-normal tracking-tight font-bold  ">
            People's feedback about JobNow!
          </h1>
          <p className="sm:mt-10 mt-4 sm:text-lg text-xs text-gray-500 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="sm:mt-12 mt-6 sm:text-xl text-xs font-bold  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio
            nec libero consequat facilisis. Nulla facilisi. Sed ac lectus et
            metus convallis pellentesque. Vestibulum sit amet felis sit amet
            odio tristique volutpat.
          </p>
          <div className="sm:hidden flex justify-center sm:w-[400px] w-[187px] sm:rounded-[20px] rounded-[7.7px] sm:h-[400px] h-[183px] custom-green0  mt-14 sm:mx-0 mx-auto"></div>
            <div className="my-8">
          <h1 className="sm:text-2xl font-bold mt-8 ">{feedbackTexts[currentText].name}</h1>
          <p className="mt-5 sm:text-sm text-xs text-gray-500 ">{feedbackTexts[currentText].role}</p>
            <div className='sm:mt-8 mt-3'>
            <button
              className="   text-white font-bold py-3 px-3 rounded-[50%] mr-4"
              onClick={switchToPreviousText}
            >
              <img src='/icons/arrow1.png' className='sm:w-[50px] w-[21px] sm:h-[50px] h-[21px]'/> 
            </button>
            <button
              className=" text-white font-bold py-3 px-3 rounded-[50%] "
              onClick={switchToNextText}
            >
                <img src='/icons/arrow2.png' className='sm:w-[50px] w-[21px] sm:h-[50px] h-[21px]'/>
              </button>
            </div>
            
          </div>`
        </div>
        
        <div className="sm:flex hidden  sm:w-[474px] w-[187px] sm:rounded-[20px] rounded-[7.7px] sm:h-[484px] h-[183px] custom-green0  my-24 sm:mx-0 mx-auto"></div>
      </div>
      
    </div>
  );
};

export default Feedback;
