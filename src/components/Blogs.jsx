import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/program/2.jpg";
import img2 from "../assets/program/2.jpg";
import img3 from "../assets/program/3.jpg";
import img4 from "../assets/program/4.jpg";
import img5 from "../assets/program/5.jpg";
import img6 from "../assets/program/6.jpg";

const Blogs = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-backgroundColor text-4xl font-semibold text-center lg:text-start">
            Latest Post
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Stay informed and empowered with our regularly updated blog. We
            cover a range of topics from unraveling the mysteries of sleep,
            understanding pediatric vaccinations, navigating mental health, the
            importance of regular exercise, to skin health 101.
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5" content="">
          <BlogCard
            img={img1}
            headlines="Unraveling the Mysteries of Sleep"
            content="Explore the science behind sleep and its profound impact on mental health."
          />
          <BlogCard
            img={img2}
            headlines="The Heart-Healthy Diet"
            content="Learn how diet influences mental well-being and discover heart-healthy food tips."
          />
          <BlogCard
            img={img3}
            headlines="Understanding Pediatric Vaccinations"
            content="A guide to pediatric vaccinations and their role in child mental development."
          />
          <BlogCard
            img={img4}
            headlines="Navigating Mental Health"
            content="Insights and strategies for managing mental health in a complex world."
          />
          <BlogCard
            img={img5}
            headlines="The Importance of Regular Exercise"
            content="Uncover the connection between physical activity and mental health enhancement."
          />
          {/* <BlogCard
            img={img6}
            headlines="Skin Health 101"
            content="Discover the psychological effects of skin health and ways to nurture it."
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
