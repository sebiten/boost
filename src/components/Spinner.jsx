import Image from "next/image";
import React from "react";

const Spinner = () => {
  return (
    <section className="fixed top-0 left-0 w-full h-full bg-black z-50">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="h-8 w-full text-white mb-4">
          <div className="h-full w-full flex items-center justify-center animate-bounce">
            <Image
              width={100}
              height={100}
              src="/boost.png"
              priority={true}
              alt="Boost logo"
              className="rounded-full"
            />

            <p className="text-xl font-bold uppercase">Digital solutions</p>
            <p className="text-xl font-bold uppercase">...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spinner;
