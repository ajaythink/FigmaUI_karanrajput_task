"use client";
import React from "react";
import Image from "next/image";
import PageOne from "./page1";
import SecondPage from "./page2";
import ThirdPage from "./page3";
import FourthPage from "./page4";
import FivthPage from "./page5";
import SixthPage from "./page6";
function page() {
  return (
    <>
      <PageOne />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FivthPage />
      <SixthPage />
    </>
  );
}

export default page;

//<Image className="origin-center rotate-45" src="/img/mountains.jpg" />origin-center
