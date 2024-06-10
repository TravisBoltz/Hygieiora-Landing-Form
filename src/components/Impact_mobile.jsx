import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img13 from "../assets/program/13.jpg";
import img9 from "../assets/program/9.jpg";
import img10 from "../assets/program/10.jpg";
import img11 from "../assets/program/11.jpg";
import { useMediaQuery } from 'react-responsive';

const Impact = () => {
  const images = [img13, img9, img10, img11];
  const [step, setStep] = useState(0);
  const [shuffledImages, setShuffledImages] = useState(images);

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

  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      setShuffledImages((prevImages) => {
        const newImages = [...prevImages];
        for (let i = newImages.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newImages[i], newImages[j]] = [newImages[j], newImages[i]];
        }
        return newImages;
      });
    }, 4000); // Change image positions every 4 seconds
    return () => clearInterval(shuffleInterval);
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 767 }); // Adjust max width according to your definition of mobile

  if (!isMobile) return null; // Render nothing if not on a mobile device

  return (
    <div className="min-h-screen flex flex-col justify-center px-5">
      <div className="flex flex-col items-center">
        <div>
          <h1 className="text-backgroundColor text-4xl font-semibold text-center lg:text-start">
            Hycares Volunteers
          </h1>
          <div className="mt-10 grid grid-cols-2 grid-rows-2 gap-4">
            <AnimatePresence>
              {shuffledImages.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`Volunteer activity ${index + 1}`}
                  className="rounded-lg w-full h-full object-cover"
                  layout
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              ))}
            </AnimatePresence>
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
