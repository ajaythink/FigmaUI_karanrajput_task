  import Image from "next/image";
  import Navbar from "@/components/navbar";
  import BodyPart from "@/components/bodypart";
  // import Uipart from "@/app/components/Uipart/page";

  export default function Home() {
    return (
      <main>
        <Navbar />
        <BodyPart />
        {/* <Uipart /> */}
        {/* <h1 className="">testing is okeg or not.</h1> */}
      </main>
    );
  }
