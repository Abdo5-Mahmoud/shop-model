import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Products from "./components/Products/Products";
import TopProducts from "./components/TopProducts/TopProducts";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Login from "./components/Login/Login";

import ProductImg1 from "/src/assets/products/1.jpg";
import ProductImg2 from "/src/assets/products/2.jpg";
import ProductImg3 from "/src/assets/products/3.jpg";
import ProductImg4 from "/src/assets/products/4.jpg";
import ProductImg5 from "/src/assets/products/5.jpg";
import ProductImg6 from "/src/assets/products/6.jpg";
import ProductImg7 from "/src/assets/products/7.jpg";
import ProductImg8 from "/src/assets/products/8.jpg";
import ProductImg9 from "/src/assets/products/9.jpg";
import ProductImg10 from "/src/assets/products/10.jpg";
import ProductImg11 from "/src/assets/products/11.jpg";
import ProductImg12 from "/src/assets/products/12.jpg";
import ProductImg13 from "/src/assets/products/13.jpg";
import ProductImg14 from "/src/assets/products/14.jpg";
import ProductImg15 from "/src/assets/products/15.jpg";

const initProducts = [
  {
    id: 1,
    img: ProductImg1,
    title: "Sales",
    rating: 4,
    color: "blue",
    aosDlay: "0",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat hic excepturi asperiores, distinctio debitis officiis labore expedita nostrum esse voluptatum libero eaque doloribus, consequatur sequi sapiente omnis, molestias magnam numquam?",
  },
  {
    id: 2,
    img: ProductImg2,
    title: "Sales",
    rating: 4,
    color: "blue",
    aosDlay: "0",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat hic excepturi asperiores, distinctio debitis officiis labore expedita nostrum esse voluptatum libero eaque doloribus, consequatur sequi sapiente omnis, molestias magnam numquam?",
  },
  {
    id: 3,
    img: ProductImg3,
    title: "Sales",
    rating: 4,
    color: "blue",
    aosDlay: "0",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat hic excepturi asperiores, distinctio debitis officiis labore expedita nostrum esse voluptatum libero eaque doloribus, consequatur sequi sapiente omnis, molestias magnam numquam?",
  },
  {
    id: 4,
    img: ProductImg4,
    title: "Sales",
    rating: 4,
    color: "blue",
    aosDlay: "0",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat hic excepturi asperiores, distinctio debitis officiis labore expedita nostrum esse voluptatum libero eaque doloribus, consequatur sequi sapiente omnis, molestias magnam numquam?",
  },
  {
    id: 5,
    img: ProductImg5,
    title: "Sales",
    rating: 4,
    color: "blue",
    aosDlay: "0",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat hic excepturi asperiores, distinctio debitis officiis labore expedita nostrum esse voluptatum libero eaque doloribus, consequatur sequi sapiente omnis, molestias magnam numquam?",
  },
  {
    id: 6,
    img: ProductImg6,
    title: "Sales",
    rating: 4,
    color: "blue",
    aosDlay: "0",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat hic excepturi asperiores, distinctio debitis officiis labore expedita nostrum esse voluptatum libero eaque doloribus, consequatur sequi sapiente omnis, molestias magnam numquam?",
  },
  {
    id: 7,
    img: ProductImg7,
    title: "Sales",
    rating: 4,
    color: "blue",
    aosDlay: "0",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat hic excepturi asperiores, distinctio debitis officiis labore expedita nostrum esse voluptatum libero eaque doloribus, consequatur sequi sapiente omnis, molestias magnam numquam?",
  },
  {
    id: 8,
    img: ProductImg8,
    title: "Sales",
    rating: 4,
    color: "blue",
    aosDlay: "0",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat hic excepturi asperiores, distinctio debitis officiis labore expedita nostrum esse voluptatum libero eaque doloribus, consequatur sequi sapiente omnis, molestias magnam numquam?",
  },
  {
    id: 9,
    img: ProductImg9,
    title: "Sales",
    rating: 4,
    color: "blue",
    aosDlay: "0",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat hic excepturi asperiores, distinctio debitis officiis labore expedita nostrum esse voluptatum libero eaque doloribus, consequatur sequi sapiente omnis, molestias magnam numquam?",
  },
  {
    id: 10,
    img: ProductImg10,
    title: "Sales",
    rating: 4,
    color: "blue",
    aosDlay: "0",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat hic excepturi asperiores, distinctio debitis officiis labore expedita nostrum esse voluptatum libero eaque doloribus, consequatur sequi sapiente omnis, molestias magnam numquam?",
  },
  {
    id: 11,
    img: ProductImg11,
    title: "Sales",
    rating: 4,
    color: "blue",
    aosDlay: "0",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat hic excepturi asperiores, distinctio debitis officiis labore expedita nostrum esse voluptatum libero eaque doloribus, consequatur sequi sapiente omnis, molestias magnam numquam?",
  },
  {
    id: 12,
    img: ProductImg12,
    title: "Sales",
    rating: 4,
    color: "blue",
    aosDlay: "0",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat hic excepturi asperiores, distinctio debitis officiis labore expedita nostrum esse voluptatum libero eaque doloribus, consequatur sequi sapiente omnis, molestias magnam numquam?",
  },
  {
    id: 13,
    img: ProductImg13,
    title: "Sales",
    rating: 4,
    color: "blue",
    aosDlay: "0",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat hic excepturi asperiores, distinctio debitis officiis labore expedita nostrum esse voluptatum libero eaque doloribus, consequatur sequi sapiente omnis, molestias magnam numquam?",
  },
  {
    id: 14,
    img: ProductImg14,
    title: "Sales",
    rating: 4,
    color: "blue",
    aosDlay: "0",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat hic excepturi asperiores, distinctio debitis officiis labore expedita nostrum esse voluptatum libero eaque doloribus, consequatur sequi sapiente omnis, molestias magnam numquam?",
  },
  {
    id: 15,
    img: ProductImg15,
    title: "Sales",
    rating: 4,
    color: "blue",
    aosDlay: "0",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat hic excepturi asperiores, distinctio debitis officiis labore expedita nostrum esse voluptatum libero eaque doloribus, consequatur sequi sapiente omnis, molestias magnam numquam?",
  },
];
var settings = {
  dots: false,
  arrows: false,
  infinte: true,
  speed: 800,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: "ease-in-out",
  pauseOnHover: false,
  pauseOnFocus: true,
};

function App() {
  const [products, setProducts] = useState(initProducts);
  const [order, setOrder] = useState(false);
  function handelOrder() {
    setOrder(true);
  }
  let params = useParams();
  console.log(params);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home products={products} settings={settings} />}
          />
          <Route
            path="topSale"
            element={
              <TopProducts products={products} handelOrder={handelOrder} />
            }
          />
          <Route path="products" element={<Products products={products} />} />
          <Route
            path="login"
            element={<Login order={order} setOrder={setOrder} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// <Navbar handelOrder={handelOrder} />
//       <Hero settings={settings} handelOrder={handelOrder} />
//       <Products products={products} button={false} />
//       <TopProducts products={products} handelOrder={handelOrder} />
//       <Banner />
//       <Subscribe />
//       <Products products={products} button={true} />
//       <Testimonials settings={settings} />
//       <Login order={order} setOrder={setOrder} />
//       <Footer />
