import { useState } from "react";
import Login from "./auth/login";
import Dashboard from "./home/dashboard";

export default function Home() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  if (isLoggedIn) {
    return <Dashboard />;
  } else {
    return <Login />;
  }
}
