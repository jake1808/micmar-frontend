import React from "react";

const Header = () => {
return ( 
<div className=" text-black  h-fit">
<div className="container mx-auto py-10">
<div className="flex flex-col lg:flex-row justify-center items-strech mx-4">
<div className="lg:w-4/12 flex justify-center items-center">
<div>
<h1 className=" text-4xl-semi mb-4 drop-shadow-md shadow-black  md:text-5xl  text-gray-900 w-7/12">About Us</h1>
<p className=" md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600">Micmar is a chain of hardware shops in Zambia. We offer a variety of quality product ranges for contractors and homeowners, available at highly competitive prices so you can build with the best. We cater to contractors and professional tradesmen as well as people looking to improve their home and DIY projects. We offer the confidence of quality or product and consistency in service through a passionate and never-ending strive towards satisfying our customers’ needs better than anyone else in Zambia.</p>
</div>
</div>
<div className="lg:w-8/12 mt-6 md:mt-8 lg:mt-0">
<div className="relative w-full h-screen">
<img src="/about.jpg" alt="A lounge sofa" className="w-full h-full relative hidden lg:block" />
<img src="https://i.ibb.co/Mhgkt2f/pexels-maksim-goncharenok-4352247-1-1-1.png" alt="A lounge sofa" className="w-full h-full lg:hidden" />
<div className="hidden lg:block absolute bottom-0 right-0 bg-red-200 w-1/2">
{/* <button className="dark:hover:bg-gray-800 dark:bg-white dark:hover:text-gray-50 dark:text-gray-800 bg-gray-800 text-xl xl:text-2xl font-medium text-white flex justify-between w-full items-center p-5 xl:p-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
Discover More
<div>
<svg className="fill-stroke dark:hover:text-gray-600" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66663 16H25.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
<path d="M20 21.3333L25.3333 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
<path d="M20 10.667L25.3333 16.0003" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>
</div>
</button> */}
</div>
</div>
<div className="mt-6 md:mt-8 lg:hidden">
{/* <button className="dark:hover:bg-gray-800 dark:bg-white dark:hover:text-gray-50 dark:text-gray-800 bg-gray-800 text-base md:text-xl font-semibold leading-tight text-white flex justify-between items-center px-5 py-4 lg:py-7 lg:px-7 w-full md:w-5/12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
Discover More
<div>
<svg className="fill-stroke" width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0)">
<path d="M0.453735 12H14.4537" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
<path d="M10.4539 16L14.4539 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
<path d="M10.4539 8L14.4539 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</g>
<defs>
<clipPath id="clip0">
<rect width="21.7269" height="24" fill="white" />
</clipPath>
</defs>
</svg>
</div>
</button> */}
</div>
</div>
</div>
</div>
</div>
);
};

export default Header;