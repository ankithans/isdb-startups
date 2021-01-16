import "tailwindcss/tailwind.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastProvider } from "react-toast-notifications";

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ToastProvider>
  );
}

export default MyApp;
