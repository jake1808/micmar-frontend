"use client"
import React, { useState } from "react"
import Image from "next/image"

function Contact() {
  const [show, setShow] = useState(true)
  return (
    <div className="bg-white h-screen  w-full">
      <div className=" flex items-center  border-yellow-500 md:w-11/12 px-16 m-auto  justify-center gap-40">
        <div className=" bg-white  rounded md:py-28  lg:px-28 px-8">
          <p className=" text-4xl-semi text-4 mb-4 drop-shadow-md shadow-black  md:text-5xl  text-gray-800 pb-4">
            Contact Us!
          </p>
          <div className="md:flex items-center mt-12">
            <div className="md:w-72 flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800">
                Name
              </label>
              <input
                tabIndex={0}
                arial-label="Please input name"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input  name"
              />
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Email Address
              </label>
              <input
                tabIndex={0}
                arial-label="Please input email address"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input email address"
              />
            </div>
          </div>
          <div className="md:flex items-center mt-8">
            <div className="md:w-72 flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800">
                Company name
              </label>
              <input
                tabIndex={0}
                role="input"
                arial-label="Please input company name"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                placeholder="Please input company name"
              />
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Country
              </label>
              <input
                tabIndex={0}
                arial-label="Please input country name"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input country name"
              />
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col mt-8">
              <label className="text-base font-semibold leading-none text-gray-800">
                Message
              </label>
              <textarea
                tabIndex={0}
                aria-label="leave a message"
                role="textbox"
                className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                defaultValue={""}
              />
            </div>
          </div>
          <p className="text-xs leading-3 text-gray-600 mt-4">
            By clicking submit you agree to our terms of service, privacy policy
            and how we use data as stated
          </p>
          <div className="flex items-center justify-center w-full">
            <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-[#154D8F] hover:bg-[#E49F40] rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
              SUBMIT
            </button>
          </div>
        </div>
        <div className="flex-1 w-1/2 border-yellow-500 h-full">
        <Image
            className=" "
            src="/lighting.jpg"
            height={800}
            width={800}
            alt="A group of People"
          />
                
        </div>
      </div>
    </div>
  )
}

export default Contact
