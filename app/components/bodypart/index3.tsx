import Image from "next/image";

const ThirdPage = () => {
  return (
    <>
      {/* <h1>this is Thired Page.</h1> */}

      <div className="pl-14 pt-14 flex w-full justify-between items-center">
        <div className="w-full flex flex-col gap-5 pr-20 md:w-1/2">
          <div className="text-sky-700 font-bold">
            Lorem ipsum dolor sit amet
          </div>
          <div className="text-3xl text-gray-800 font-bold ">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.
          </div>
          <div className="text-gray-800 text-sm ">
            Lorem ipsum dolor sit amet consectetur, Mauris ullamcorper etiam leo
            eleifend condimentum in vitae faucibus. Amet massa malesuada sit
            pretium. Donec pharetra erat lacus suspendisse ornare.
          </div>
          <div>
            <div className="flex gap-3 ">
              <div className="pt-1">
                <Image
                  src="/subtitleicon.png"
                  alt="subtitle icon"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <div className="font-bold">
                  Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi
                  egestas.
                </div>
                <p className="text-gray-800 text-sm pt-2">
                  Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu
                  eu non viverra. Risus quam mattis senectus vitae interdum odio
                  ornare gravida vestibulum. Donec turpis nulla felis mauris eu
                  donec. Ipsum sit ut tortor.
                </p>
              </div>
            </div>
            <div className="flex gap-3 pt-3 ">
              <div className="pt-1">
                <Image
                  src="/subtitleicon.png"
                  alt="subtitle icon"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <div className="font-bold">
                  Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi
                  egestas.
                </div>
                <p className="text-gray-800 text-sm pt-2">
                  Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu
                  eu non viverra. Risus quam mattis senectus vitae interdum odio
                  ornare gravida vestibulum. Donec turpis nulla felis mauris eu
                  donec. Ipsum sit ut tortor.
                </p>
              </div>
            </div>
            <div className="flex gap-3 pt-3">
              <div className="pt-1">
                <Image
                  src="/subtitleicon.png"
                  alt="subtitle icon"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <div className="font-bold">
                  Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi
                  egestas.
                </div>
                <p className="text-gray-800 text-sm pt-2">
                  Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu
                  eu non viverra. Risus quam mattis senectus vitae interdum odio
                  ornare gravida vestibulum. Donec turpis nulla felis mauris eu
                  donec. Ipsum sit ut tortor.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:w-1/2  right-0">
          <Image
            src="/takingtoman.png"
            alt="image"
            className="right-0"
            width={500}
            height={500}
          />
        </div>
      </div>
        <div className="bg-gradient-to-bl from-green-700 to-red-700 h-4 w-full ml-14"></div>
    </>
  );
};

export default ThirdPage;
