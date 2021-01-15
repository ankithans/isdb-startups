import React from "react";
import Navbar from "../../components/Navbar";

export default function create() {
  return (
    <div>
      <Navbar />

      <div className='max-w-4xl mt-10 p-6 mx-auto bg-gray-50 dark:bg-gray-800 rounded-md shadow-md'>
        <h2 className='text-lg text-gray-700 dark:text-white font-semibold capitalize'>
          Let's start your journey
        </h2>

        <form action='#' onSubmit={() => {}}>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4'>
            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                for='username'
              >
                Startup title
              </label>
              <input
                required
                id='title'
                type='text'
                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 dark:text-gray-200' for='founder'>
                Founder
              </label>
              <input
                required
                id='title'
                type='text'
                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                for='imageurl'
              >
                Image Url
              </label>
              <input
                required
                id='image'
                type='url'
                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                for='description'
              >
                Description
              </label>
              <input
                required
                id='description'
                type='text'
                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                for='workType'
              >
                Work Type
              </label>
              <input
                required
                id='workType'
                type='text'
                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                for='location'
              >
                Location
              </label>
              <input
                required
                id='location'
                type='text'
                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                for='contactmail'
              >
                Contact Mail
              </label>
              <input
                required
                id='contactmail'
                type='email'
                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>
          </div>

          <div className='flex justify-end mt-6'>
            <button className='bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Create Startup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
