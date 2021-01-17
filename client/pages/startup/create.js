import { useState } from "react";
import Navbar from "../../components/Navbar";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
import axios from "axios";
import Loader from "react-loader-spinner";
import Footer from "../../components/Footer";

export default function create() {
  const { addToast } = useToasts();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [founder, setFounder] = useState("");
  const [imageurl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [workType, setWorkType] = useState("");
  const [location, setLocation] = useState("");
  const [contactmail, setContactMail] = useState("");
  const [loading, setLoading] = useState("");

  const createStartup = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await axios.post(
        "http://isdb-startup.herokuapp.com/user/addstartup",
        {
          userid: localStorage.getItem("id"),
          image: imageurl,
          title: title,
          founder: founder,
          description: description,
          problemItSolves: "ed",
          workType: workType,
          location: location,
          contactmail: contactmail,
        }
      );
      console.log(response.data);

      addToast(`Startup added successfully`, {
        appearance: "success",
        autoDismiss: true,
      });

      setLoading(false);

      router.push("/");
    } catch (err) {
      addToast("Server Error!", {
        appearance: "error",
        autoDismiss: true,
      });
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />

      <div className='max-w-4xl mt-10  mb-32 p-6 mx-auto bg-gray-50 dark:bg-gray-800 rounded-md shadow-md'>
        <h2 className='text-lg text-gray-700 dark:text-white font-semibold capitalize'>
          Let's start your journey
        </h2>

        <form onSubmit={createStartup}>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4'>
            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='username'
              >
                Startup title
              </label>
              <input
                required
                id='title'
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='founder'
              >
                Founder
              </label>
              <input
                required
                id='title'
                type='text'
                value={founder}
                onChange={(e) => setFounder(e.target.value)}
                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='imageurl'
              >
                Image Url
              </label>
              <input
                required
                id='image'
                type='url'
                value={imageurl}
                onChange={(e) => setImageUrl(e.target.value)}
                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='description'
              >
                Description
              </label>
              <input
                required
                id='description'
                type='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='workType'
              >
                Work Type
              </label>
              <input
                required
                id='workType'
                type='text'
                value={workType}
                onChange={(e) => setWorkType(e.target.value)}
                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='location'
              >
                Location
              </label>
              <input
                required
                id='location'
                type='text'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className='mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-200'
                htmlFor='contactmail'
              >
                Contact Mail
              </label>
              <input
                required
                id='contactmail'
                type='email'
                value={contactmail}
                onChange={(e) => setContactMail(e.target.value)}
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
                Create Startup
              </button>
            )}
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
