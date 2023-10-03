const Banner = () => {
    return ( 
        <div className="  2xl:container   sm:mb-[200px] mb-[70px]">
            <div className="  text-white absolute sm:mx-[200px] mx-5 sm:rounded-[20px] rounded-[5.1px] custom-background5 ">
            <div className="flex flex-col justify-center mx-auto text-center sm:max-w-[55%] max-w-[90%]  ">
        <h1 className="sm:text-3xl text-lg font-bold sm:my-8 my-2 ">
          Register your CV now!
        </h1>
        <p className="sm:text-lg text-[8px]">
         
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio
          nec libero consequat facilisis. Nulla facilisi. Sed ac lectus et metus
          convallis pellentesque. Vestibulum sit amet felis sit amet odio
          tristique volutpat.
        </p>
      </div>
      <div className="  flex justify-center sm:mb-16 mb-3">
        <button
          className="sm:text-lg text-[8px] white  sm:font-semibold font-normal sm:rounded-[10px] rounded-[2.3px]  border-2  sm:w-[188px] w-[74px] sm:h-[61px] h-[24px] sm:px-3 px-1 sm:my-8 my-2"
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