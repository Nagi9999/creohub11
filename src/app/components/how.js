const How = () => {
  const Data = [
    {
      icon: "/icons/register.png",
      title: "Register",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet felis sit amet odio tristique volutpat.",
    },
    {
      icon: "/icons/create.png",
      title: "Create a Resume",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet felis sit amet odio tristique volutpat.",
    },
    {
      icon: "/icons/find.png",
      title: "Find a job",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet felis sit amet odio tristique volutpat.",
    },
    {
      icon: "/icons/apply.png",
      title: "Apply job",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet felis sit amet odio tristique volutpat.",
    },
  ];

  return (
    <div className="justify-center custom-family custom-background2 ">
       <div className="flex flex-col sm:px-20  2xl:container mx-auto p-3 mt-16">
      <div className="w-full sm:mx-0 mx-auto items-center ">
        <div>
          <h1 className="sm:text-4xl text-xl font-bold sm:px-0 px-3">How it works</h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-between sm:mt-6 mt-3 sm:px-0 px-3 ">
          <p className="text-justify sm:max-w-[40%] max-w-none pr-auto sm:text-lg text-xs text-gray-500 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio
            nec libero consequat facilisis. Nulla facilisi. Sed ac lectus et metus
            convallis pellentesque. Vestibulum sit amet felis sit amet odio
            tristique volutpat.
          </p>
          <div className="hidden  sm:flex justify-center mt-6">
        <button
            className="sm:text-lg text-xs custom-green1 sm:font-semibold font-normal sm:rounded-[10px] rounded-[3.5px] border-2 border-custom-green1 sm:py-4 py-2  sm:px-8 px-4  sm:mt-8"
            type="submit"
          >
            Learn More
          </button>
        </div>
        </div>

        <div className="grid sm:grid-cols-4 grid-cols-2  sm:justify-between justify-center sm:mt-16 mt-4">
          {Data.map((item) => {
            return (
              <div
                key={item.title} 
                className="p-[20px] col-span-1 custom-white0 rounded-md sm:mx-4 mx-3 text-justify items-center sm:px-6 px-3 sm:py-10 py-4 sm:my-6 my-3 "
              >
                <img
                  src={item.icon}
                  alt="Your Icon"
                  className="sm:mt-[2px] sm:w-auto w-5 sm:h-auto h-5 my-[5px] sm:rounded-[10px] rounded-none "
                />
                <h3 className="font-bold   sm:text-lg text-sm sm:mt-4 sm:tracking-normal tracking-tight ">{item.title}</h3>
                <p className="sm:mt-4 mt-2 pr-4 sm:text-[10px] text-[8px] text-gray-500 sm:tracking-normal tracking-tighter">{item.text}</p>
              </div>
            );
          })}
        </div>

        <div className="sm:hidden  flex justify-center mt-6">
        <button
            className="sm:text-lg text-xs custom-green1 sm:font-semibold font-normal sm:rounded-[10px] rounded-[3.5px] sm:border-4 border-2 border-custom-green1 sm:py-4 py-2  sm:px-8 px-4  sm:mt-8"
            type="submit"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:grid grid-cols-2   justify-center sm:my-32 my-12">
        <div className="sm:col-span-1 sm:w-[600px] w-[285px] sm:rounded-[20px] rounded-[11px] sm:h-[450px] h-[210px] custom-background3  sm:mt-4  sm:mx-0 mx-auto"></div>
        <div className="sm:col-span-1 sm:w-[670px]  mt-12 sm:text-justify text-center  sm:px-0 px-3">
          <h1 className="sm:text-5xl text-xl font-semibold ">
            We will help you to become an employee in your dream company
          </h1>
          <p className="sm:mt-12 mt-6 sm:text-lg text-xs  text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio
            nec libero consequat facilisis. Nulla facilisi. Sed ac lectus et metus
            convallis pellentesque. Vestibulum sit amet felis sit amet odio
            tristique volutpat.
          </p>

          <button
            className="sm:text-lg text-xs custom-green1 sm:font-semibold font-normal sm:rounded-[10px] rounded-[3.5px]  border-2 border-custom-green1 sm:py-4 py-2  sm:px-8 px-4 sm:mt-8 mt-6"
            type="submit"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default How;