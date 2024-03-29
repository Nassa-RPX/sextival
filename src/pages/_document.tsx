import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="min-h-screen max-w-screen bg-sex-blue-0 font-main text-2022-sex-blue overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
