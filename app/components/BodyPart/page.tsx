"use client";
import React from "react";
import Image from "next/image";
import PageOne from "./page1";
import SecondPage from "./page2";
function page() {
  return (
    <>
      <PageOne />
      <SecondPage />
    </>
  );
}

export default page;

//<Image className="origin-center rotate-45" src="/img/mountains.jpg" />origin-center
