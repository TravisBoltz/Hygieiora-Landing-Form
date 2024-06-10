import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img13 from "../assets/program/13.jpg";
import img9 from "../assets/program/9.jpg";
import img10 from "../assets/program/10.jpg";
import img11 from "../assets/program/11.jpg";

const Impact = () => {
  const images = [img13, img9, img10, img11];
  const [step, setStep] = useState(0);

  const steps = [
    "Who we are?",
    "What we stand for?",
    "How you can get involved?",
  ];

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setStep((prevStep) => (prevStep + 1) % steps.length);
    }, 2000); // Change step every 2 seconds
    return () => clearInterval(stepInterval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center  px-5">
      <div className="flex flex-col items-center">
        <div>
          <h1 className="text-backgroundColor text-4xl font-semibold text-center lg:text-start">
            Hycares Volunteers
          </h1>
          <div className="mt-10 flex justify-center items-center relative">
            <div>
              {images.map((image, index) => {
                const angle = (360 / images.length) * index;
                const radius = 300; // Radius of the circle
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);
                return (
                  <img
                    key={index}
                    src={image}
                    alt={`Volunteer activity ${index + 1}`}
                    className="absolute rounded-full"
                    style={{
                      left: `calc(50% + ${x}px - 120px)`,
                      top: `calc(50% + ${y}px - 80px)`,
                      width: "250px",
                      height: "250px",
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className="mt-4 text-xl text-center flex flex-col justify-center items-center px-4">
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
