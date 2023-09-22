import React from "react"
import banner  from '../../../../../public/annbanner.jpg'
function Announcements() {

    const divStye = {   
        backgroundImage: 'url("/annabanner.jpg")' ,
        backgroundSize:" 100% auto ",
        backgroundPosition:"center center",
        backgroundRepeat:"no-repeat",

    }
 
  return (
    <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
      <div 
       
      className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">

        <div 
       style={divStye}
        className="flex flex-col bg-contain  md:flex-row items-strech justify-between   py-30 px-6 md:py-12 lg:px-12 w-full mx-14">
          <div className="flex text-white flex-col py-30 justify-center md:w-1/2">
            <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
              Best Deal
            </h1>
            <p className="text-base lg:text-xl text-white  mt-2">
              Save upto <span className="font-bold">50%</span>
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center py-32 md:justify-end">
            {/* <img src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png" alt="" /> */}
          </div>
        </div>
        {/* <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
              Game Console
            </h1>
            <p className="text-base lg:text-xl text-gray-800">
              Save Upto <span className="font-bold">30%</span>
            </p>
          </div>
          <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
            <img
              src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png"
              alt=""
              className="md:w-20 md:h-20 lg:w-full lg:h-full"
            />
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Announcements
