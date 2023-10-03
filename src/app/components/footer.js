const Footer = () => {
    return ( 
        <div className="w-full   custom-family custom-green0  text-white ">
            <div className=" my-16 2xl:container sm:mx-auto mx-5 sm:mt-[200px] mt-16 flex sm:flex-row  justify-between  flex-col  ">
                <div className="sm:w-[30%] w-[300px] ">
                    <h1 className="sm:text-5xl text-3xl font-extrabold mt-6"><span className="text-black">Job</span>NQw</h1>
                    <p className="sm:text-sm text-xs mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio
            nec libero consequat facilisis. Nulla facilisi.</p>
                </div>
                <div className="flex  sm:justify-between justify-between sm:mt-0 mt-8 ">
                <div className=" sm:max-w-[240px] max-w-xs sm:mx-32 " >
                    <h1 className="sm:text-2xl text-xl font-semibold">Company</h1>
                    <ul className="sm:mt-4 mt-3 sm:text-sm text-xs space-y-3">
                        <li>Address: 123 Fifth Avenue, New York-1060, USA</li>
                        <li>Call Us:+(600) 456 7890</li>
                        <li>Email:yourid@example.com</li>
                        <li>Mon Sat: 9:00 AM - 19:00 PM</li>
                    </ul>
                </div>
                <div >
                    <h1 className="sm:text-2xl text-xl  font-semibold">Pages</h1>
                    <ul className="sm:mt-4 mt-3 sm:text-sm text-xs space-y-3 list-custom">
                        <li>Home</li>
                        <li>Booking</li>
                        <li>Facilities</li>
                        <li>About Us</li>
                        <li>Location</li>
                        <li>Contact</li>
                    </ul>
                </div>
                </div>
                
                <div>
                    <h1 className="sm:text-2xl text-xl font-semibold">Contact Us</h1>
                    <div class=" text-white text-center w-full py-2  ">
      <div class="sm:mt-4 mt-1 space-x-4 flex sm:justify-center items-center">
        <a href="www.facebook.com" class="no-underline text-white">
          <img src="/icons/facebook.png" alt="Facebook" class="sm:w-6 w-4 sm:h-6 h-4" />
        </a>
        <a href="www.google.com" class="no-underline text-white">
          <img src="/icons/google.png" alt="Google" class="sm:w-6 w-4 sm:h-6 h-4" />
        </a>
        <a href="www.linkedin.com" class="no-underline text-white">
          <img src="/icons/linkedin.png" alt="LinkedIn" class="sm:w-6 w-4 sm:h-6 h-4" />
        </a>
        <a href="www.twitter.com" class="no-underline text-white">
          <img src="/icons/twitter.png" alt="Twitter" class="sm:w-6 w-4 sm:h-6 h-4" />
        </a>
      </div>
    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;