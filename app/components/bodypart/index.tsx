"use client";
import React from "react";
import Image from "next/image";
import PageOne from "./index1";
import SecondPage from "./index2";
import ThirdPage from "./index3";
import FourthPage from "./index4";
import FivthPage from "./index5";
import SixthPage from "./index6";
export default function Bodypart() {
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

// export default page;

//<Image className="origin-center rotate-45" src="/img/mountains.jpg" />origin-center
