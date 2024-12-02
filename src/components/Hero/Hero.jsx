import React from "react";
import Hero1 from "./img/1.jpg";
import Hero2 from "./img/2.jpg";
import Slider from "react-slick";
const ImgageList = [
  {
    id: 1,
    img: Hero1,
    title: "Up to 50% off on the first order",
    description: "Small Flower Products",
  },
  {
    id: 2,
    title: "Up to 20% off on the first order",
    img: Hero2,
    description: "Big Flower Product",
  },
];
function Hero({ settings, handelOrder }) {
  return (
    <div className="relative  overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern */}
      <div
        className="h-[700px] w-[700px] bg-primary/40
      absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"
      ></div>
      {/* hero section */}
      <div className="container pb-3 sm-pb-0">
        <Slider {...settings}>
          {ImgageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-30">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    data-aos-once="true"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                      onClick={handelOrder}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image content section */}
                <div className="order-1 sm:order-2 ">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-11"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-100
                      lg:scale-110 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
