// src/pages/_app.tsx
import type { AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Header } from "@sextival/components/header";

const App: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <AnimatePresence mode="wait">
      <main className="min-h-screen max-w-screen flex flex-col w-[90%] lg:w-3/4 mx-auto">
        <Header />

        <Component {...pageProps} />
      </main>
    </AnimatePresence>
  );
};

export default App;
