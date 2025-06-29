import Image from "next/image";
const FivthPage = () => {
  return (
    <>
      {/* <h1>this is page fiveth.</h1> */}
      <div className="text-center flex flex-col justify-center items-center w-full h-screen pt-16">
        <h1 className="uppercase text-4xl font-bold w-[60%]">LOREM IPSUM DOLOR SIT AMET CONSECTETUR. COMMODO LEO AMET.</h1>
        <div className="mt-10 w-full flex flex-col justify-center items-center gap-10">
          <div className="flex flex-row gap-10"> 
            <Image src="/hero.png" alt="hero logo" width={150} height={150} />
            <Image src="/honda.png" alt="hero logo" width={150} height={150}/>
            <Image src="/bajaj.png" alt="hero logo" width={150} height={150} />
            <Image src="/tvs.png" alt="hero logo" width={150} height={150} />
          </div>
          <div className="flex flex-row gap-20 ">   
            <Image src="/royalEnfield.png" alt="hero logo" width={150} height={150} />
            <Image src="/yamaha.png" alt="hero logo" width={150} height={150} />
            <Image src="/ktm.png" alt="hero logo" width={200} height={100} /> 
            <Image src="/ather.jpg" alt="hero logo" width={150} height={150} />
          </div>
          <div className="flex flex-row gap-10  ">           
            <Image src="/ola.png" alt="hero logo" width={150} height={150} />
            <Image src="/revolt.png" alt="hero logo" width={150} height={150} />
            <Image src="/ultraviolette.jpg" alt="hero logo" width={150} height={150} />
            <Image src="/torkMotors.jpg" alt="hero logo" width={150} height={150} />
          </div>
        </div>
      </div>
    </>
  );
};
export default FivthPage;
