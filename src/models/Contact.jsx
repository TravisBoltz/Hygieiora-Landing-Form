// // Contact.js
// import React from "react";
// import Button from "../layouts/Button";
// import axios from "axios"; // Make sure to install axios using npm install axios

// const Contact = ({ closeForm }) => {
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.target);
//     try {
//       const response = await axios.post(
//         "https://script.google.com/macros/s/AKfycbwSeffidTkLMsC6jCpdKAXYJPkOvbAq-T85jkO4QcJM8svN39_IBjalM-ySqb4olHYF/exec",
//         data
//       );
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="popup-form absolute mt-12 text-black">
//         <form
//           onSubmit={handleSubmit}
//           className=" w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl"
//         >
//           <h1 className="text-4xl font-semibold text-center text-backgroundColor">
//             Apply{" "}
//           </h1>
//           <div className=" flex flex-col">
//             <input
//               className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
//               type="text"
//               name="userFirstName"
//               id="userFirstName"
//               placeholder="First Name"
//             />
//           </div>
//           <div className=" flex flex-col">
//             <input
//               className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
//               type="text"
//               name="userLastName"
//               id="userLastName"
//               placeholder="Last Name"
//             />
//           </div>
//           <div className=" flex flex-col">
//             <input
//               className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
//               type="email"
//               name="userEmail"
//               id="userEmail"
//               placeholder="Your Email"
//             />
//           </div>
//           <div className=" flex flex-col">
//             <input
//               className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
//               type="number"
//               name="userNumber"
//               id="userNumber"
//               placeholder="Phone No."
//             />
//           </div>
//           <div className=" flex gap-5">
//             <button
//               className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
//               type="submit"
//             >
//               Application
//             </button>{" "}
//             <button
//               className=" bg-backgroundColor text-white px-10 rounded-md active:bg-red-500"
//               onClick={closeForm}
//             >
//               Close
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
// Contact.js
import React, { useState } from "react";
import Button from "../layouts/Button";
import axios from "axios"; // Make sure to install axios using npm install axios

const Contact = ({ closeForm }) => {
  const [done, setDone] = useState(false);
  async function Submit(e) {
    e.preventDefault(); // prevent form from submitting
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz4iaWysIU0uEa0_bX5fKRgpebDbQuHegYzvvTT7yanbig5XMN8X_dRUoY0UIQCgEeD/exec",
        {
          method: "POST",
          body: formDatab,
          mode: "no-cors", // 'cors' by default
        }
      );
      setDone(true); // Move this line here
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // console.log(data);
    } catch (error) {
      console.log(error);
      // alert(
      //   "Problem with network connectivity. Check you network cable or wifi connection and try again."
      // );
      // formEle.reset(); // Clear the form after an error
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        {done ? (
          <div className="flex flex-col justify-center w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl">
            <h1 className="text-2xl font-semibold text-center text-green-500">
              Done ✔️
            </h1>
            <button
              className=" bg-backgroundColor p-2 text-white px-10 rounded-md active:bg-red-500"
              onClick={closeForm}
            >
              Close
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => Submit(e)}
            className="form w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl"
          >
            <h1 className="text-4xl font-semibold text-center text-backgroundColor">
              Apply{" "}
            </h1>
            <div className=" flex flex-col">
              <input
                className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                type="text"
                name="FirstName"
                id="FirstName"
                placeholder="First Name"
              />
            </div>
            <div className=" flex flex-col">
              <input
                className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                type="text"
                name="LastName"
                id="LastName"
                placeholder="Last Name"
              />
            </div>
            <div className=" flex flex-col">
              <input
                className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                type="email"
                name="Email"
                id="Email"
                placeholder="Your Email"
              />
            </div>
            <div className=" flex flex-col">
              <input
                className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                type="tel"
                name="TelephoneNumber"
                id="TelephoneNumber"
                placeholder="Phone No."
                pattern="[0-9]*" // Accept only numbers
              />
            </div>
            <div className=" flex gap-5">
              <button
                className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
                type="submit"
              >
                Application
              </button>{" "}
              <button
                className=" bg-backgroundColor text-white px-10 rounded-md active:bg-red-500"
                onClick={closeForm}
              >
                Close
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
