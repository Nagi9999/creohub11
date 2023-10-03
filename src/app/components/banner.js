const Banner = () => {
    return ( 
        <div className="2xl:container sm:mx-auto  sm:mb-[200px] mb-[70px]">
            <div className="2xl:container  sm:mx-0 mx-[25px]  text-white absolute    sm:rounded-[20px] rounded-[5.1px] custom-background5  ">
            <div className="flex flex-col justify-center mx-auto text-center sm:px-64 px-8  ">
        <h1 className="sm:text-3xl text-lg font-bold sm:my-8 my-2 ">
          Register your CV now!
        </h1>
        <p className="sm:text-lg text-[10px] text-gray-500">
         
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio
          nec libero consequat facilisis. Nulla facilisi. Sed ac lectus et metus
          convallis pellentesque.
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
     );
}
 
export default Banner;