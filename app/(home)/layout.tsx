import type { Metadata } from "next";
import clsx from "clsx";

import "@sextival/styles/globals.css";
import { PropsWithChildren } from "react";

import { RootProvider } from "@sextival/providers";
import { Header } from "@sextival/components/header";
import { Mont } from "@sextival/fonts/mont";

export const metadata: Metadata = {
  title: "Sextival",
  description: "Sextival - il festival dell'educazione e della salute sessuale",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={clsx(
          Mont.variable,
          "min-h-screen max-w-screen bg-sex-blue-0 text-2022-sex-blue overflow-x-hidden font-mont",
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
