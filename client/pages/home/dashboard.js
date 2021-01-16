import { useEffect, useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import StartupCard from "../../components/StartupCard";
import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";
import axios from "axios";

export default function Dashboard() {
  const { addToast } = useToasts();
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getStartups = async () => {
    try {
      const response = await axios.get(
        "https://isdb-startup.herokuapp.com/startup"
      );

      addToast(`Startups Loaded successfully!`, {
        appearance: "success",
        autoDismiss: true,
      });

      setData(response.data);
      setLoading(false);
      console.log(response.data);
    } catch (err) {
      addToast("Server Error!", {
        appearance: "error",
        autoDismiss: true,
      });
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    getStartups();
    console.log(data);
  }, []);

  return (
    <div>
      <Navbar
        createStartup={() => {
          router.push("/startup/create");
        }}
      />

      <DashboardHeader />

      <div className='content-center container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          {data.map((startup) => (
            <button
              key={startup._id}
              className='hover:bg-gray-50 p-0 m-0'
              onClick={() => {
                router.push(`/startup/${startup._id}`);
              }}
            >
              <StartupCard
                key={startup._id}
                image={startup.image}
                title={startup.title}
                description={startup.description}
                workType={startup.workType}
                location={startup.location}
                contactmail={startup.contactmail}
              />
            </button>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
