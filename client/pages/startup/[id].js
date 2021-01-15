import {} from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import startups from "../../data/startups.json";
import Reviews from "../../components/ReviewCard";
import ReviewCard from "../../components/ReviewCard";
import Rating from "react-rating";

export async function getServerSideProps(context) {
  let data = [];
  data = startups;
  console.log(data);
  return {
    props: {
      data,
    },
  };
}

export default function startup({ data }) {
  const router = useRouter();
  const { id } = router.query;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Navbar
        createStartup={() => {
          router.push("/startup/create");
        }}
      />
      <section className='text-gray-600 body-font overflow-hidden'>
        <div className='container px-5 pt-24 mx-auto'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap'>
            <img
              alt='ecommerce'
              className='lg:w-2/6 w-full lg:h-auto h-64 object-cover object-center rounded'
              src={data[id - 1].image}
            />
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h2 className='text-sm title-font text-gray-500 tracking-widest'>
                {data[id - 1].title}
              </h2>
              <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
                {data[id - 1].title}
              </h1>
              <div className='flex mb-4'>
                <span className='flex items-center'>
                  <Rating initialRating='4' readonly />
                  <span className='text-gray-600 ml-3'>4 Reviews</span>
                </span>
                <span className='flex ml-3 pl-3 py-2 borderL-2 border-gray-200 space-x-2s'>
                  <a className='text-gray-500'>
                    <svg
                      fill='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-5 h-5'
                      viewBox='0 0 24 24'
                    >
                      <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                    </svg>
                  </a>
                  <a className='text-gray-500'>
                    <svg
                      fill='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-5 h-5'
                      viewBox='0 0 24 24'
                    >
                      <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                    </svg>
                  </a>
                  <a className='text-gray-500'>
                    <svg
                      fill='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-5 h-5'
                      viewBox='0 0 24 24'
                    >
                      <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className='leading-relaxed'>{data[id - 1].description}</p>

              <div className='md:flex mt-4'>
                <span className='title-font font-medium text-2xl text-gray-900'>
                  $58.00B
                </span>
                <div className='flex mt-4 md:mt-0 md:flex-auto'>
                  <button className='flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'>
                    Invest on {data[id - 1].title}
                  </button>
                  <button
                    onClick={onOpen}
                    className='flex ml-3 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'
                  >
                    Give Rating
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Review</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>What do you think about this startup?</FormLabel>
              <Input placeholder='Your Views' />
            </FormControl>

            <FormLabel className='pt-5'>
              How much you will rate this startup?
            </FormLabel>
            <Rating />
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='blue'>Submit Rating</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <h1 className='text-3xl font-medium title-font text-gray-900 mb-12 text-center'>
            Reviews
          </h1>
          <div className='flex flex-wrap -m-4'>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
      </section>
    </div>
  );
}
