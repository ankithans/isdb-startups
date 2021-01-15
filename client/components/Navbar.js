import { useToast, Box } from "@chakra-ui/react";
import React from "react";

export default function Navbar({ createStartup }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const toast = useToast();

  return (
    <>
      <header className='text-gray-600 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
              viewBox='0 0 24 24'
            >
              <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
            </svg>
            <span className='ml-3 text-xl'>IMDB Startups</span>
          </a>
          <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
            <a className='mr-5 hover:text-gray-900'>First Link</a>
            <a className='mr-5 hover:text-gray-900'>Second Link</a>
            <a className='mr-5 hover:text-gray-900'>Third Link</a>
          </nav>
          <button
            onClick={
              createStartup
              // toast({
              //   position: "bottom-left",
              //   render: () => (
              //     <Box color='white' p={3} bg='blue.500'>
              //       Hello World
              //     </Box>
              //   ),
              // })
            }
            className='inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-indigo-400 rounded text-base mt-4 md:mt-0'
          >
            Create Startup
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-4 h-4 ml-1'
              viewBox='0 0 24 24'
            >
              <path d='M5 12h14M12 5l7 7-7 7'></path>
            </svg>
          </button>
        </div>
        <hr />
      </header>
    </>
  );
}
