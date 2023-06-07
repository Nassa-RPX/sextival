// src/pages/_app.tsx
import type { AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import RoutingProgress from "nextjs-progressbar";

import { AnimatePresence } from "framer-motion";

import { Header } from "@sextival/components/header";

const App: AppType = ({ Component, pageProps: { _, ...pageProps } }) => {
  
  return (
    <AnimatePresence mode="wait">
      <RoutingProgress />
      <main className="min-h-screen max-w-screen flex flex-col w-[90%] lg:w-3/4 mx-auto">
        <Header />

        <Component {...pageProps} />
      </main>
    </AnimatePresence>
  );
};

export default App;
