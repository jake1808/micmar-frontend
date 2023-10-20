import React from "react"
import Image from "next/image"
const AboutUs = () => {
  return (
    <div className="2xl:container max-h-fit md:h-screen 2xl:mx-auto lg: lg:px-20 px-10  md:px-6  ">
      <div className="flex flex-col lg:flex-row justify-between  border-yellow-500 md:pt-32  ">
        <div className="w-full lg:w-5/12 flex-1 flex flex-col     md:pr-16 ">
          <h1 className="  md:pb-5 text-2xl-regular w-full text-gray-900 ">
            About Us
          </h1>
          <p className="font-normal py-10 text-base leading-6 text-gray-600 ">
            Micmar is a chain of hardware shops in Zambia. We offer a variety of
            quality product ranges for contractors and homeowners, available at
            highly competitive prices so you can build with the best. We cater
            to contractors and professional tradesmen as well as people looking
            to improve their home and DIY projects. We offer the confidence of
            quality or product and consistency in service through a passionate
            and never-ending strive towards satisfying our customers’ needs
            better than anyone else in Zambia.
            <br />
            <br />
            Micmar Investments Limited opened its first store on Lumumba Road,
            Lusaka in 1994. The store broke the pattern of smaller hardware
            shops in the town center by introducing a “big box” store concept
            with an unbeaten variety of product ranges, available at highly
            competitive prices. We currently have 7 stores in Zambia with 4 in
            Lusaka, 1 in Kitwe, 1 in Ndola, and 1 in Kasumbalesa. While we have
            made adjustments to our product ranges, updated our stores, and
            ventured into new businesses, our mission remains the same: To offer
            the confidence of quality products and consistency of service
            through a passionate and never-ending strive towards satisfying our
            customers’ needs better than anyone else in the country.
          </p>
        </div>
        <div className="w-full flex-1 md:px-5 md:pb-b  lg:w-8/12 ">
          <Image
           width={500}
           height={500}
            className="w-full h-full"
            src="/numbers.jpg"
            alt="A group of People"
          />
        </div>
      </div>
    
    </div>
  )
}

export default AboutUs
