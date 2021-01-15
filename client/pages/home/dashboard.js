import Link from "next/link";
import { useEffect, useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import StartupCard from "../../components/StartupCard";
import { useRouter } from "next/router";

import startups from "../../data/startups.json";

export async function getStaticProps(context) {
  return {
    props: {},
  };
}

export default function Dashboard() {
  const router = useRouter();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(startups);
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
              className='hover:bg-gray-50 p-0 m-0'
              onClick={() => {
                router.push(`/startup/${startup.id}`);
              }}
            >
              <StartupCard
                key={startup.id}
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
