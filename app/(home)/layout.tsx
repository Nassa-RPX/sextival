import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";

import "@sextival/styles/globals.css";
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
          "min-h-screen max-w-screen bg-sex-blue-0 font-main text-2022-sex-blue overflow-x-hidden",
        )}
      >
        <RootProvider>
          <main className="min-h-screen max-w-screen flex flex-col mx-auto">
            <Header type="home" />
            {children}
          </main>
        </RootProvider>
      </body>
    </html>
  );
}
