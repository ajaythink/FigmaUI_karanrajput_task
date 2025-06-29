import Image from "next/image";
import Navbar from "@/app/components/navbar/page.tsx";
import BodyPart from "@/app/components/bodypart/page.tsx";
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
