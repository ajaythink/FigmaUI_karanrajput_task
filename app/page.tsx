import Image from "next/image";
import Navbar from "@/app/components/Navbar/page";
import BodyPart from "@/app/components/BodyPart/page";
// import Uipart from "@/app/components/Uipart/page";

export default function Home() {
  return (
    <main className="   ">
      <Navbar />
      <BodyPart />
      {/* <Uipart /> */}
      <h1 className="">testing is okeg or not.</h1>
    </main>
  );
}
