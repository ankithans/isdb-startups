import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Loader from "react-loader-spinner";
import Footer from "../../components/Footer";

export const SuccessPredictor = () => {
  const [company_age, UpdateCompany_age] = useState(null);
  const [founder_Exp, UpdateFounder_Exp] = useState(null);
  const [founder_age, UpdateFounder_age] = useState(null);
  const [founder_school, UpdateFounder_school] = useState(null);
  const [funding, updateFunding] = useState(null);
  const [result, updateResult] = useState(null);
  const [loading, isLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("company_age", company_age);
    formdata.append("founder_Exp", founder_Exp);
    formdata.append("founder_age", founder_age);
    formdata.append("founder_school", founder_school);
    formdata.append("funding", funding);
    await axios
      .post("http://127.0.0.1:5000/success", formdata)
      .then((res) => updateResult(res.data.predict))
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
                company age
              </label>
              <input
                required
                id='title'
                type='text'
                value={company_age}
                onChange={(e) => UpdateCompany_age(e.target.value)}
                placeholder='Enter company age'
                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='founder'
              >
                founder Exp
              </label>
              <input
                required
                id='title'
                type='text'
                value={founder_Exp}
                onChange={(e) => UpdateFounder_Exp(e.target.value)}
                placeholder='Enter founder Exp'
                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='imageurl'
              >
                founder age
              </label>
              <input
                required
                id='image'
                type='text'
                value={founder_age}
                onChange={(e) => UpdateFounder_age(e.target.value)}
                placeholder='Enter founder age'
                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='description'
              >
                founder school
              </label>
              <input
                required
                id='description'
                type='text'
                value={founder_school}
                onChange={(e) => UpdateFounder_school(e.target.value)}
                placeholder='Enter founder school'
                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='workType'
              >
                funding
              </label>
              <input
                required
                id='workType'
                type='text'
                value={funding}
                onChange={(e) => updateFunding(e.target.value)}
                placeholder='Enter funding amount'
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
            {result == 1 ?
              <p className='text-green-500 font-bold'>
                May succeed  -
              </p> :
              <p className='text-red-500 font-bold'>
                Try to Increase Funding  -
              </p>
            }
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};
export default SuccessPredictor;
