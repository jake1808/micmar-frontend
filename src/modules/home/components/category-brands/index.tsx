
'use client'
import React from 'react'
// import Slider from "react-slick";
import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slick.css'
// import './slick-theme.css'
import Image from 'next/image'

function CategoryBrands() {
  const settings = {
    dots: true,
    autoplay: true,
    className: "flex flex-row items-center justify-center md:py-16",
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  type Styles = {
    container: {
      display: string;
      flexDirection: string;
      alignItems: string;
      border: string;
      margin: string;
      justifyContent: string;
    };
  };
  const styles : Styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'baseline',
      border: '2px solid ', // Red border
      margin: '10px', // Adjust the margin as needed
      justifyContent: 'center',
    },
  };

  const data = [
    {
      id: 1,
      className: '',
      content: (
        <div className="max-w-sm  md:h-80 px-10  flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow  ">
          <Image src="/brand.jpg" alt="brand" width={500} height={500} />
        </div>
      ),
    },
    {
      id: 2,
      className: '',
      content: (
        <div className="max-w-sm  md:h-80 px-10  flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow ">
          <Image src="/brand1.jpg" alt="brand1" width={500} height={500} />
        </div>
      ),
    },
    {
      id: 3,
      className: '',
      content: (
        <div className="max-w-sm  md:h-80 px-10  flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow ">
          <Image src="/brand2.png" alt="brand2" width={500} height={500} />
        </div>
      ),
    },
    {
      id: 4,
      className: '',
      content: (
        <div className="max-w-sm  md:h-80 px-10  flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow ">
          <Image src="/brand3.jpg" alt="brand3" width={500} height={500} />
        </div>
      ),
    },

    {
      id: 5,
      className: '',
      content: (
        <div className="max-w-sm  md:h-80 px-10  flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow ">
          <Image src="/brand4.jpg" alt="brand4" width={500} height={500} />
        </div>
      ),
    },

    {
      id: 6,
      className: '',
      content: (
        <div className="max-w-sm  md:h-80 px-10  flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow ">
          <Image src="/brand5.png" alt="brand5" width={500} height={500} />
        </div>
      ),
    },
  ];
  
  return (
    <div className="2xl:container max-h-fit md:h-screen 2xl:mx-auto lg: text-center lg:px-20 px-10 flex flex-col item-c   md:px-6  py-10   border-yellow-500">
      <h1 className="text-center   py-10 text-2xl-regular w-full text-gray-900  mb-4">
                Shop By Category
              </h1>
              <div>
              <Slider {...settings}  >
    
    {
       data.map((item) => (
         <div key={item.id} className={item.className}>
           {item.content}
         </div>
       ))
    }
   </Slider>
              </div>
   
  </div>
  )
}

export default CategoryBrands

