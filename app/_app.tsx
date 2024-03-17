import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { initializeFirebaseApp } from "./lib/firebase/firebase";
import { AuthProvider } from "./feature/auth/provider/AuthProvider";

initializeFirebaseApp();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
