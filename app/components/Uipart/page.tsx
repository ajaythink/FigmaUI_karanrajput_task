"use client";

import Image from "next/image";
// export default function MotorbikeHeroUI() {
 function MotorbikeHeroUI() {
  return (
    <div className="min-h-screen w-full bg-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4">
        <div className="text-xl font-bold bg-gray-200 px-3 py-1 rounded">
          LOGO
        </div>
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="text-blue-600 hover:underline">
            Lorem Ipsum ▾
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            Lorem Ipsum ▾
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            Lorem Ipsum ▾
          </a>
        </nav>
        <button className="bg-black text-white px-4 py-2 rounded">
          Sign In
        </button>
      </header>

      {/* Main Section */}
      <main className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-12 relative overflow-hidden">
        {/* Left Side */}
        <div className="w-full md:w-1/2 z-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis
            elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea
            morbi libero imperdiet neque. Justo suspendisse tristique posuere
            quis eget viverra. Nunc euismod ultrices etiam nulla habitasse.
          </p>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded w-full max-w-xs"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit →
            </button>
          </form>
          <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
            <span className="text-blue-600 text-lg">✔</span> No credit card
            required!
          </div>
        </div>

        {/* Right Side Background Image with Diagonal Cut */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full clip-diagonal z-0">
          <Image
            src="/bikephoto.png"
            alt="Motorbike riders"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
        </div>
      </main>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-12 relative overflow-hidden">
        <div className="w-full md:w-1/2 z-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis
            elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea
            morbi libero imperdiet neque. Justo suspendisse tristique posuere
            quis eget viverra. Nunc euismod ultrices etiam nulla habitasse.
          </p>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded w-full max-w-xs"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit →
            </button>
          </form>
          <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
            <span className="text-blue-600 text-lg">✔</span> No credit card
            required!
          </div>
        </div>
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full clip-diagonal z-0">
          <Image
          src="/bikephoto.png"
          alt="Motorbike riders"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
        </div>
        
      </div>

      {/* Custom Clip-path style */}
      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
      `}</style>
    </div>
  );
}
