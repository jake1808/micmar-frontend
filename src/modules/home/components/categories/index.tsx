import React, { useState } from "react"
import Image from "next/image"
export default function ProductCategories() {
  return (
    <div className=" 2xl:container 2xl:mx-auto lg: bor2 border-pink-500 h-screen lg:px-20 px-10   md:px-6 ">
      <div className="flex justify-center bord border-green-500 items-center">
        <div className="2xl:mx-auto  bo2 border-yellow-500 2xl:container  px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
          <div className="flex flex-col bor border-red-500 h-screen  jusitfy-center items-center space-y-10">
            <div className="flex flex-col justify-center items-center space-y-2">
              <p className="text-xl leading-5 text-gray-600">
               
              </p>
              <h1 className="text-2xl-regular text-gray-900 max-w-lg mb-4">
                Shop By Category
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4  w-full">
              <div className="relative group h-2/3 flex justify-center items-center bo border-red-600   w-full">
                <Image
                  className="object-center object-cover h-full w-full"
                  width={500}
                  height={300}  
                  src="/pool.webp"
                  alt="girl-image"
                />
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                   
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>
              <div className="flex flex-col space-y- bo border-yellow-500 h-2/3 md:space-y-2 mt-4 md:mt-0">
                <div className="relative group flex   justify-center items-center h-2/4  w-full">
                  <Image
                    width={500}
                    height={500}
                    className="object-center object-cover h-full w-full"
                    src="/braii.webp"
                    alt="shoe-image"
                  />
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                 
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                </div>
                <div className="relative group flex justify-center items-center   h-2/4  w-full">
                  <Image
                    width={500}
                    height={500}
                    className="object-center object-cover h-full w-full"
                    src="/airconditioner.webp"
                    alt="watch-image"
                  />
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                   
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                </div>
              </div>
              <div className="relative group justify-center items-center h-2/3 w-full hidden lg:flex">
                <Image
                width={500}
                height={500}
                  className="object-center object-cover h-full w-full"
                  src="/pool.webp"
                  alt="girl-image"
                />
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>
              <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
              
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>
            </div>
            <div className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
              
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
          
              </button>
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
