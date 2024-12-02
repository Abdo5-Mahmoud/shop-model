import React from "react";
import BackIMg from "./images/orange-pattern-w2kUn2Xh.jpg";
const Img = {
  backgroundImage: `url(${BackIMg})`,
  backgroundPosition: `center`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
function Subscribe() {
  return (
    <div
      data-aos="zoom-in"
      className=" mb-20 bg-gray-100 dark:bg-gray-800 text-white"
      style={Img}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            name="input"
            className="w-full p-3"
            placeholder="Enter Your Email"
          />
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
