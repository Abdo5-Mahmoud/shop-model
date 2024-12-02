import React from "react";
import Slider from "react-slick";
import TestimonialImg from "./images//1065-103x103.jpg";
const testimonialData = [
  {
    id: 1,
    name: "Vector",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellathic excepturi asperiores, distinctio debitis officiis laboreexpedita nostrum esse voluptatum libero eaque doloribus, consequatursequi sapiente omnis, molestias magnam numquam?",
    img: TestimonialImg,
  },
  {
    id: 2,
    name: "Vector",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellathic excepturi asperiores, distinctio debitis officiis laboreexpedita nostrum esse voluptatum libero eaque doloribus, consequatursequi sapiente omnis, molestias magnam numquam?",
    img: TestimonialImg,
  },
  {
    id: 3,
    name: "Vector",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellathic excepturi asperiores, distinctio debitis officiis laboreexpedita nostrum esse voluptatum libero eaque doloribus, consequatursequi sapiente omnis, molestias magnam numquam?",
    img: TestimonialImg,
  },
  {
    id: 4,
    name: "Vector",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellathic excepturi asperiores, distinctio debitis officiis laboreexpedita nostrum esse voluptatum libero eaque doloribus, consequatursequi sapiente omnis, molestias magnam numquam?",
    img: TestimonialImg,
  },
  {
    id: 5,
    name: "Vector",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellathic excepturi asperiores, distinctio debitis officiis laboreexpedita nostrum esse voluptatum libero eaque doloribus, consequatursequi sapiente omnis, molestias magnam numquam?",
    img: TestimonialImg,
  },
];
const newSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slideToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};
function Testimonials() {
  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto ">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold ">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            hic excepturi asperiores, distinctio debitis officiis labore
            expedita nostrum esse voluptatum libero eaque doloribus, consequatur
            sequi sapiente omnis, molestias magnam numquam?
          </p>
        </div>
        {/* Testimonials cards */}
        <div data-aos="zoom-in">
          <Slider {...newSettings}>
            {testimonialData.map((item) => (
              <div key={item.id} className="my-6">
                <div
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800
                bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={item.img}
                      alt=""
                      className=" rounded-full w-20 h-20 "
                    />
                  </div>
                  <div className="flex items-center flex-col gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500"> {item.text} </p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {item.name}
                      </h1>
                    </div>
                  </div>
                  <p className=" text-black/20 text-9xl font-serif absolute top-0 right-0 ">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
