// import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Impact from "./components/Impact";
import Impact_mobile from "./components/Impact_mobile";
// import Doctors from "./components/Doctors";
// import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
// import Volunteers from "./components/volunteers";
const App = () => {
  return (
    <div>
      <Navbar />

      <main className="">
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>
        {/* <div id="story">
          <Volunteers/>
        </div> */}
        <div id="impact">
          <Impact />
        </div>
       
        <div id="impact">
          <Impact_mobile />
        </div>
        {/* <div id="form">
          <MyForm />
        </div> */}
        {/* <div id="doctors">
          <Doctors />
        </div> */}

        {/* <div id="blog">
          <Blogs />
        </div> */}
        {/* <div id="blog">
          <Blogs />
        </div> */}
      </main>

      <Footer />
    </div>
  );
};

export default App;
