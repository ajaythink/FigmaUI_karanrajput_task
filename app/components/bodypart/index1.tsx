import Image from "next/image";
import React from "react";

const PageOne= () =>{
  return (
    <div className="">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-12 relative overflow-hidden">
        <div className="h-screen max-w-4xl left-0 text-center md:w-1/2 md:text-left z-10 flex flex-col justify-center gap-5">
          <div className="text-gray-800 font-bold text-4xl ">
            Lorem ipsum dolor sit amet consectetur.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            perspiciatis distinctio alias error velit ab fugiat quasi
            perferendis. Hic neque deleniti repellat? Debitis, optio quam. Ad
            odio expedita nulla totam recusandae quo omnis.
          </div>
          <div>
            <input type="text" className="p-2 border border-gray-400 rounded-lg" />{" "}
            <button className="p-2 bg-blue-600 rounded-lg text-white font-bold">
              Submit {"  "} &#10143;
            </button>
          </div>
          <div>
            {" "}
            <span className="bg-blue-600 text-white rounded-full p-1 w-[5px] h-[5px]">
              &#10004;
            </span>{" "}
            No credit card required!
          </div>
        </div>
        <div className="absolute w-full top-0 right-0 h-screen md:w-1/2 clip-diagonal z-0">
          <Image
            className="w-full h-full object-cover"
            src="/bikephoto.png"
            alt="mountains bike"
            width={500}
            height={500}
          />
        </div>
      </div>

      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
      `}</style>
    </div>
  )
}

export default PageOne;