import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Loader from "react-loader-spinner";
import Footer from "../../components/Footer";

export const ProfitPredictor = () => {
  const [NewYork, update1] = useState(null);
  const [California, update2] = useState(null);
  const [Florida, update3] = useState(null);
  const [RnDSpend, update4] = useState(null);
  const [AdminSpend, update5] = useState(null);
  const [MarketSpend, update6] = useState(null);
  const [result, updateResult] = useState(null);
  const [loading, isLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("NewYork", parseInt(NewYork));
    formdata.append("California", parseInt(California));
    formdata.append("Florida", parseInt(Florida));
    formdata.append("RnDSpend", parseInt(RnDSpend));
    formdata.append("AdminSpend", parseInt(AdminSpend));
    formdata.append("MarketSpend", parseInt(MarketSpend));
    console.log(formdata, "hello");
    await axios
      .post("http://127.0.0.1:5000/profit", formdata)
      .then((res) => updateResult(res.data.prediction))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />

      <div className='max-w-4xl mt-10 mb-32 p-6 mx-auto bg-gray-50 dark:bg-gray-800 rounded-md shadow-md'>
        <h2 className='text-lg text-gray-700 dark:text-white font-semibold capitalize'>
          Predic startup success
        </h2>

        <form onSubmit={submit}>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4'>
            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='username'
              >
                Enter 1 if NewYork or 0
              </label>
              <input
                required
                id='title'
                type='number'
                value={NewYork}
                onChange={(e) => update1(e.target.value)}
                placeholder='Enter 1 if NewYork or 0'
                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='founder'
              >
                Enter 1 or 0 for California
              </label>
              <input
                required
                id='title'
                type='number'
                value={California}
                onChange={(e) => update2(e.target.value)}
                placeholder='Enter 1 or 0 for California'
                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='imageurl'
              >
                Enter 1 or 0 for Florida
              </label>
              <input
                required
                id='image'
                type='number'
                value={Florida}
                onChange={(e) => update3(e.target.value)}
                placeholder='Enter 1 or 0 for Florida'
                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='description'
              >
                RnDSpend funding
              </label>
              <input
                required
                id='description'
                type='number'
                value={RnDSpend}
                onChange={(e) => update4(e.target.value)}
                placeholder='RnDSpend funding'
                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='workType'
              >
                Enter AdminSpend Amount
              </label>
              <input
                required
                id='workType'
                type='number'
                value={AdminSpend}
                onChange={(e) => update5(e.target.value)}
                placeholder='Enter AdminSpend Amount'
                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='workType'
              >
                Enter MarketSpend Amount
              </label>
              <input
                required
                id='workType'
                type='number'
                value={MarketSpend}
                onChange={(e) => update6(e.target.value)}
                placeholder='Enter MarketSpend Amount'
                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>
          </div>

          <div className='flex justify-end mt-6'>
            {loading ? (
              <Loader
                className='w-full flex justify-center'
                type='Oval'
                color='#00BFFF'
                height={40}
                width={40}
                timeout={3000}
              />
            ) : (
              <button
                type='submit'
                className='bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
              >
                Predict
              </button>
            )}
          </div>
          <div className='text-center pb-10'>
            <p className='text-red-500 font-bold'>
              Estimated profit - {result}
            </p>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};
export default ProfitPredictor;
