import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Loader from "react-loader-spinner";
import Footer from "../../components/Footer";

export const LoanPredictor = () => {
    const [monthlyincome, updateMonthlyIncome] = useState(null);
    const [numberofopencreditlinesandloans, update2] = useState(null);
    const [numberoftimes90dayslate, update3] = useState(null);
    const [numberrealestateloansorlines, update4] = useState(null);
    const [numberoftime6089dayspastduenotworse, update5] = useState(null);
    const [numberofdependents, update6] = useState(null);
    const [debtratio, update7] = useState(null);
    const [numberoftime3059dayspastduenotworse, update8] = useState(null);
    const [age, update9] = useState(null);
    const [result, updateResult] = useState(null);
    const [revolvingutilizationofunsecuredlines, update10] = useState(null);

    const [loading, isLoading] = useState(false);

    const loan = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append(
            "revolvingutilizationofunsecuredlines",
            parseInt(revolvingutilizationofunsecuredlines)
        );
        formdata.append("age", parseInt(age));
        formdata.append(
            "numberoftime3059dayspastduenotworse",
            parseInt(numberoftime3059dayspastduenotworse)
        );
        formdata.append("debtratio", parseInt(debtratio));
        formdata.append("monthlyincome", parseInt(monthlyincome));
        formdata.append(
            "numberofopencreditlinesandloans",
            parseInt(numberofopencreditlinesandloans)
        );
        formdata.append(
            "numberoftimes90dayslate",
            parseInt(numberoftimes90dayslate)
        );
        formdata.append(
            "numberrealestateloansorlines",
            parseInt(numberrealestateloansorlines)
        );
        formdata.append(
            "numberoftime6089dayspastduenotworse",
            parseInt(numberoftime6089dayspastduenotworse)
        );
        formdata.append("numberofdependents", parseInt(numberofdependents));
        await axios
            .post("http://127.0.0.1:5000/loan", formdata)
            .then((res) => updateResult(res.data.Prediction))
            .catch((err) => console.log(err));
    };
    return (
        <div>
            <Navbar />

            <div className='max-w-4xl mt-10 mb-10 p-6 mx-auto bg-gray-50 dark:bg-gray-800 rounded-md shadow-md'>
                <h2 className='text-lg text-gray-700 dark:text-white font-semibold capitalize'>
                    Predic your Loan
        </h2>

                <form onSubmit={loan}>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4'>
                        <div>
                            <label
                                className='text-gray-700 dark:text-gray-200'
                                htmlFor='username'
                            >
                                Monthly Income
              </label>
                            <input
                                required
                                id='title'
                                type='text'
                                value={monthlyincome}
                                onChange={(e) => updateMonthlyIncome(e.target.value)}
                                placeholder='Income'
                                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label
                                className='text-gray-700 dark:text-gray-200'
                                htmlFor='founder'
                            >
                                number of open credit lines and loans
              </label>
                            <input
                                required
                                id='title'
                                type='text'
                                value={numberofopencreditlinesandloans}
                                onChange={(e) => update2(e.target.value)}
                                placeholder='credit lines and loans'
                                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label
                                className='text-gray-700 dark:text-gray-200'
                                htmlFor='imageurl'
                            >
                                number of times 90 days late
              </label>
                            <input
                                required
                                id='image'
                                type='text'
                                value={numberoftimes90dayslate}
                                onChange={(e) => update3(e.target.value)}
                                placeholder='90 days late number of times'
                                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label
                                className='text-gray-700 dark:text-gray-200'
                                htmlFor='description'
                            >
                                number real estate loans or lines
              </label>
                            <input
                                required
                                id='description'
                                type='text'
                                value={numberrealestateloansorlines}
                                onChange={(e) => update4(e.target.value)}
                                placeholder='real state loan'
                                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label
                                className='text-gray-700 dark:text-gray-200'
                                htmlFor='workType'
                            >
                                number of time 6089 days past due not worse
              </label>
                            <input
                                required
                                id='workType'
                                type='text'
                                value={numberoftime6089dayspastduenotworse}
                                onChange={(e) => update5(e.target.value)}
                                placeholder='due not worse'
                                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label
                                className='text-gray-700 dark:text-gray-200'
                                htmlFor='location'
                            >
                                number of dependents
              </label>
                            <input
                                required
                                id='location'
                                type='text'
                                value={numberofdependents}
                                onChange={(e) => update6(e.target.value)}
                                placeholder='numberof dependents'
                                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label
                                className='text-gray-700 dark:text-gray-200'
                                htmlFor='contactmail'
                            >
                                debt ratio
              </label>
                            <input
                                required
                                id='contactmail'
                                type='text'
                                value={debtratio}
                                onChange={(e) => update7(e.target.value)}
                                placeholder='debt ratio'
                                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label
                                className='text-gray-700 dark:text-gray-200'
                                htmlFor='contactmail'
                            >
                                number of time 3059 days past due not worse
              </label>
                            <input
                                required
                                id='contactmail'
                                type='text'
                                value={numberoftime3059dayspastduenotworse}
                                onChange={(e) => update8(e.target.value)}
                                placeholder='3059 days worse'
                                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label
                                className='text-gray-700 dark:text-gray-200'
                                htmlFor='contactmail'
                            >
                                age
              </label>
                            <input
                                required
                                id='contactmail'
                                type='text'
                                value={age}
                                onChange={(e) => update9(e.target.value)}
                                placeholder='age'
                                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label
                                className='text-gray-700 dark:text-gray-200'
                                htmlFor='contactmail'
                            >
                                revolving utilization of unsecured lines
              </label>
                            <input
                                required
                                id='contactmail'
                                type='text'
                                value={revolvingutilizationofunsecuredlines}
                                onChange={(e) => update10(e.target.value)}
                                placeholder='fund secured lines'
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
                            Prediction- {result}
                        </p>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    );
};
export default LoanPredictor;
