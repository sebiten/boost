import React from "react";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div
            className="
              max-w-6xl mx-auto
              "
          >
            <div className="relative h-80 w-full overflow-hidden rounded-lg">
              <Image
                src="/logo.png"
                width={100}
                height={50}
                alt="About Us"
                className="transition duration-500 ease-in-out transform hover:scale-105 w-full"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 pl-0 md:pl-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              About Us
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Welcome to our website! We are a team of passionate individuals
              who are dedicated to creating innovative and cutting-edge
              solutions for our clients. With over 10 years of experience in the
              industry, we have built a reputation for delivering high-quality
              results that exceed our clients expectations.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our mission is to help businesses grow and thrive in the digital
              world. We offer a wide range of services, including web design,
              web development, digital marketing, and branding. Our team of
              experts uses the latest technologies and industry best practices
              to create unique and impactful solutions that drive results.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Contact us today to learn more about how we can help your business
              succeed online!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
