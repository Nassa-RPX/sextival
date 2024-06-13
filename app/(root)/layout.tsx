import "@sextival/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import { PropsWithChildren } from "react";

import { RootProvider } from "@sextival/providers";
import { Header } from "@sextival/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sextival",
  description: "Sextival - il festival dell'educazione e della salute sessuale",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "min-h-screen max-w-screen font-main text-2022-sex-blue overflow-x-hidden bg-brand-lilac bg-opacity-80",
        )}
      >
        <RootProvider>
          <main className="min-h-screen max-w-screen flex flex-col w-[90%] lg:w-3/4 mx-auto ">
            <Header type="root" />
            {children}
          </main>
        </RootProvider>
      </body>
    </html>
  );
}
