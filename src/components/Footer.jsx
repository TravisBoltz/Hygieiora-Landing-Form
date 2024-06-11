import React from "react";
export default function Footer() {
  return (
    <footer>
    <section className=" bg-blue-600 text-white flex flex-col justify-center items-center w-full h-32">
      <p className="font-semibold p-2 text-xl ">Hygieiora</p>
      <p className="text-xs">Get connected and start therapy</p>
      <ul className="mt-3 text-sm flex gap-5">
          <li>Home</li>
          <li>About</li>
          <li>Our Story</li>
          <li>Our Impact</li>
      </ul>
      <p className="text-xs p-3">@ 2024 Hygieiora by Hygieiora Inc</p>
    </section>
    </footer>
  );
}
