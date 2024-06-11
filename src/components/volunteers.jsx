/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Typewriter } from 'react-simple-typewriter';

const Volunteers = () => {


  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/program/13.jpg')] bg-no-repeat bg-cover bg-center opacity-90">     
      <div className="w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight text-shadow">
          <Typewriter
            words={['Meet the Volunteering Team']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p>
          Welcome to Hygieiora - Your trusted partner in mental health care.
          We're dedicated to empowering your health choices for a vibrant life.
          <span className="hidden md:block">
            We believe in the power of understanding and managing your mental
            health, and we're here to support you every step of the way. Sign up
            now for early access participation and start your journey towards
            better mental health.
          </span>
        </p>
       
      </div>
    </div>
  );
};

export default Volunteers;
