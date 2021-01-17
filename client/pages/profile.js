import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import InvestmentCard from "../components/InvestmentCard";
import StartupCard from "../components/StartupCard";
import Footer from "../components/Footer";

export default function profile() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});

  const getUser = async () => {
    try {
      const response = await axios.get(
        `https://isdb-startup.herokuapp.com/user/dashboard/${localStorage.getItem(
          "id"
        )}`
      );

      setProfile(response.data);
      setLoading(false);

      console.log(response.data);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loading) return <div>loading...</div>;
  else
    return (
      <div>
        <Navbar />

        <div className='bg-white mt-12 mv-4 pb-1 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto'>
          <div className='relative h-40'>
            <img
              className='absolute h-full w-full object-cover'
              src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
            />
          </div>
          <div className='relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4'>
            <img
              className='object-cover w-full h-full'
              src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            />
          </div>
          <div className='mt-16'>
            <h1 className='text-lg text-center font-semibold'>
              {profile.username}
            </h1>
            <p className='text-sm text-gray-600 text-center'>
              {profile.userid}
            </p>
          </div>
        </div>

        <section className='text-gray-600 body-font'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='flex w-full mb-10 flex-wrap'>
              <h1 className='text-blue-600 sm:text-3xl text-2xl font-medium title-font lg:w-1/3 lg:mb-0 mb-4'>
                User Investments
              </h1>
            </div>
            <div className='flex flex-wrap -mx-4 -my-8'>
              {profile.investment.map((i) => (
                <div key={i._id} className='py-8 px-4 lg:w-1/3'>
                  <div className='h-full flex items-start'>
                    <div className='w-12 flex-shrink-0 flex flex-col text-center leading-none'>
                      <span className='text-gray-500 pb-2 mb-2 border-b-2 border-gray-200'>
                        JAN
                      </span>
                      <span className='font-medium text-lg text-gray-800 title-font leading-none'>
                        ${i.investMoney}
                      </span>
                    </div>
                    <div className='flex-grow pl-6'>
                      <h2 className='tracking-widest text-xs title-font font-medium text-indigo-500 mb-1'>
                        CATEGORY
                      </h2>
                      <h1 className='title-font text-xl font-medium text-gray-900 mb-3'>
                        {i.startupID}
                      </h1>
                      <p className='leading-relaxed mb-5'>
                        Payment Id - {i.PaymentID}
                      </p>
                      <a className='inline-flex items-center'>
                        <img
                          alt='blog'
                          src='https://dummyimage.com/103x103'
                          className='w-8 h-8 rounded-full flex-shrink-0 object-cover object-center'
                        />
                        <span className='flex-grow flex flex-col pl-3'>
                          <span className='title-font font-medium text-gray-900'>
                            type - {i.typeOfInvestment}
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className='pl-20 flex w-full mb-5 mt-10 flex-wrap'>
          <h1 className='text-blue-600 sm:text-3xl text-2xl font-medium title-font lg:w-1/3 lg:mb-0 mb-4'>
            User Startups
          </h1>
        </div>
        <div className='content-center container px-5 pb-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            {profile.startup.map((s) => (
              <StartupCard
                key={s._id}
                image={s.image}
                title={s.title}
                description={s.description}
                workType={s.workType}
                location={s.location}
                contactmail={s.contactmail}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
}
