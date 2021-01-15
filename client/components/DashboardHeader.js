import React from "react";

export default function DashboardHeader() {
  return (
    <div>
      <div className='container px-5 pt-24 mx-auto'>
        <div className='flex flex-wrap w-full '>
          <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
              Startups Registered on our Website
            </h1>
            <div className='h-1 w-20 bg-indigo-500 rounded'></div>
          </div>
          <p className='lg:w-1/2 w-full leading-relaxed text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            quisquam at illo, veniam odit quam nihil rem provident non. Hic
            dolores praesentium repudiandae soluta doloribus atque
            necessitatibus! Libero, ullam soluta!
          </p>
        </div>
      </div>
    </div>
  );
}
