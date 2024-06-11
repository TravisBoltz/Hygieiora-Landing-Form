/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLock } from "react-icons/fa"; // Import the icons you need
import img from "../assets/img/phones.png";
import TherapySection from "../components/therapy";
const features = [
  {
    icon: <FaLock className="text-white text-lg" />, // Replace with your actual icons
    title: "Hygieiora Inc",
    description:
      "Experience the future of therapy with Hygieiora - a unique space for individuals to connect with professional therapists and volunteers in fostering a supportive community dedicated to enhancing mental well-being ",
  },
  // ... Add other features/services here
];
const Story = () => {
  return (
    <>
      <div className="min-h-screen mt-16  flex flex-col justify-center   text-backgroundColor  bg-no-repeat bg-cover bg-center opacity-90">
        <section className="p-8 bg-blue-600 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
            {features.map((feature, index) => (
              <div key={index} className=" py-10 flex flex-col gap-2 md:ml-32">
                <h1 className="text-5xl font-bold leading-tight text-shadow">
                  <Typewriter
                    words={["The Story so far..."]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>
                <h2 className="text-4xl">
                  <span className="text-blue-900">It&apos;s okay</span> not{" "}
                  <br />
                  to be okay.
                </h2>
                <div className="flex mb-2">
                  {feature.icon}
                  <h3 className="text-xl -mt-2 ml-2">{feature.title}</h3>
                </div>
                <p className="mb-4">{feature.description}</p>
                {/* <button className="border border-white text-white rounded px-4 py-2">
              View more
            </button> */}
              </div>
            ))}
            <div className="md:col-span-1 flex justify-center">
              <img className="rounded-lg" src={img} alt="img" />
            </div>
          </div>
        </section>
      </div>
      <TherapySection />
    </>
  );
};

export default Story;
