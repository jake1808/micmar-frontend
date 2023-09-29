import React from "react"
import banner  from '../../../../../public/annbanner.jpg'
function Announcements() {

    const divStye = {
      width:"100%",   
        backgroundImage: 'url("/annabanner.jpg")' ,
        backgroundSize:" 100% ",
        backgroundPosition:"center ",
        backgroundRepeat:"no-repeat",

    }
 
  return (
    <div className="2xl:container max-h-fit md:h-screen  border-red-500 flex flex-col items-center justify-center 2xl:mx-auto lg: lg:px-20 px-10  md:px-6 ">
      <div 
       
      className="flex  justify-center bg-[url('/annabanner.jpg')] md:py-0 bg-cover   bg-center  md:h-2/4  bg-no-repeat p-10  2xl:container overflow:none w-full border-yellow-500 flex-col md:flex-row space-y-4 md:space-y-0">

        <div 
       
        className="flex flex-1  bg-no-repeat  border-red-500 w-full flex-col   md:flex-row items-strech justify-between  md:py-12 lg:px-12 ">
          <div className="flex text-white flex-col py-30 justify-center md:w-1/2">
            <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
              Best Deals
            </h1>
            <p className="text-base lg:text-xl text-white  mt-2">
              Save upto <span className="font-bold">50%</span>
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center py-32 md:justify-end">
           
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Announcements
