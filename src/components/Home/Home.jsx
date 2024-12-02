import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Products from "../Products/Products";
import TopProducts from "../TopProducts/TopProducts";
import Banner from "../Banner/Banner";
import Subscribe from "../Subscribe/Subscribe";
import Testimonials from "../Testimonials/Testimonials";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { Outlet } from "react-router";

function Home({ handelOrder, products, order, setOrder, settings }) {
  return (
    <>
      <Navbar handelOrder={handelOrder} home={true} />
      <Hero settings={settings} handelOrder={handelOrder} />
      <Products products={products} button={false} home={true} />
      <TopProducts products={products} home={true} />
      <Banner />
      <Subscribe />
      <Products products={products} button={true} home={true} />
      <Testimonials settings={settings} />
      <Login order={order} setOrder={setOrder} />
      <Footer />
    </>
  );
}

export default Home;
