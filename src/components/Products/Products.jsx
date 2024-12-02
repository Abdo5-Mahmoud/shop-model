import { FaStar } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";

function Products({ products, button, home }) {
  products = home ? products.slice(0, 5) : products;
  // const [data, setData] = useState("");
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await fetch("http://localhost:9000/products");
  //       const data = await res.json();
  //       setData(data);
  //     } catch {
  //       throw new Error("Something went wrong with fetching");
  //     }
  //   }
  //   fetchData();
  // }, []);
  return (
    <div className="mt-14 mb-12">
      {home ? "" : <Navbar />}
      <div className="container">
        {/* Header section */}
        <div className="text-center my-10 max-w-[600px] mx-auto ">
          <h1 data-aos="fade-up" className="text-3xl font-bold ">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            hic excepturi asperiores, distinctio debitis officiis labore
            expedita nostrum esse voluptatum libero eaque doloribus, consequatur
            sequi sapiente omnis, molestias magnam numquam?
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-6">
            {/* card section */}
            {products.map((data, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={index * 50}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className=" text-yellow-400 " />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button*/}
          {button ? (
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
                View All Button
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
