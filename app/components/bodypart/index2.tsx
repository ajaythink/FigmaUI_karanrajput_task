import Image from "next/image";
const SecondPage = () => {
  return (
    <>
      {/* <h1 className="text-4xl font-bold text-center">Second Page</h1> */}
      <div className="pl-14 ">
        <div className="border shadow-2xl ">
          <div className="p-10 flex">
            <div className="flex flex-col gap-5 p-5 ">
              <div className="text-sky-700 font-bold">
                Lorem ipsum dolor sit
              </div>
              <div className="text-3xl text-gray-800 font-bold ">
                LOREM IPSUM DOLOR SIT AMET
              </div>
              <div className="text-gray-800 text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis minima illo harum distinctio aspernatur aperiam?
                Expedita, soluta molestiae. Commodi modi officia tempora maiores
                iste expedita porro ex repudiandae id quia.
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3 text-sm text-gray-800">
                  <Image
                    src="/singleman.png"
                    alt="single man"
                    width={100}
                    height={100}
                  />
                  <p className="p-5 ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus, voluptatem?
                  </p>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-800">
                  <Image
                    src="/handshack.png"
                    alt="single man"
                    width={100}
                    height={100}
                  />
                  <p className="p-5 ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus, voluptatem?
                  </p>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-800">
                  <Image
                    src="/grouphandshack.png"
                    alt="single man"
                    width={100}
                    height={100}
                  />
                  <p className="p-5 ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus, voluptatem?
                  </p>
                </div>
              </div>
              <div>
                <button className="p-2 bg-blue-800 rounded-lg text-white  ">
                  Lorem ipsum &#10143;
                </button>{" "}
                <span className="text-blue-800 p-2">
                  {" "}
                  <span className="text-2xl font-bold">
                    &#9990;
                  </span> 9876543210{" "}
                </span>
              </div>
            </div>
            <div className="w-full ">
              <Image
                src="/bikesecondphoto.png"
                alt="photo"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className=" bg-gradient-to-b from-green-800 to-red-900 w-full h-3 flex-none"></div>
        </div>
      </div>
    </>
  );
};
export default SecondPage;
