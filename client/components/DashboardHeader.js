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
            Entrepreneurs and Investors face lot of dilemma before starting a
            startup. As we all know that starting a venture is not an easy task,
            there are lot of challenges associated with it. To help our
            investors to overcome this dilemma we have designed this website. We
            have used various ml model so that they can know beforehand whether
            the startup they are starting would be beneficial for them or not.
          </p>
        </div>
      </div>
    </div>
  );
}
