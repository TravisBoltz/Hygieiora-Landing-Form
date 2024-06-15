import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img13 from "../assets/program/13.jpg";
import img9 from "../assets/program/9.jpg";
import img10 from "../assets/program/10.jpg";
import img11 from "../assets/program/11.jpg";
import { useMediaQuery } from "react-responsive";

const Impact = () => {
  const images = [img13, img9, img10, img11];
  const [step, setStep] = useState(0);

  const steps = ["How it all started?", "Who we are?", "Meet the team"];

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setStep((prevStep) => (prevStep + 1) % steps.length);
    }, 2000); // Change step every 2 seconds
    return () => clearInterval(stepInterval);
  }, []);

  const isDesktop = useMediaQuery({ minWidth: 768 }); // Adjust min width according to your definition of desktop

  if (!isDesktop) return null; // Render nothing if not on a desktop device

  return (
    <div className="min-h-screen flex flex-col justify-center px-5">
      <div className="flex flex-col items-center">
        <div className="">
          <h1 className="text-backgroundColor  flex mt-20 text-4xl font-semibold text-center lg:text-start">
          Meet the <br/>Volunteering <br/>Team
          </h1>
          <div className="mt-10 flex justify-center items-center relative">
            <div>
              {images.map((image, index) => {
                const angle = (360 / images.length) * index;
                const radius = 300; // Radius of the circle
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);
                return (
                  <motion.img
                    key={index}
                    src={image}
                    alt={`Volunteer activity ${index + 1}`}
                    className="absolute rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }} // Zoom effect on hover
                    transition={{ duration: 0.2 }} // Transition duration for zoom effect
                    style={{
                      left: `calc(50% + ${x}px - 100px)`,
                      top: `calc(50% + ${y}px - 180px)`,
                      width: "230px",
                      height: "220px",
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className="mt-4 mb-20 text-xl text-center flex flex-col justify-center items-center px-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1 }}
              >
                {steps[step]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
